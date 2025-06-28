import { Weapon } from "@shared/schema";

export const weaponsData: Record<string, Weapon[]> = {
  "Assault Rifle": [
    {
      id: 1,
      name: "AK-47 TACTICAL",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Épico",
      stars: 5,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7250" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1850" },
        { icon: "fas fa-bolt", label: "Munição", value: "30" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "650" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "75" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "85" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "92" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.8" }
      ]
    },
    {
      id: 2,
      name: "M4A1 CARBINE",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE", 
      rarity: "Lendário",
      stars: 6,
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6850" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1750" },
        { icon: "fas fa-bolt", label: "Munição", value: "30" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "750" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "85" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "80" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "95" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.5" }
      ]
    },
    {
      id: 3,
      name: "SCAR-H HEAVY",
      category: "Assault Rifle",
      primary: "ARMA PRIMÁRIA: ASSAULT RIFLE",
      rarity: "Raro", 
      stars: 4,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7650" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1950" },
        { icon: "fas fa-bolt", label: "Munição", value: "20" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "80" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "90" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "88" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "3.0" }
      ]
    }
  ],
  "SMG": [
    {
      id: 4,
      name: "MP5 TACTICAL",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Comum",
      stars: 3,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4250" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1250" },
        { icon: "fas fa-bolt", label: "Munição", value: "30" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "800" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "65" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "45" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "105" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.0" }
      ]
    },
    {
      id: 5,
      name: "UMP45 COMPACT",
      category: "SMG",
      primary: "ARMA PRIMÁRIA: SMG",
      rarity: "Incomum",
      stars: 3,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4650" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1350" },
        { icon: "fas fa-bolt", label: "Munição", value: "25" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "650" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "70" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "50" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "102" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "2.2" }
      ]
    }
  ],
  "Shotgun": [
    {
      id: 6,
      name: "OXHEAD",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5366" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "114" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "96" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.2" }
      ]
    },
    {
      id: 7,
      name: "REAVER M30",
      category: "Shotgun",
      primary: "ARMA PRIMÁRIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Munição", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "108" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "47" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "99" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "4.2" }
      ]
    }
  ],
  "Sniper Rifle": [
    {
      id: 8,
      name: "BARRETT M82",
      category: "Sniper Rifle",
      primary: "ARMA PRIMÁRIA: SNIPER RIFLE",
      rarity: "Lendário",
      stars: 6,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "15750" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2250" },
        { icon: "fas fa-bolt", label: "Munição", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "98" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "150" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "75" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "5.8" }
      ]
    }
  ],
  "Machine Gun": [
    {
      id: 9,
      name: "M249 SAW",
      category: "Machine Gun",
      primary: "ARMA PRIMÁRIA: MACHINE GUN",
      rarity: "Épico",
      stars: 5,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6250" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1650" },
        { icon: "fas fa-bolt", label: "Munição", value: "100" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "750" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "60" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "95" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "70" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "6.5" }
      ]
    }
  ],
  "Pistols": [
    {
      id: 10,
      name: "GLOCK 17",
      category: "Pistols",
      primary: "ARMA SECUNDÁRIA: PISTOL",
      rarity: "Comum",
      stars: 2,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2850" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "950" },
        { icon: "fas fa-bolt", label: "Munição", value: "17" },
        { icon: "fas fa-tachometer-alt", label: "Cadência de Tiro", value: "400" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "80" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "35" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "110" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "1.8" }
      ]
    }
  ],
  "Melee": [
    {
      id: 11,
      name: "COMBAT KNIFE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Comum",
      stars: 1,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "3500" },
        { icon: "fas fa-bolt", label: "Durabilidade", value: "∞" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "250" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "100" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.5" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "115" }
      ]
    }
  ],
  "Prototypes": [
    {
      id: 12,
      name: "PLASMA RIFLE X1",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "Mítico",
      stars: 7,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "12500" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2500" },
        { icon: "fas fa-bolt", label: "Energia", value: "25" },
        { icon: "fas fa-tachometer-alt", label: "Taxa de Disparo", value: "300" },
        { icon: "fas fa-bullseye", label: "Precisão", value: "95" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "120" },
        { icon: "fas fa-running", label: "Velocidade do Personagem", value: "85" },
        { icon: "fas fa-sync-alt", label: "Tempo de Recarga", value: "8.0" }
      ]
    }
  ]
};

export const weaponCategories = [
  { id: "Assault Rifle", icon: "fas fa-crosshairs", label: "Assault Rifle" },
  { id: "SMG", icon: "fas fa-bolt", label: "SMG" },
  { id: "Shotgun", icon: "fas fa-bomb", label: "Shotgun" },
  { id: "Sniper Rifle", icon: "fas fa-bullseye", label: "Sniper Rifle" },
  { id: "Machine Gun", icon: "fas fa-fire", label: "Machine Gun" },
  { id: "Pistols", icon: "fas fa-circle", label: "Pistols" },
  { id: "Melee", icon: "fas fa-sword", label: "Melee" },
  { id: "Prototypes", icon: "fas fa-flask", label: "Prototypes" }
];
