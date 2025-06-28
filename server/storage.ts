import { users, weapons, type User, type InsertUser, type Weapon } from "@shared/schema";
import { tacticoolWeapons } from "../client/src/data/tacticool-weapons";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getWeaponsByCategory(category: string): Promise<Weapon[]>;
  getAllCategories(): Promise<string[]>;
  searchWeapons(category: string, searchTerm: string): Promise<Weapon[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private weaponsMap: Map<string, Weapon[]>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
    this.weaponsMap = new Map();
    
    // Initialize weapons data
    Object.entries(tacticoolWeapons).forEach(([category, weapons]) => {
      this.weaponsMap.set(category, weapons);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getWeaponsByCategory(category: string): Promise<Weapon[]> {
    return this.weaponsMap.get(category) || [];
  }

  async getAllCategories(): Promise<string[]> {
    return Array.from(this.weaponsMap.keys());
  }

  async searchWeapons(category: string, searchTerm: string): Promise<Weapon[]> {
    const categoryWeapons = this.weaponsMap.get(category) || [];
    if (!searchTerm) return categoryWeapons;
    
    const term = searchTerm.toLowerCase();
    return categoryWeapons.filter(weapon =>
      weapon.name.toLowerCase().includes(term)
    );
  }
}

export const storage = new MemStorage();
