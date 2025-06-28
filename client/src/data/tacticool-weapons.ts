import { Weapon } from "@shared/schema";

// Parse RTF data and convert to proper weapon objects
const parseRTFWeapons = (rtfContent: string): Weapon[] => {
  try {
    // Extract JSON from RTF content
    const jsonMatch = rtfContent.match(/\[[\s\S]*\]/);
    if (!jsonMatch) return [];
    
    const jsonStr = jsonMatch[0]
      .replace(/\\\\/g, '')
      .replace(/\\"/g, '"')
      .replace(/\\\{/g, '{')
      .replace(/\\\}/g, '}')
      .replace(/\\\[/g, '[')
      .replace(/\\\]/g, ']');
    
    const weapons = JSON.parse(jsonStr);
    
    return weapons.map((weapon: any) => ({
      id: weapon.id,
      name: weapon.nome,
      category: weapon.categoria,
      primary: `ARMA PRIMÁRIA: ${weapon.categoria.toUpperCase()}`,
      rarity: weapon.raridade,
      stars: weapon.raridade === "Comum" ? 2 
            : weapon.raridade === "Incomum" ? 3
            : weapon.raridade === "Raro" ? 4
            : weapon.raridade === "Épico" ? 5
            : 3,
      image: `https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300`,
      stats: Object.entries(weapon.stats)
        .filter(([key, value]) => value !== null && value !== undefined)
        .map(([key, value]) => ({
          icon: getStatIcon(key),
          label: getStatLabel(key),
          value: String(value)
        }))
    }));
  } catch (error) {
    console.error('Error parsing RTF weapons:', error);
    return [];
  }
};

const getStatIcon = (statKey: string): string => {
  const iconMap: Record<string, string> = {
    'dano': 'fas fa-burn',
    'dano_melee': 'fas fa-fist-raised',
    'municao': 'fas fa-bolt',
    'cadencia_de_tiro': 'fas fa-tachometer-alt',
    'precisao': 'fas fa-bullseye',
    'alcance': 'fas fa-ruler-horizontal',
    'velocidade_personagem': 'fas fa-running',
    'tempo_recarga': 'fas fa-sync-alt',
    'burn': 'fas fa-fire',
    'fuel': 'fas fa-gas-pump',
    'bleed': 'fas fa-tint'
  };
  return iconMap[statKey] || 'fas fa-info-circle';
};

const getStatLabel = (statKey: string): string => {
  const labelMap: Record<string, string> = {
    'dano': 'Dano',
    'dano_melee': 'Dano Melee',
    'municao': 'Munição',
    'cadencia_de_tiro': 'Cadência de Tiro',
    'precisao': 'Precisão',
    'alcance': 'Alcance',
    'velocidade_personagem': 'Velocidade do Personagem',
    'tempo_recarga': 'Tempo de Recarga',
    'burn': 'Burn',
    'fuel': 'Fuel',
    'bleed': 'Bleed'
  };
  return labelMap[statKey] || statKey;
};

// RTF Content from attached files
const assaultRifleRTF = `{\rtf1\ansi\ansicpg1252\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 [
  {
    "id": 1,
    "nome": "K-TRAC 5.8",
    "categoria": "Assault Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 601,
      "dano_melee": 978,
      "municao": 37,
      "cadencia_de_tiro": 402,
      "precisao": "275-655",
      "alcance": 14.9,
      "velocidade_personagem": 88,
      "tempo_recarga": 2.2
    }
  },
  {
    "id": 2,
    "nome": "ARCLIGHT 56",
    "categoria": "Assault Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 759,
      "dano_melee": 978,
      "municao": 26,
      "cadencia_de_tiro": 262,
      "precisao": "158-885",
      "alcance": 17.4,
      "velocidade_personagem": 91,
      "tempo_recarga": 2.3
    }
  },
  {
    "id": 3,
    "nome": "MAS-47",
    "categoria": "Assault Rifle",
    "raridade": "Comum",
    "stats": {
      "dano": 401,
      "dano_melee": 692,
      "municao": 35,
      "cadencia_de_tiro": 408,
      "precisao": "290-676",
      "alcance": 16.7,
      "velocidade_personagem": 89,
      "tempo_recarga": 2.3
    }
  },
  {
    "id": 4,
    "nome": "KRAIT",
    "categoria": "Assault Rifle",
    "raridade": "Incomum",
    "stats": {
      "dano": 655,
      "dano_melee": 863,
      "municao": 26,
      "cadencia_de_tiro": 271,
      "precisao": "158-885",
      "alcance": 18.7,
      "velocidade_personagem": 91,
      "tempo_recarga": 2.3
    }
  },
  {
    "id": 5,
    "nome": "FALCON A4",
    "categoria": "Assault Rifle",
    "raridade": "Incomum",
    "stats": {
      "dano": 541,
      "dano_melee": 863,
      "municao": 34,
      "cadencia_de_tiro": 438,
      "precisao": "253-624",
      "alcance": 15.9,
      "velocidade_personagem": 92,
      "tempo_recarga": 2.5
    }
  },
  {
    "id": 6,
    "nome": "QQ-95",
    "categoria": "Assault Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 911,
      "dano_melee": 1150,
      "municao": 27,
      "cadencia_de_tiro": 264,
      "precisao": "117-798",
      "alcance": 18.5,
      "velocidade_personagem": 88,
      "tempo_recarga": 2.4
    }
  },
  {
    "id": 7,
    "nome": "GIDEN",
    "categoria": "Assault Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 683,
      "dano_melee": 1150,
      "municao": 37,
      "cadencia_de_tiro": 420,
      "precisao": "280-662",
      "alcance": 15.6,
      "velocidade_personagem": 90,
      "tempo_recarga": 2.5
    }
  },
  {
    "id": 8,
    "nome": "KULT-M",
    "categoria": "Assault Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 893,
      "dano_melee": 1150,
      "municao": 27,
      "cadencia_de_tiro": 268,
      "precisao": "122-809",
      "alcance": 18.1,
      "velocidade_personagem": 90,
      "tempo_recarga": 2.4
    }
  },
  {
    "id": 9,
    "nome": "VFX150",
    "categoria": "Assault Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 683,
      "dano_melee": 1150,
      "municao": 36,
      "cadencia_de_tiro": 420,
      "precisao": "275-655",
      "alcance": 15.9,
      "velocidade_personagem": 90,
      "tempo_recarga": 2.4
    }
  },
  {
    "id": 10,
    "nome": "AUCH",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 1052,
      "dano_melee": 1448,
      "municao": 28,
      "cadencia_de_tiro": 264,
      "precisao": "130-827",
      "alcance": 18.5,
      "velocidade_personagem": 90,
      "tempo_recarga": 2.45
    }
  },
  {
    "id": 11,
    "nome": "KANZAZ",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 866,
      "dano_melee": 1448,
      "municao": 34,
      "cadencia_de_tiro": 408,
      "precisao": "265-641",
      "alcance": 16.4,
      "velocidade_personagem": 91,
      "tempo_recarga": 2.6
    }
  },
  {
    "id": 12,
    "nome": "IAR-21",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 1052,
      "dano_melee": 1448,
      "municao": 29,
      "cadencia_de_tiro": 261,
      "precisao": "150-868",
      "alcance": 19.2,
      "velocidade_personagem": 89,
      "tempo_recarga": 2.5
    }
  },
  {
    "id": 13,
    "nome": "VAKTOR",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 909,
      "dano_melee": 1448,
      "municao": 33,
      "cadencia_de_tiro": 360,
      "precisao": "290-676",
      "alcance": 17.0,
      "velocidade_personagem": 88,
      "tempo_recarga": 2.4
    }
  },
  {
    "id": 14,
    "nome": "E2 PARAJUMPER",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 1244,
      "dano_melee": 1448,
      "municao": 24,
      "cadencia_de_tiro": 257,
      "precisao": "130-827",
      "alcance": 19.2,
      "velocidade_personagem": 86,
      "tempo_recarga": 2.3
    }
  },
  {
    "id": 15,
    "nome": "OLD WAR",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 779,
      "dano_melee": 1448,
      "municao": 36,
      "cadencia_de_tiro": 450,
      "precisao": "228-592",
      "alcance": 14.9,
      "velocidade_personagem": 92,
      "tempo_recarga": 2.3
    }
  },
  {
    "id": 16,
    "nome": "ECLIPSE",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 1074,
      "dano_melee": 1448,
      "municao": 29,
      "cadencia_de_tiro": 274,
      "precisao": "103-771",
      "alcance": 16.5,
      "velocidade_personagem": 87,
      "tempo_recarga": 2.6
    }
  },
  {
    "id": 17,
    "nome": "GREMLIN",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 823,
      "dano_melee": 1448,
      "municao": 39,
      "cadencia_de_tiro": 450,
      "precisao": "265-641",
      "alcance": 15.4,
      "velocidade_personagem": 92,
      "tempo_recarga": 2.5
    }
  },
  {
    "id": 18,
    "nome": "QQ-95 GOLD",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 1188,
      "dano_melee": 1448,
      "municao": 28,
      "cadencia_de_tiro": 264,
      "precisao": "117-798",
      "alcance": 18.7,
      "velocidade_personagem": 88,
      "tempo_recarga": 2.5
    }
  },
  {
    "id": 19,
    "nome": "SPAR-M8",
    "categoria": "Assault Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 907,
      "dano_melee": 1448,
      "municao": null,
      "cadencia_de_tiro": "139-924",
      "precisao": "275-655",
      "alcance": 15.4,
      "velocidade_personagem": 90,
      "tempo_recarga": "0.65-2.6"
    }
  }
]}`;

const smgRTF = `[
  {
    "id": 1,
    "nome": "HALBERD V10",
    "categoria": "SMG",
    "raridade": "Raro",
    "stats": {
      "dano": 404,
      "dano_melee": 1136,
      "municao": 29,
      "cadencia_de_tiro": 564,
      "precisao": 360,
      "alcance": 12.1,
      "velocidade_personagem": 100,
      "tempo_recarga": 2.2
    }
  },
  {
    "id": 2,
    "nome": "ECHELON R",
    "categoria": "SMG",
    "raridade": "Raro",
    "stats": {
      "dano": 385,
      "dano_melee": 1136,
      "municao": 29,
      "cadencia_de_tiro": 564,
      "precisao": 360,
      "alcance": 12.6,
      "velocidade_personagem": 100,
      "tempo_recarga": 2.2
    }
  },
  {
    "id": 3,
    "nome": "TAMO 220",
    "categoria": "SMG",
    "raridade": "Comum",
    "stats": {
      "dano": 277,
      "dano_melee": 811,
      "municao": 32,
      "cadencia_de_tiro": 522,
      "precisao": 319,
      "alcance": 14.3,
      "velocidade_personagem": 98,
      "tempo_recarga": 2.1
    }
  },
  {
    "id": 4,
    "nome": "KPD-45",
    "categoria": "SMG",
    "raridade": "Incomum",
    "stats": {
      "dano": 333,
      "dano_melee": 1008,
      "municao": 30,
      "cadencia_de_tiro": 558,
      "precisao": 327,
      "alcance": 12.1,
      "velocidade_personagem": 101,
      "tempo_recarga": 2.0
    }
  },
  {
    "id": 5,
    "nome": "BOZON",
    "categoria": "SMG",
    "raridade": "Raro",
    "stats": {
      "dano": 441,
      "dano_melee": 1337,
      "municao": 34,
      "cadencia_de_tiro": 510,
      "precisao": 360,
      "alcance": 14.5,
      "velocidade_personagem": 96,
      "tempo_recarga": 2.5
    }
  },
  {
    "id": 6,
    "nome": "PTU80",
    "categoria": "SMG",
    "raridade": "Raro",
    "stats": {
      "dano": 464,
      "dano_melee": 1337,
      "municao": 31,
      "cadencia_de_tiro": 540,
      "precisao": 334,
      "alcance": 14.0,
      "velocidade_personagem": 100,
      "tempo_recarga": 2.1
    }
  },
  {
    "id": 7,
    "nome": "SM50",
    "categoria": "SMG",
    "raridade": "Raro",
    "stats": {
      "dano": 496,
      "dano_melee": 1337,
      "municao": 31,
      "cadencia_de_tiro": 468,
      "precisao": 319,
      "alcance": 12.3,
      "velocidade_personagem": 98,
      "tempo_recarga": 2.0
    }
  },
  {
    "id": 8,
    "nome": "MK20",
    "categoria": "SMG",
    "raridade": "Raro",
    "stats": {
      "dano": 522,
      "dano_melee": 1337,
      "municao": 32,
      "cadencia_de_tiro": 450,
      "precisao": 342,
      "alcance": 12.8,
      "velocidade_personagem": 97,
      "tempo_recarga": 2.1
    }
  },
  {
    "id": 9,
    "nome": "VENDETTA",
    "categoria": "SMG",
    "raridade": "Raro",
    "stats": {
      "dano": 508,
      "dano_melee": 1337,
      "municao": 28,
      "cadencia_de_tiro": 504,
      "precisao": 355,
      "alcance": 13.5,
      "velocidade_personagem": 99,
      "tempo_recarga": 2.3
    }
  },
  {
    "id": 10,
    "nome": "AUG",
    "categoria": "SMG",
    "raridade": "Épico",
    "stats": {
      "dano": 455,
      "dano_melee": 2067,
      "municao": 27,
      "cadencia_de_tiro": 570,
      "precisao": 311,
      "alcance": 12.3,
      "velocidade_personagem": 104,
      "tempo_recarga": 2.5
    }
  },
  {
    "id": 11,
    "nome": "KAS-12",
    "categoria": "SMG",
    "raridade": "Épico",
    "stats": {
      "dano": 488,
      "dano_melee": 2067,
      "municao": 26,
      "cadencia_de_tiro": 600,
      "precisao": 327,
      "alcance": 11.8,
      "velocidade_personagem": 106,
      "tempo_recarga": 2.4
    }
  },
  {
    "id": 12,
    "nome": "Famas",
    "categoria": "SMG",
    "raridade": "Épico",
    "stats": {
      "dano": 421,
      "dano_melee": 2067,
      "municao": 25,
      "cadencia_de_tiro": 660,
      "precisao": 288,
      "alcance": 11.5,
      "velocidade_personagem": 105,
      "tempo_recarga": 2.6
    }
  },
  {
    "id": 13,
    "nome": "KRISS",
    "categoria": "SMG",
    "raridade": "Épico",
    "stats": {
      "dano": 401,
      "dano_melee": 2067,
      "municao": 30,
      "cadencia_de_tiro": 720,
      "precisao": 255,
      "alcance": 11.0,
      "velocidade_personagem": 108,
      "tempo_recarga": 2.8
    }
  },
  {
    "id": 14,
    "nome": "BANSHEE",
    "categoria": "SMG",
    "raridade": "Épico",
    "stats": {
      "dano": 510,
      "dano_melee": 2067,
      "municao": 28,
      "cadencia_de_tiro": 540,
      "precisao": 340,
      "alcance": 13.0,
      "velocidade_personagem": 103,
      "tempo_recarga": 2.7
    }
  },
  {
    "id": 15,
    "nome": "TULUM",
    "categoria": "SMG",
    "raridade": "Épico",
    "stats": {
      "dano": 477,
      "dano_melee": 2067,
      "municao": 33,
      "cadencia_de_tiro": 630,
      "precisao": 273,
      "alcance": 12.0,
      "velocidade_personagem": 107,
      "tempo_recarga": 2.9
    }
  },
  {
    "id": 16,
    "nome": "MX4",
    "categoria": "SMG",
    "raridade": "Épico",
    "stats": {
      "dano": 435,
      "dano_melee": 2067,
      "municao": 35,
      "cadencia_de_tiro": 690,
      "precisao": 260,
      "alcance": 11.2,
      "velocidade_personagem": 109,
      "tempo_recarga": 3.1
    }
  },
  {
    "id": 17,
    "nome": "SCORPION",
    "categoria": "SMG",
    "raridade": "Épico",
    "stats": {
      "dano": 499,
      "dano_melee": 2067,
      "municao": 20,
      "cadencia_de_tiro": 588,
      "precisao": 301,
      "alcance": 12.5,
      "velocidade_personagem": 110,
      "tempo_recarga": 2.3
    }
  }
]`;

const shotgunRTF = `[
  {
    "id": 1,
    "nome": "OXHEAD",
    "categoria": "Shotgun",
    "raridade": "Raro",
    "stats": {
      "dano": 5366,
      "dano_melee": 1395,
      "municao": 2,
      "cadencia_de_tiro": 114,
      "precisao": 135,
      "alcance": 7.5,
      "velocidade_personagem": 96,
      "tempo_recarga": 4.2
    }
  },
  {
    "id": 2,
    "nome": "REAVER M30",
    "categoria": "Shotgun",
    "raridade": "Raro",
    "stats": {
      "dano": 4320,
      "dano_melee": 1395,
      "municao": 6,
      "cadencia_de_tiro": 108,
      "precisao": 47,
      "alcance": 8.6,
      "velocidade_personagem": 99,
      "tempo_recarga": 4.2
    }
  },
  {
    "id": 3,
    "nome": "SKAT-A",
    "categoria": "Shotgun",
    "raridade": "Comum",
    "stats": {
      "dano": 3225,
      "dano_melee": 988,
      "municao": 7,
      "cadencia_de_tiro": 102,
      "precisao": 27,
      "alcance": 8.6,
      "velocidade_personagem": 97,
      "tempo_recarga": 4.2
    }
  },
  {
    "id": 4,
    "nome": "VEGA DT",
    "categoria": "Shotgun",
    "raridade": "Incomum",
    "stats": {
      "dano": 4708,
      "dano_melee": 1047,
      "municao": 2,
      "cadencia_de_tiro": 96,
      "precisao": 162,
      "alcance": 6.8,
      "velocidade_personagem": 99,
      "tempo_recarga": 3.6
    }
  },
  {
    "id": 5,
    "nome": "TYR-9",
    "categoria": "Shotgun",
    "raridade": "Incomum",
    "stats": {
      "dano": 3928,
      "dano_melee": 1232,
      "municao": 7,
      "cadencia_de_tiro": 84,
      "precisao": 42,
      "alcance": 8.7,
      "velocidade_personagem": 96,
      "tempo_recarga": 3.6
    }
  },
  {
    "id": 6,
    "nome": "OOPS15",
    "categoria": "Shotgun",
    "raridade": "Raro",
    "stats": {
      "dano": 5637,
      "dano_melee": 1641,
      "municao": 5,
      "cadencia_de_tiro": 84,
      "precisao": 30,
      "alcance": 8.6,
      "velocidade_personagem": 98,
      "tempo_recarga": 4.2
    }
  },
  {
    "id": 7,
    "nome": "REMMY 14",
    "categoria": "Shotgun",
    "raridade": "Raro",
    "stats": {
      "dano": 6555,
      "dano_melee": 1641,
      "municao": 2,
      "cadencia_de_tiro": 90,
      "precisao": 98,
      "alcance": 7.7,
      "velocidade_personagem": 96,
      "tempo_recarga": 4.4
    }
  },
  {
    "id": 8,
    "nome": "UU-10",
    "categoria": "Shotgun",
    "raridade": "Raro",
    "stats": {
      "dano": 5268,
      "dano_melee": 1641,
      "municao": 6,
      "cadencia_de_tiro": 90,
      "precisao": 37,
      "alcance": 9.0,
      "velocidade_personagem": 97,
      "tempo_recarga": 4.0
    }
  },
  {
    "id": 9,
    "nome": "GRANDMASTER",
    "categoria": "Shotgun",
    "raridade": "Raro",
    "stats": {
      "dano": 5997,
      "dano_melee": 1641,
      "municao": 2,
      "cadencia_de_tiro": 105,
      "precisao": 87,
      "alcance": 7.0,
      "velocidade_personagem": 110,
      "tempo_recarga": 4.4
    }
  },
  {
    "id": 10,
    "nome": "PAS6",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 6320,
      "dano_melee": 2067,
      "municao": 8,
      "cadencia_de_tiro": 75,
      "precisao": 20,
      "alcance": 9.4,
      "velocidade_personagem": 99,
      "tempo_recarga": 3.4
    }
  },
  {
    "id": 11,
    "nome": "PUNCHER",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 6986,
      "dano_melee": 2067,
      "municao": 5,
      "cadencia_de_tiro": 84,
      "precisao": 48,
      "alcance": 9.9,
      "velocidade_personagem": 94,
      "tempo_recarga": 4.4
    }
  },
  {
    "id": 12,
    "nome": "THUNDER",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 7892,
      "dano_melee": 2067,
      "municao": 2,
      "cadencia_de_tiro": 102,
      "precisao": 148,
      "alcance": 6.6,
      "velocidade_personagem": 101,
      "tempo_recarga": 3.7
    }
  },
  {
    "id": 13,
    "nome": "SOURCE",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 6653,
      "dano_melee": 2067,
      "municao": 7,
      "cadencia_de_tiro": 78,
      "precisao": 44,
      "alcance": 9.7,
      "velocidade_personagem": 95,
      "tempo_recarga": 4.15
    }
  },
  {
    "id": 14,
    "nome": "HAIL",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 8371,
      "dano_melee": 2067,
      "municao": 2,
      "cadencia_de_tiro": 105,
      "precisao": 108,
      "alcance": 5.9,
      "velocidade_personagem": 102,
      "tempo_recarga": 3.6
    }
  },
  {
    "id": 15,
    "nome": "XL20",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 7972,
      "dano_melee": 2067,
      "municao": 2,
      "cadencia_de_tiro": 105,
      "precisao": 135,
      "alcance": 7.0,
      "velocidade_personagem": 99,
      "tempo_recarga": 4.0
    }
  },
  {
    "id": 16,
    "nome": "SHORTY",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 5988,
      "dano_melee": 2067,
      "municao": 6,
      "cadencia_de_tiro": 120,
      "precisao": 44,
      "alcance": 8.6,
      "velocidade_personagem": 99,
      "tempo_recarga": 4.3
    }
  },
  {
    "id": 17,
    "nome": "RIO BRAVO",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 7573,
      "dano_melee": 2067,
      "municao": 2,
      "cadencia_de_tiro": 135,
      "precisao": 102,
      "alcance": 7.7,
      "velocidade_personagem": 96,
      "tempo_recarga": 4.4
    }
  },
  {
    "id": 18,
    "nome": "FURN-S",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 4257,
      "dano_melee": 2067,
      "municao": 4,
      "cadencia_de_tiro": 78,
      "precisao": 44,
      "alcance": 11.0,
      "velocidade_personagem": 92,
      "tempo_recarga": 2.4,
      "burn": 2059
    }
  },
  {
    "id": 19,
    "nome": "DM-SG",
    "categoria": "Shotgun",
    "raridade": "Épico",
    "stats": {
      "dano": 6320,
      "dano_melee": 2067,
      "municao": 8,
      "cadencia_de_tiro": 120,
      "precisao": 27,
      "alcance": 7.7,
      "velocidade_personagem": 100,
      "tempo_recarga": 4.4
    }
  }
]`;

const sniperRifleRTF = `[
  {
    "id": 1,
    "nome": "TALON S4",
    "categoria": "Sniper Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 2405,
      "dano_melee": 817,
      "municao": 7,
      "cadencia_de_tiro": 61,
      "precisao": "569-911",
      "alcance": 22.5,
      "velocidade_personagem": 85,
      "tempo_recarga": 2.8
    }
  },
  {
    "id": 2,
    "nome": "TITAN S1",
    "categoria": "Sniper Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 2685,
      "dano_melee": 817,
      "municao": 6,
      "cadencia_de_tiro": 75,
      "precisao": "197-990",
      "alcance": 24.2,
      "velocidade_personagem": 81,
      "tempo_recarga": 3.2
    }
  },
  {
    "id": 3,
    "nome": "VLR-12",
    "categoria": "Sniper Rifle",
    "raridade": "Comum",
    "stats": {
      "dano": 1791,
      "dano_melee": 486,
      "municao": 6,
      "cadencia_de_tiro": 66,
      "precisao": "185-972",
      "alcance": 26.4,
      "velocidade_personagem": 80,
      "tempo_recarga": 2.9
    }
  },
  {
    "id": 4,
    "nome": "ARX-204",
    "categoria": "Sniper Rifle",
    "raridade": "Incomum",
    "stats": {
      "dano": 2056,
      "dano_melee": 610,
      "municao": 6,
      "cadencia_de_tiro": 59,
      "precisao": "583-925",
      "alcance": 24.8,
      "velocidade_personagem": 84,
      "tempo_recarga": 2.5
    }
  },
  {
    "id": 5,
    "nome": "HOWL",
    "categoria": "Sniper Rifle",
    "raridade": "Incomum",
    "stats": {
      "dano": 2394,
      "dano_melee": 610,
      "municao": 8,
      "cadencia_de_tiro": 76,
      "precisao": "132-885",
      "alcance": 25.3,
      "velocidade_personagem": 78,
      "tempo_recarga": 3.4
    }
  },
  {
    "id": 6,
    "nome": "CT 200M",
    "categoria": "Sniper Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 2936,
      "dano_melee": 961,
      "municao": 5,
      "cadencia_de_tiro": 54,
      "precisao": "632-967",
      "alcance": 24.2,
      "velocidade_personagem": 88,
      "tempo_recarga": 2.6
    }
  },
  {
    "id": 7,
    "nome": "TICKLE X3",
    "categoria": "Sniper Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 3001,
      "dano_melee": 961,
      "municao": 7,
      "cadencia_de_tiro": 73,
      "precisao": "132-885",
      "alcance": 24.8,
      "velocidade_personagem": 82,
      "tempo_recarga": 3.0,
      "bleed": 3
    }
  },
  {
    "id": 8,
    "nome": "MX2020",
    "categoria": "Sniper Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 2796,
      "dano_melee": 961,
      "municao": 6,
      "cadencia_de_tiro": 60,
      "precisao": "592-935",
      "alcance": 23.1,
      "velocidade_personagem": 87,
      "tempo_recarga": 2.4
    }
  },
  {
    "id": 9,
    "nome": "AW",
    "categoria": "Sniper Rifle",
    "raridade": "Raro",
    "stats": {
      "dano": 3159,
      "dano_melee": 961,
      "municao": 7,
      "cadencia_de_tiro": 70,
      "precisao": "176-958",
      "alcance": 25.3,
      "velocidade_personagem": 80,
      "tempo_recarga": 3.1
    }
  },
  {
    "id": 10,
    "nome": "MIMI 15",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 3453,
      "dano_melee": 1214,
      "municao": 7,
      "cadencia_de_tiro": 57,
      "precisao": "547-885",
      "alcance": 20.9,
      "velocidade_personagem": 84,
      "tempo_recarga": 2.45
    }
  },
  {
    "id": 11,
    "nome": "BULLSEYE",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 4223,
      "dano_melee": 1214,
      "municao": 6,
      "cadencia_de_tiro": 60,
      "precisao": "162-935",
      "alcance": 24.2,
      "velocidade_personagem": 77,
      "tempo_recarga": 3.1
    }
  },
  {
    "id": 12,
    "nome": "GF 24",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 3738,
      "dano_melee": 1214,
      "municao": 6,
      "cadencia_de_tiro": 53,
      "precisao": "650-981",
      "alcance": 24.8,
      "velocidade_personagem": 82,
      "tempo_recarga": 2.85
    }
  },
  {
    "id": 13,
    "nome": "ATHENA",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 3740,
      "dano_melee": 1214,
      "municao": 8,
      "cadencia_de_tiro": 78,
      "precisao": "162-935",
      "alcance": 23.1,
      "velocidade_personagem": 84,
      "tempo_recarga": 3.3
    }
  },
  {
    "id": 14,
    "nome": "FR USTR8",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 3560,
      "dano_melee": 1214,
      "municao": 6,
      "cadencia_de_tiro": 57,
      "precisao": "620-958",
      "alcance": 24.2,
      "velocidade_personagem": 85,
      "tempo_recarga": 2.5
    }
  },
  {
    "id": 15,
    "nome": "OSIRIS",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 4304,
      "dano_melee": 1214,
      "municao": 7,
      "cadencia_de_tiro": 60,
      "precisao": "185-972",
      "alcance": 26.4,
      "velocidade_personagem": 77,
      "tempo_recarga": 3.4
    }
  },
  {
    "id": 16,
    "nome": "SEE ME NOT",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 3453,
      "dano_melee": 1214,
      "municao": 7,
      "cadencia_de_tiro": 55,
      "precisao": "632-967",
      "alcance": 25.3,
      "velocidade_personagem": 82,
      "tempo_recarga": 2.8
    }
  },
  {
    "id": 17,
    "nome": "LONGSHOT-6",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 4304,
      "dano_melee": 1214,
      "municao": 6,
      "cadencia_de_tiro": 63,
      "precisao": "191-981",
      "alcance": 27.5,
      "velocidade_personagem": 78,
      "tempo_recarga": 3.3
    }
  },
  {
    "id": 18,
    "nome": "DOOM-INJECT .25",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 1016,
      "dano_melee": 1214,
      "municao": 1,
      "cadencia_de_tiro": null,
      "precisao": "385-1000",
      "alcance": 24.2,
      "velocidade_personagem": 85,
      "tempo_recarga": 1.35,
      "bleed": 1637
    }
  },
  {
    "id": 19,
    "nome": "MP200",
    "categoria": "Sniper Rifle",
    "raridade": "Épico",
    "stats": {
      "dano": 688,
      "dano_melee": 1214,
      "municao": 22,
      "cadencia_de_tiro": 424,
      "precisao": "771-935",
      "alcance": 23.1,
      "velocidade_personagem": 99,
      "tempo_recarga": 1.2
    }
  }
]`;

const machineGunRTF = `[
  {
    "id": 1,
    "nome": "GRINDCORE",
    "categoria": "Machine Gun",
    "raridade": "Raro",
    "stats": {
      "dano": 376,
      "dano_melee": 1096,
      "municao": 130,
      "cadencia_de_tiro": "384-960",
      "precisao": "76-540",
      "alcance": 18.5,
      "velocidade_personagem": 84,
      "tempo_recarga": 2.1
    }
  },
  {
    "id": 2,
    "nome": "PILLAR-2",
    "categoria": "Machine Gun",
    "raridade": "Raro",
    "stats": {
      "dano": 786,
      "dano_melee": 1096,
      "municao": 115,
      "cadencia_de_tiro": 708,
      "precisao": "112-290",
      "alcance": 16.8,
      "velocidade_personagem": 81,
      "tempo_recarga": 5.5
    }
  },
  {
    "id": 3,
    "nome": "NM-11",
    "categoria": "Machine Gun",
    "raridade": "Comum",
    "stats": {
      "dano": 520,
      "dano_melee": 770,
      "municao": 125,
      "cadencia_de_tiro": 612,
      "precisao": "85-230",
      "alcance": 19.2,
      "velocidade_personagem": 84,
      "tempo_recarga": 4.9
    }
  },
  {
    "id": 4,
    "nome": "OHM-8",
    "categoria": "Machine Gun",
    "raridade": "Incomum",
    "stats": {
      "dano": 690,
      "dano_melee": 964,
      "municao": 110,
      "cadencia_de_tiro": 660,
      "precisao": "90-248",
      "alcance": 17.3,
      "velocidade_personagem": 86,
      "tempo_recarga": 5.0
    }
  },
  {
    "id": 5,
    "nome": "M-TORQ",
    "categoria": "Machine Gun",
    "raridade": "Incomum",
    "stats": {
      "dano": 336,
      "dano_melee": 964,
      "municao": 105,
      "cadencia_de_tiro": "420-1050",
      "precisao": "87-579",
      "alcance": 18.7,
      "velocidade_personagem": 82,
      "tempo_recarga": 1.9
    }
  },
  {
    "id": 6,
    "nome": "MM66",
    "categoria": "Machine Gun",
    "raridade": "Raro",
    "stats": {
      "dano": 904,
      "dano_melee": 1289,
      "municao": 115,
      "cadencia_de_tiro": 660,
      "precisao": "94-258",
      "alcance": 18.0,
      "velocidade_personagem": 84,
      "tempo_recarga": 5.1
    }
  },
  {
    "id": 7,
    "nome": "GOSHAN",
    "categoria": "Machine Gun",
    "raridade": "Raro",
    "stats": {
      "dano": 467,
      "dano_melee": 1289,
      "municao": 105,
      "cadencia_de_tiro": "402-1005",
      "precisao": "98-624",
      "alcance": 17.0,
      "velocidade_personagem": 82,
      "tempo_recarga": 1.7
    }
  },
  {
    "id": 8,
    "nome": "PRK",
    "categoria": "Machine Gun",
    "raridade": "Raro",
    "stats": {
      "dano": 904,
      "dano_melee": 1289,
      "municao": 110,
      "cadencia_de_tiro": 648,
      "precisao": "94-258",
      "alcance": 18.3,
      "velocidade_personagem": 86,
      "tempo_recarga": 5.1
    }
  },
  {
    "id": 9,
    "nome": "FAULKNER",
    "categoria": "Machine Gun",
    "raridade": "Raro",
    "stats": {
      "dano": 949,
      "dano_melee": 1289,
      "municao": 105,
      "cadencia_de_tiro": 600,
      "precisao": "92-251",
      "alcance": 17.0,
      "velocidade_personagem": 88,
      "tempo_recarga": 4.4
    }
  },
  {
    "id": 10,
    "nome": "TRIGUN",
    "categoria": "Machine Gun",
    "raridade": "Raro",
    "stats": {
      "dano": 439,
      "dano_melee": 1289,
      "municao": 125,
      "cadencia_de_tiro": "450-1125",
      "precisao": "92-594",
      "alcance": 19.0,
      "velocidade_personagem": 70,
      "tempo_recarga": 2.3
    }
  },
  {
    "id": 11,
    "nome": "POLOVEC",
    "categoria": "Machine Gun",
    "raridade": "Épico",
    "stats": {
      "dano": 1111,
      "dano_melee": 1627,
      "municao": 103,
      "cadencia_de_tiro": 630,
      "precisao": "102-279",
      "alcance": 19.2,
      "velocidade_personagem": 88,
      "tempo_recarga": 5.0
    }
  },
  {
    "id": 12,
    "nome": "ROTOGUN",
    "categoria": "Machine Gun",
    "raridade": "Épico",
    "stats": {
      "dano": 574,
      "dano_melee": 1627,
      "municao": 115,
      "cadencia_de_tiro": "420-1050",
      "precisao": "87-579",
      "alcance": 18.0,
      "velocidade_personagem": 77,
      "tempo_recarga": 1.8
    }
  },
  {
    "id": 13,
    "nome": "B-FIVE-ONE",
    "categoria": "Machine Gun",
    "raridade": "Épico",
    "stats": {
      "dano": 1065,
      "dano_melee": 1627,
      "municao": 125,
      "cadencia_de_tiro": 690,
      "precisao": "90-248",
      "alcance": 18.5,
      "velocidade_personagem": 80,
      "tempo_recarga": 5.6
    }
  },
  {
    "id": 14,
    "nome": "LOST 8",
    "categoria": "Machine Gun",
    "raridade": "Épico",
    "stats": {
      "dano": 591,
      "dano_melee": 1627,
      "municao": 100,
      "cadencia_de_tiro": "480-1200",
      "precisao": "89-587",
      "alcance": 18.3,
      "velocidade_personagem": 75,
      "tempo_recarga": 1.8
    }
  },
  {
    "id": 15,
    "nome": "STOPPER",
    "categoria": "Machine Gun",
    "raridade": "Épico",
    "stats": {
      "dano": 1179,
      "dano_melee": 1627,
      "municao": 105,
      "cadencia_de_tiro": 630,
      "precisao": "98-272",
      "alcance": 19.0,
      "velocidade_personagem": 90,
      "tempo_recarga": 5.4
    }
  },
  {
    "id": 16,
    "nome": "VANISHER",
    "categoria": "Machine Gun",
    "raridade": "Épico",
    "stats": {
      "dano": 557,
      "dano_melee": 1627,
      "municao": 108,
      "cadencia_de_tiro": "450-1125",
      "precisao": "92-594",
      "alcance": 17.3,
      "velocidade_personagem": 80,
      "tempo_recarga": 1.6
    }
  },
  {
    "id": 17,
    "nome": "MAXIMUS",
    "categoria": "Machine Gun",
    "raridade": "Épico",
    "stats": {
      "dano": 1145,
      "dano_melee": 1627,
      "municao": 130,
      "cadencia_de_tiro": 720,
      "precisao": "87-237",
      "alcance": 17.0,
      "velocidade_personagem": 81,
      "tempo_recarga": 5.4
    }
  },
  {
    "id": 18,
    "nome": "SCORCHER",
    "categoria": "Machine Gun",
    "raridade": "Épico",
    "stats": {
      "dano": 603,
      "dano_melee": 1627,
      "municao": 105,
      "cadencia_de_tiro": "390-975",
      "precisao": "96-613",
      "alcance": 18.5,
      "velocidade_personagem": 76,
      "tempo_recarga": 1.7
    }
  },
  {
    "id": 19,
    "nome": "XO-300",
    "categoria": "Machine Gun",
    "raridade": "Épico",
    "stats": {
      "dano": 577,
      "dano_melee": 1627,
      "municao": null,
      "cadencia_de_tiro": 429,
      "precisao": 394,
      "alcance": 16.5,
      "velocidade_personagem": 77,
      "tempo_recarga": null
    }
  }
]`;

const pistolRTF = `[
  {
    "id": 1,
    "nome": "DART .45",
    "categoria": "Pistol",
    "raridade": "Raro",
    "stats": {
      "dano": 2377,
      "dano_melee": 1395,
      "municao": 6,
      "cadencia_de_tiro": 63,
      "precisao": "377-771",
      "alcance": 15,
      "velocidade_personagem": 107,
      "tempo_recarga": 4.6
    }
  },
  {
    "id": 2,
    "nome": "HARTWELL W8",
    "categoria": "Pistol",
    "raridade": "Raro",
    "stats": {
      "dano": 588,
      "dano_melee": 1395,
      "municao": 9,
      "cadencia_de_tiro": 201,
      "precisao": "335-553",
      "alcance": 12,
      "velocidade_personagem": 96,
      "tempo_recarga": 2.7
    }
  },
  {
    "id": 3,
    "nome": "CXZ-75",
    "categoria": "Pistol",
    "raridade": "Comum",
    "stats": {
      "dano": 426,
      "dano_melee": 988,
      "municao": 10,
      "cadencia_de_tiro": 180,
      "precisao": "281-487",
      "alcance": 11,
      "velocidade_personagem": 101,
      "tempo_recarga": 2.9
    }
  },
  {
    "id": 4,
    "nome": "FENRIK",
    "categoria": "Pistol",
    "raridade": "Comum",
    "stats": {
      "dano": 200,
      "dano_melee": null,
      "municao": 23,
      "cadencia_de_tiro": 570,
      "precisao": 115,
      "alcance": 10,
      "velocidade_personagem": 106,
      "tempo_recarga": 3.1
    }
  },
  {
    "id": 5,
    "nome": "VELOS M17",
    "categoria": "Pistol",
    "raridade": "Incomum",
    "stats": {
      "dano": 249,
      "dano_melee": 1232,
      "municao": 24,
      "cadencia_de_tiro": 600,
      "precisao": 135,
      "alcance": 11,
      "velocidade_personagem": 104,
      "tempo_recarga": 2.9
    }
  },
  {
    "id": 6,
    "nome": "LAG-1M",
    "categoria": "Pistol",
    "raridade": "Incomum",
    "stats": {
      "dano": 523,
      "dano_melee": null,
      "municao": 10,
      "cadencia_de_tiro": 192,
      "precisao": "281-487",
      "alcance": 13,
      "velocidade_personagem": 102,
      "tempo_recarga": 3.1
    }
  },
  {
    "id": 7,
    "nome": "CEDAR",
    "categoria": "Pistol",
    "raridade": "Raro",
    "stats": {
      "dano": 358,
      "dano_melee": 1641,
      "municao": 25,
      "cadencia_de_tiro": 600,
      "precisao": 181,
      "alcance": 9.2,
      "velocidade_personagem": 102,
      "tempo_recarga": 3.3
    }
  },
  {
    "id": 8,
    "nome": "K1914",
    "categoria": "Pistol",
    "raridade": "Raro",
    "stats": {
      "dano": 717,
      "dano_melee": 1641,
      "municao": 10,
      "cadencia_de_tiro": 180,
      "precisao": "310-527",
      "alcance": 10,
      "velocidade_personagem": 100,
      "tempo_recarga": 3.0
    }
  },
  {
    "id": 9,
    "nome": "GLUCK18-C",
    "categoria": "Pistol",
    "raridade": "Raro",
    "stats": {
      "dano": 334,
      "dano_melee": 1641,
      "municao": 26,
      "cadencia_de_tiro": 480,
      "precisao": 155,
      "alcance": 9.5,
      "velocidade_personagem": 103,
      "tempo_recarga": 2.9
    }
  },
  {
    "id": 10,
    "nome": "BERTA R106",
    "categoria": "Pistol",
    "raridade": "Raro",
    "stats": {
      "dano": 703,
      "dano_melee": 1641,
      "municao": 11,
      "cadencia_de_tiro": 192,
      "precisao": "310-527",
      "alcance": 11.5,
      "velocidade_personagem": 98,
      "tempo_recarga": 3.4
    }
  },
  {
    "id": 11,
    "nome": "WHILY",
    "categoria": "Pistol",
    "raridade": "Raro",
    "stats": {
      "dano": 2702,
      "dano_melee": 1641,
      "municao": 6,
      "cadencia_de_tiro": 78,
      "precisao": "344-717",
      "alcance": 16.5,
      "velocidade_personagem": 106,
      "tempo_recarga": 5.5
    }
  },
  {
    "id": 12,
    "nome": "LUPARA",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 5679,
      "dano_melee": 2067,
      "municao": 2,
      "cadencia_de_tiro": 120,
      "precisao": 20,
      "alcance": 8,
      "velocidade_personagem": 105,
      "tempo_recarga": 5.0
    }
  },
  {
    "id": 13,
    "nome": "MACK",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 441,
      "dano_melee": 2067,
      "municao": 25,
      "cadencia_de_tiro": 540,
      "precisao": 135,
      "alcance": 10,
      "velocidade_personagem": 105,
      "tempo_recarga": 3.0
    }
  },
  {
    "id": 14,
    "nome": "DIRTY ANTON",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 3560,
      "dano_melee": 2067,
      "municao": 6,
      "cadencia_de_tiro": 72,
      "precisao": "377-771",
      "alcance": 16,
      "velocidade_personagem": 105,
      "tempo_recarga": 5.0
    }
  },
  {
    "id": 15,
    "nome": "MC10",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 454,
      "dano_melee": 2067,
      "municao": 23,
      "cadencia_de_tiro": 552,
      "precisao": 148,
      "alcance": 10.7,
      "velocidade_personagem": 107,
      "tempo_recarga": 3.2
    }
  },
  {
    "id": 16,
    "nome": "HEADHOPPER",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 861,
      "dano_melee": 2067,
      "municao": 11,
      "cadencia_de_tiro": 210,
      "precisao": "335-553",
      "alcance": 12.5,
      "velocidade_personagem": 97,
      "tempo_recarga": 3.3
    }
  },
  {
    "id": 17,
    "nome": "NINETECH",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 459,
      "dano_melee": 2067,
      "municao": 21,
      "cadencia_de_tiro": 480,
      "precisao": 155,
      "alcance": 9.6,
      "velocidade_personagem": 106,
      "tempo_recarga": 2.7
    }
  },
  {
    "id": 18,
    "nome": "SPITTER",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 906,
      "dano_melee": 2067,
      "municao": 11,
      "cadencia_de_tiro": 162,
      "precisao": "255-445",
      "alcance": 13,
      "velocidade_personagem": 102,
      "tempo_recarga": 3.2
    }
  },
  {
    "id": 19,
    "nome": "STORMTROOPER",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 3667,
      "dano_melee": 2067,
      "municao": 5,
      "cadencia_de_tiro": 78,
      "precisao": "445-856",
      "alcance": 16,
      "velocidade_personagem": 103,
      "tempo_recarga": 5.3
    }
  },
  {
    "id": 20,
    "nome": "HOLE PUNCHER",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 951,
      "dano_melee": 2067,
      "municao": 9,
      "cadencia_de_tiro": 168,
      "precisao": "348-566",
      "alcance": 11.5,
      "velocidade_personagem": 98,
      "tempo_recarga": 2.9
    }
  },
  {
    "id": 21,
    "nome": "WIDOW MAKER",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 3738,
      "dano_melee": 2067,
      "municao": 6,
      "cadencia_de_tiro": 66,
      "precisao": "473-885",
      "alcance": 17,
      "velocidade_personagem": 103,
      "tempo_recarga": 5.5
    }
  },
  {
    "id": 22,
    "nome": "DICTATOR",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 879,
      "dano_melee": 2067,
      "municao": 12,
      "cadencia_de_tiro": 204,
      "precisao": "290-501",
      "alcance": 11,
      "velocidade_personagem": 100,
      "tempo_recarga": 3.4
    }
  },
  {
    "id": 23,
    "nome": "GOLDEN GLUCK18-C",
    "categoria": "Pistol",
    "raridade": "Épico",
    "stats": {
      "dano": 428,
      "dano_melee": 2067,
      "municao": 28,
      "cadencia_de_tiro": 480,
      "precisao": 155,
      "alcance": 9.5,
      "velocidade_personagem": 103,
      "tempo_recarga": 3.0
    }
  }
]`;

const meleeRTF = `[
  {
    "id": 1,
    "nome": "SPLITJAW",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 6384,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 51,
      "precisao": null,
      "alcance": 2.15,
      "velocidade_personagem": 96,
      "tempo_recarga": null
    }
  },
  {
    "id": 2,
    "nome": "STRIKEPIN",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 3342,
      "dano_melee": 730,
      "municao": 2,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 7.0,
      "velocidade_personagem": 98,
      "tempo_recarga": 6.6
    }
  },
  {
    "id": 3,
    "nome": "KNELL",
    "categoria": "Melee",
    "raridade": "Comum",
    "stats": {
      "dano": 4751,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 48,
      "precisao": null,
      "alcance": 2.05,
      "velocidade_personagem": 95,
      "tempo_recarga": null
    }
  },
  {
    "id": 4,
    "nome": "BLACKRIDGE",
    "categoria": "Melee",
    "raridade": "Incomum",
    "stats": {
      "dano": 5664,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 48,
      "precisao": null,
      "alcance": 2.05,
      "velocidade_personagem": 98,
      "tempo_recarga": null
    }
  },
  {
    "id": 5,
    "nome": "ZIGGY",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 3755,
      "dano_melee": 857,
      "municao": 2,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 7.6,
      "velocidade_personagem": 98,
      "tempo_recarga": 6.7
    }
  },
  {
    "id": 6,
    "nome": "MACHETE",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 7510,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 48,
      "precisao": null,
      "alcance": 2.0,
      "velocidade_personagem": 97,
      "tempo_recarga": null
    }
  },
  {
    "id": 7,
    "nome": "COMPOSITE SLASHER",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 3605,
      "dano_melee": 891,
      "municao": 2,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 9.5,
      "velocidade_personagem": 97,
      "tempo_recarga": 7.4
    }
  },
  {
    "id": 8,
    "nome": "SHUANGOU",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 7135,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 58,
      "precisao": null,
      "alcance": 2.0,
      "velocidade_personagem": 100,
      "tempo_recarga": null
    }
  },
  {
    "id": 9,
    "nome": "HEAD CUTTER",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 3830,
      "dano_melee": 857,
      "municao": 2,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 8.0,
      "velocidade_personagem": 96,
      "tempo_recarga": 6.8
    }
  },
  {
    "id": 10,
    "nome": "CANDY CANE",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 7285,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 52,
      "precisao": null,
      "alcance": 2.1,
      "velocidade_personagem": 97,
      "tempo_recarga": null
    }
  },
  {
    "id": 11,
    "nome": "KATANA",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 7360,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 56,
      "precisao": null,
      "alcance": 2.1,
      "velocidade_personagem": 95,
      "tempo_recarga": null
    }
  },
  {
    "id": 12,
    "nome": "REAPER",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 3530,
      "dano_melee": 910,
      "municao": 2,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 7.0,
      "velocidade_personagem": 100,
      "tempo_recarga": 6.5
    }
  },
  {
    "id": 13,
    "nome": "PREADTOR'S FANG",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 3830,
      "dano_melee": 857,
      "municao": 2,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 9.0,
      "velocidade_personagem": 96,
      "tempo_recarga": 7.2
    }
  },
  {
    "id": 14,
    "nome": "DESPAIR",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 7210,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 52,
      "precisao": null,
      "alcance": 1.95,
      "velocidade_personagem": 97,
      "tempo_recarga": null
    }
  },
  {
    "id": 15,
    "nome": "BATON",
    "categoria": "Melee",
    "raridade": "Raro",
    "stats": {
      "dano": 7510,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 45,
      "precisao": null,
      "alcance": 2.0,
      "velocidade_personagem": 100,
      "tempo_recarga": null
    }
  },
  {
    "id": 16,
    "nome": "C-T",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 4649,
      "dano_melee": 1060,
      "municao": 8,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 7.3,
      "velocidade_personagem": 94,
      "tempo_recarga": 6.4
    }
  },
  {
    "id": 17,
    "nome": "CLEAVER",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 8647,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 65,
      "precisao": null,
      "alcance": 1.85,
      "velocidade_personagem": 102,
      "tempo_recarga": null
    }
  },
  {
    "id": 18,
    "nome": "TROCKY",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 5114,
      "dano_melee": 985,
      "municao": 8,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 8.7,
      "velocidade_personagem": 95,
      "tempo_recarga": 7.2
    }
  },
  {
    "id": 19,
    "nome": "ARMATURE",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 9949,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 37,
      "precisao": null,
      "alcance": 2.05,
      "velocidade_personagem": 90,
      "tempo_recarga": null
    }
  },
  {
    "id": 20,
    "nome": "THROWING KNIVES",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 4649,
      "dano_melee": 1060,
      "municao": 8,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 8.0,
      "velocidade_personagem": 97,
      "tempo_recarga": 7.0
    }
  },
  {
    "id": 21,
    "nome": "TACTICAL SHOVEL",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 4974,
      "dano_melee": 1060,
      "municao": 8,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 8.6,
      "velocidade_personagem": 94,
      "tempo_recarga": 7.3
    }
  },
  {
    "id": 22,
    "nome": "E-BLADE",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 8740,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 60,
      "precisao": null,
      "alcance": 2.05,
      "velocidade_personagem": 100,
      "tempo_recarga": null
    }
  },
  {
    "id": 23,
    "nome": "GENTLE KISS",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 9484,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 44,
      "precisao": null,
      "alcance": 2.15,
      "velocidade_personagem": 96,
      "tempo_recarga": null
    }
  },
  {
    "id": 24,
    "nome": "SEMPAI",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 4510,
      "dano_melee": 1028,
      "municao": 8,
      "cadencia_de_tiro": null,
      "precisao": null,
      "alcance": 7.5,
      "velocidade_personagem": 95,
      "tempo_recarga": 7.2
    }
  },
  {
    "id": 25,
    "nome": "SURVIVAL TOOL",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 9763,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 42,
      "precisao": null,
      "alcance": 2.2,
      "velocidade_personagem": 95,
      "tempo_recarga": null
    }
  },
  {
    "id": 26,
    "nome": "ANCHOR",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 5346,
      "dano_melee": 955,
      "municao": 8,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 9.0,
      "velocidade_personagem": 94,
      "tempo_recarga": 7.1
    }
  },
  {
    "id": 27,
    "nome": "CANDY CANE GOLD",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 8833,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 52,
      "precisao": null,
      "alcance": 2.1,
      "velocidade_personagem": 98,
      "tempo_recarga": null
    }
  },
  {
    "id": 28,
    "nome": "HORROR",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 4835,
      "dano_melee": 1060,
      "municao": 8,
      "cadencia_de_tiro": null,
      "precisao": "171-310",
      "alcance": 7.7,
      "velocidade_personagem": 95,
      "tempo_recarga": 6.5
    }
  },
  {
    "id": 29,
    "nome": "HOPE",
    "categoria": "Melee",
    "raridade": "Épico",
    "stats": {
      "dano": 8833,
      "dano_melee": null,
      "municao": null,
      "cadencia_de_tiro": 55,
      "precisao": null,
      "alcance": 1.9,
      "velocidade_personagem": 97,
      "tempo_recarga": null
    }
  }
]`;

const prototypesRTF = `[
  {
    "id": 1,
    "nome": "TAMM",
    "categoria": "Prototype",
    "raridade": "Épico",
    "stats": {
      "dano": 8798,
      "dano_melee": 2067,
      "municao": 2,
      "cadencia_de_tiro": 72,
      "precisao": null,
      "alcance": 17,
      "velocidade_personagem": 77,
      "tempo_recarga": 1.8,
      "burn": null,
      "fuel": null
    }
  },
  {
    "id": 2,
    "nome": "MRA3-6",
    "categoria": "Prototype",
    "raridade": "Épico",
    "stats": {
      "dano": 1567,
      "dano_melee": 2068,
      "municao": 10,
      "cadencia_de_tiro": 300,
      "precisao": null,
      "alcance": 13,
      "velocidade_personagem": 90,
      "tempo_recarga": null,
      "burn": 2059,
      "fuel": 7020
    }
  },
  {
    "id": 3,
    "nome": "SO TOXIC",
    "categoria": "Prototype",
    "raridade": "Épico",
    "stats": {
      "dano": 1614,
      "dano_melee": 2068,
      "municao": 8,
      "cadencia_de_tiro": 300,
      "precisao": null,
      "alcance": 13,
      "velocidade_personagem": 88,
      "tempo_recarga": null,
      "burn": 2112,
      "fuel": 7200
    }
  },
  {
    "id": 4,
    "nome": "ROACH",
    "categoria": "Prototype",
    "raridade": "Épico",
    "stats": {
      "dano": 11844,
      "dano_melee": 2068,
      "municao": 1,
      "cadencia_de_tiro": null,
      "precisao": 173,
      "alcance": 10,
      "velocidade_personagem": 90,
      "tempo_recarga": null,
      "burn": null,
      "fuel": null
    }
  },
  {
    "id": 5,
    "nome": "GRIMER",
    "categoria": "Prototype",
    "raridade": "Épico",
    "stats": {
      "dano": 12201,
      "dano_melee": 2068,
      "municao": 1,
      "cadencia_de_tiro": null,
      "precisao": 173,
      "alcance": 10,
      "velocidade_personagem": 93,
      "tempo_recarga": null,
      "burn": null,
      "fuel": null
    }
  },
  {
    "id": 6,
    "nome": "MAXWELL",
    "categoria": "Prototype",
    "raridade": "Épico",
    "stats": {
      "dano": 8275,
      "dano_melee": 2067,
      "municao": 2,
      "cadencia_de_tiro": 81,
      "precisao": null,
      "alcance": 17,
      "velocidade_personagem": 84,
      "tempo_recarga": 1.7,
      "burn": null,
      "fuel": null
    }
  },
  {
    "id": 7,
    "nome": "DRAGON WARTH",
    "categoria": "Prototype",
    "raridade": "Épico",
    "stats": {
      "dano": 11487,
      "dano_melee": 2068,
      "municao": 1,
      "cadencia_de_tiro": null,
      "precisao": 173,
      "alcance": 10,
      "velocidade_personagem": 87,
      "tempo_recarga": null,
      "burn": null,
      "fuel": null
    }
  }
]`;

// Parse all weapon data
export const tacticoolWeapons: Record<string, Weapon[]> = {
  "Assault Rifle": parseRTFWeapons(assaultRifleRTF),
  "SMG": parseRTFWeapons(smgRTF),
  "Shotgun": parseRTFWeapons(shotgunRTF),
  "Sniper Rifle": parseRTFWeapons(sniperRifleRTF),
  "Machine Gun": parseRTFWeapons(machineGunRTF),
  "Pistols": parseRTFWeapons(pistolRTF),
  "Melee": parseRTFWeapons(meleeRTF),
  "Prototypes": parseRTFWeapons(prototypesRTF)
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