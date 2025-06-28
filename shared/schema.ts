import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const weapons = pgTable("weapons", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  primary: text("primary").notNull(),
  rarity: text("rarity").notNull(),
  stars: integer("stars").notNull(),
  image: text("image").notNull(),
  stats: json("stats").notNull(),
});

export const weaponStatSchema = z.object({
  icon: z.string(),
  label: z.string(),
  value: z.string(),
});

export const insertWeaponSchema = createInsertSchema(weapons, {
  stats: z.array(weaponStatSchema),
}).omit({
  id: true,
});

export type InsertWeapon = z.infer<typeof insertWeaponSchema>;
export type Weapon = {
  id: number;
  name: string;
  category: string;
  primary: string;
  rarity: string;
  stars: number;
  image: string;
  stats: WeaponStat[];
};
export type WeaponStat = z.infer<typeof weaponStatSchema>;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
