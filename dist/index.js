// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// client/src/data/tacticool-weapons.ts
var tacticoolWeapons = {
  "Assault Rifle": [
    {
      id: 1,
      name: "K-TRAC 5.8",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "apptxnhx/tactiweps2/weapons/K-Trac_5.8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "601" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "978" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "37" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "402" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "275-655" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 2,
      name: "ARCHLIGHT 56",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Archlight_56.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "759" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "978" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "262" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "158-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "91" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 3,
      name: "MAS-47",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "Comum",
      stars: 5,
      image: "/weapons/MAS-47.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "401" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "692" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "35" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "408" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "290-676" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "89" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 4,
      name: "KRAIT",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/Krait.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "655" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "863" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "271" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "158-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "91" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 5,
      name: "FALCON A4",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/Falcon_A4.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "541" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "863" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "34" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "438" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "253-624" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 6,
      name: "QQ-95",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/QQ-95.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "911" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "27" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "264" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "117-798" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 7,
      name: "GIDEON",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Gideon.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "683" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "37" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "420" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "280-662" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 8,
      name: "KULT-M",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Kult-M.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "893" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "27" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "268" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "122-809" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 9,
      name: "VFX150",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/VFX150.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "683" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1150" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "36" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "420" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "275-655" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 10,
      name: "AUCH",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/AUCH.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1052" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "264" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "130-827" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.45" }
      ]
    },
    {
      id: 11,
      name: "KANZAZ",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/KANZAZ.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "866" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "34" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "408" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "265-641" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "91" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.6" }
      ]
    },
    {
      id: 12,
      name: "IAR-21",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/IAR-21.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1052" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "261" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "150-868" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "89" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 13,
      name: "VAKTOR",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Vaktor.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "909" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "33" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "360" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "290-676" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 14,
      name: "E2 PARAJUMPER",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/E2_Parajumper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1244" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "24" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "257" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "130-827" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "86" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 15,
      name: "OLD WAR",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Old_War.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "779" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "36" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "450" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "228-592" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 16,
      name: "ECLIPSE",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Eclipse.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1074" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "274" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "103-771" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "87" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.6" }
      ]
    },
    {
      id: 17,
      name: "GREMLIN",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Gremlin.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "823" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "39" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "450" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "265-641" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 18,
      name: "QQ-95 GOLD",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/QQ-95_Gold.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1188" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "264" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "117-798" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 19,
      name: "SPAR-M8",
      category: "Assault Rifle",
      primary: "ARMA PRIM\xC1RIA: ASSAULT RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/SparM8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "907" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1448" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "35" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "139-924" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "275-655" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "0.65-2.6" }
      ]
    }
  ],
  "SMG": [
    {
      id: 20,
      name: "HALBERD V10",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Halberd_V10.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "404" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1136" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "564" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "360" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 21,
      name: "ECHELON R",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Echelon_R.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "385" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1136" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "564" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "360" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 22,
      name: "TAMO 220",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "Comum",
      stars: 5,
      image: "/weapons/Tamo_22c.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "277" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "811" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "32" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "522" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "319" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 23,
      name: "KPD-45",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/KPD-45.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "333" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1008" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "30" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "558" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "327" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "101" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.0" }
      ]
    },
    {
      id: 24,
      name: "BOZON",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/BOZON.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "441" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "34" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "510" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "360" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 25,
      name: "PTU80",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/PTU80.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "464" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "31" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "334" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 26,
      name: "SM50",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/SM50.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "496" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1337" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "31" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "468" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "319" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.0" }
      ]
    },
    {
      id: 27,
      name: "PZD C",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/PZD_C.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "588" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "31" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "522" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "339" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 28,
      name: "BKS 9/19",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/BK_9_9.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "617" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "27" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "284" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "110" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.7" }
      ]
    },
    {
      id: 29,
      name: "COMPACT-12",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Compact-12.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "588" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "510" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "385" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 30,
      name: "CAMELBACK",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Camelback.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "559" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "32" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "558" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "344" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "14.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 31,
      name: "KLTR",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/KLTR.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "671" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "6494" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "51" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "284" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "115" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.2" }
      ]
    },
    {
      id: 32,
      name: "KURT",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Kurt.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "606" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "29" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "510" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "334" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.9" }
      ]
    },
    {
      id: 33,
      name: "FERRET-A",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Ferret-A.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "666" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "35" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "327" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2" }
      ]
    },
    {
      id: 34,
      name: "CORVET",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Covert.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "699" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "30" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "445" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "104" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 35,
      name: "FLASH TO FLESH",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Flash_To_Flesh.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "547" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "32" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "101" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.2" }
      ]
    },
    {
      id: 156,
      name: "MPM IRONHEAD",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/MPMIRONHEAD.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "651" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "6824" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "49" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "438" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "296" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "119" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
    {
      id: 36,
      name: "DERF SQUIRT MASTER",
      category: "SMG",
      primary: "ARMA PRIM\xC1RIA: SMG",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Derf_Squirt_Master.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "673" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1680" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "33" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "284" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    }
  ],
  "Shotgun": [
    {
      id: 37,
      name: "OXHEAD",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Oxhead.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5366" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "114" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.2" }
      ]
    },
    {
      id: 38,
      name: "REAVER M30",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Beaver_M30.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "108" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "47" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.2" }
      ]
    },
    {
      id: 39,
      name: "SKAT-A",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "Comum",
      stars: 5,
      image: "/weapons/Skat-A.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3225" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "988" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "102" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "27" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.2" }
      ]
    },
    {
      id: 40,
      name: "VEGA DT",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/Vega-DT.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4708" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1047" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "96" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "162" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "6.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.6" }
      ]
    },
    {
      id: 41,
      name: "TYR-9",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/TYR-9.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3928" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1232" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "84" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "42" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.6" }
      ]
    },
    {
      id: 42,
      name: "OOPS15",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/OOPS15.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5637" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "84" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "30" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.2" }
      ]
    },
    {
      id: 43,
      name: "REMMY 14",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Remmy_14.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6555" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "90" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "98" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 44,
      name: "UU-10",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/UU-10.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5268" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "90" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "37" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.0" }
      ]
    },
    {
      id: 45,
      name: "GRANDMASTER",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/GrandMaster.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5997" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "105" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "87" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "110" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 46,
      name: "PAS6",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/PAS6.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "75" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "20" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 47,
      name: "PUNCHER",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Puncher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6986" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "84" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "48" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "94" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 48,
      name: "THUNDER",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Thunder.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7892" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "102" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "148" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "6.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "101" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.7" }
      ]
    },
    {
      id: 49,
      name: "SOURCE",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Source.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6653" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.15" }
      ]
    },
    {
      id: 50,
      name: "HAIL",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Hail.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8371" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "105" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "108" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "5.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.6" }
      ]
    },
    {
      id: 51,
      name: "XL20",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/XL20.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7972" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "105" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.0" }
      ]
    },
    {
      id: 52,
      name: "SHORTY",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Shorty.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5988" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "120" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.3" }
      ]
    },
    {
      id: 53,
      name: "RIO BRAVO",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Rio_Bravo.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "7573" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "135" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "102" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 54,
      name: "FURN-S",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Furn-S.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4257" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "4" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" },
        { icon: "fas fa-fire", label: "Burn", value: "2059" }
      ]
    },
    {
      id: 55,
      name: "DM-SG",
      category: "Shotgun",
      primary: "ARMA PRIM\xC1RIA: SHOTGUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/DM-SG.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "6320" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "120" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "27" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    }
  ],
  "Sniper Rifle": [
    {
      id: 56,
      name: "TALON S4",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Talon_S4.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2405" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "817" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "61" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "569-911" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "22.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.8" }
      ]
    },
    {
      id: 57,
      name: "TITAN S1",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Titan_S1.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2685" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "817" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "75" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "197-990" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "81" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.2" }
      ]
    },
    {
      id: 58,
      name: "VLR-12",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "Comum",
      stars: 5,
      image: "/weapons/VLR-12.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1791" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "486" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "66" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "185-972" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "26.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "80" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 59,
      name: "ARX-204",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/ARX-204.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2056" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "610" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "59" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "583-925" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 60,
      name: "HOWL",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/Howl.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2394" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "610" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "76" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "132-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "25.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "78" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 61,
      name: "CT 200M",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/CT200M.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2936" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "54" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "632-967" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.6" }
      ]
    },
    {
      id: 62,
      name: "TICKLE X3",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Tickle_X3.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3001" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "73" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "132-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.0" }
      ]
    },
    {
      id: 63,
      name: "MX2020",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/MX2020.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2796" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "592-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "87" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.4" }
      ]
    },
    {
      id: 64,
      name: "AW",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/AW.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3159" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "961" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "70" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "176-958" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "25.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "80" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
    {
      id: 65,
      name: "MIMI 15",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/MIMI_15.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3453" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "57" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "547-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "20.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.45" }
      ]
    },
    {
      id: 66,
      name: "BULLSEYE",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Bullseye.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4223" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "162-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
    {
      id: 67,
      name: "GF 24",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/GF_24.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3738" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "53" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "650-981" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.85" }
      ]
    },
    {
      id: 68,
      name: "ATHENA",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Athena.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3740" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "8" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "162-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.3" }
      ]
    },
    {
      id: 69,
      name: "FR USTR8",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/FR_USTR8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3560" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "57" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "620-958" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.5" }
      ]
    },
    {
      id: 70,
      name: "OSIRIS",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Osiris.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4304" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "60" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "185-972" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "26.4" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 71,
      name: "SEE ME NOT",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/SeeMeNot.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3453" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "55" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "632-967" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "25.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.8" }
      ]
    },
    {
      id: 72,
      name: "LONGSHOT-6",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Longshot-6.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4304" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "63" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "191-981" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "27.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "78" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.3" }
      ]
    },
    {
      id: 73,
      name: "DOOM-INJECT .25",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Doom-Inject25.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1016" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "1" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "385-1000" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.35" },
        { icon: "fas fa-tint", label: "Bleed", value: "1637" }
      ]
    },
    {
      id: 74,
      name: "MP200",
      category: "Sniper Rifle",
      primary: "ARMA PRIM\xC1RIA: SNIPER RIFLE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/MP200.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "688" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1214" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "22" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "424" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "771-935" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "99" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.2" }
      ]
    }
  ],
  "Machine Gun": [
    {
      id: 75,
      name: "GRINDCORE",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Grindcore.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "376" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1096" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "130" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "384-960" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "76-540" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.1" }
      ]
    },
    {
      id: 76,
      name: "PILLAR-2",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Pillar-2.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "786" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1096" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "115" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "708" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "112-290" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.8" },
        { icon: "fas fa-running", label: "Velocidade", value: "81" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.5" }
      ]
    },
    {
      id: 77,
      name: "NM-11",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Comum",
      stars: 5,
      image: "/weapons/NM-11.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "520" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "770" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "125" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "612" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "85-230" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.9" }
      ]
    },
    {
      id: 78,
      name: "OHM-8",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/OHM-8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "690" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "964" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "110" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "660" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "90-248" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "86" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.0" }
      ]
    },
    {
      id: 79,
      name: "M-TORQ",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/M-TORQ.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "336" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "964" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "420-1050" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "87-579" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.9" }
      ]
    },
    {
      id: 80,
      name: "MM66",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/MM66.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "904" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "115" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "660" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "94-258" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.1" }
      ]
    },
    {
      id: 81,
      name: "GOSHAN",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Goshan.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "467" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "402-1005" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "98-624" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "82" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.7" }
      ]
    },
    {
      id: 82,
      name: "PRK",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/PRK.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "904" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "110" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "648" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "94-258" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "86" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.1" }
      ]
    },
    {
      id: 83,
      name: "FAULKNER",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Faulkner.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "949" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "92-251" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.4" }
      ]
    },
    {
      id: 84,
      name: "TRIGUN",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Trigun.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "439" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1289" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "125" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "450-1125" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "92-594" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "70" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.3" }
      ]
    },
    {
      id: 85,
      name: "POLOVEC",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Polovec.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1111" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "103" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "102-279" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "88" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.0" }
      ]
    },
    {
      id: 86,
      name: "ROTOGUN",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Rotogun.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "574" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "115" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "420-1050" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "87-579" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.8" }
      ]
    },
    {
      id: 87,
      name: "B-FIVE-ONE",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/B-Five-One.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1065" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "125" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "690" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "90-248" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "80" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.6" }
      ]
    },
    {
      id: 88,
      name: "LOST 8",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Lost8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "591" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "100" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "480-1200" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "89-587" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "75" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.8" }
      ]
    },
    {
      id: 89,
      name: "STOPPER",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Stopper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1179" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "630" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "98-272" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "19.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.4" }
      ]
    },
    {
      id: 90,
      name: "VANISHER",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Vanisher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "557" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "108" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "450-1125" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "92-594" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "80" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.6" }
      ]
    },
    {
      id: 91,
      name: "MAXIMUS",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Maximus.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "1145" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "130" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "720" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "87-237" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "81" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.4" }
      ]
    },
    {
      id: 92,
      name: "SCORCHER",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Scorcher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "603" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "105" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "390-975" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "96-613" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "18.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "76" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.7" }
      ]
    },
    {
      id: 93,
      name: "XO-300",
      category: "Machine Gun",
      primary: "ARMA PRIM\xC1RIA: MACHINE GUN",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/XO-300.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "577" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1627" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "\u221E" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "429" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "394" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" }
      ]
    }
  ],
  "Pistols": [
    {
      id: 94,
      name: "DART .45",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Dart45.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2377" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "63" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "377-771" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "15" },
        { icon: "fas fa-running", label: "Velocidade", value: "107" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "4.6" }
      ]
    },
    {
      id: 95,
      name: "HARTWELL W8",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/HartwellW8.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "588" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1395" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "9" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "201" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "335-553" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.7" }
      ]
    },
    {
      id: 96,
      name: "CXZ-75",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Comum",
      stars: 5,
      image: "/weapons/CXZ75.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "426" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "988" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "180" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "281-487" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "101" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 97,
      name: "FENRIK",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Comum",
      stars: 5,
      image: "/weapons/Fenrik.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "200" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "23" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "570" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "115" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade", value: "106" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
    {
      id: 98,
      name: "VELOS M17",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/VelosM17.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "249" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1232" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "24" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "104" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 99,
      name: "LAG-1M",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/Lag-1M.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "523" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "192" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "281-487" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.1" }
      ]
    },
    {
      id: 100,
      name: "CEDAR",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Cedar.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "358" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "25" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "600" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "181" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.3" }
      ]
    },
    {
      id: 101,
      name: "K1914",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/K1914.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "717" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "10" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "180" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "310-527" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.0" }
      ]
    },
    {
      id: 102,
      name: "GLUCK18-C",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Gluck18-C.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "334" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "26" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "155" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "103" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 103,
      name: "BERTA R101",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/BertaR101.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "703" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "11" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "192" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "310-527" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 104,
      name: "WHILY",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Whily.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "2702" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1641" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "344-717" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "106" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.5" }
      ]
    },
    {
      id: 105,
      name: "LUPARA",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Lupara.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5679" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "120" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "20" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8" },
        { icon: "fas fa-running", label: "Velocidade", value: "105" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.0" }
      ]
    },
    {
      id: 106,
      name: "MACK",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/MACK.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "441" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "25" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "540" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "135" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10" },
        { icon: "fas fa-running", label: "Velocidade", value: "105" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.0" }
      ]
    },
    {
      id: 107,
      name: "DIRTY ANTON",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/DirtyAnton.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3560" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "72" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "377-771" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16" },
        { icon: "fas fa-running", label: "Velocidade", value: "105" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.0" }
      ]
    },
    {
      id: 108,
      name: "MC10",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/MC10.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "454" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "23" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "552" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "148" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "10.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "107" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.2" }
      ]
    },
    {
      id: 109,
      name: "HEADHOPPER",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/HeadHopper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "861" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "11" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "210" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "335-553" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "12.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.3" }
      ]
    },
    {
      id: 110,
      name: "NINETECH",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Ninetech.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "459" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "21" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "155" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "106" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.7" }
      ]
    },
    {
      id: 111,
      name: "SPITTER",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Spitter.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "906" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "11" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "162" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "255-445" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "13" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.2" }
      ]
    },
    {
      id: 112,
      name: "STORMTROOPER",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Stormtrooper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3667" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "5" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "78" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "445-856" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "16" },
        { icon: "fas fa-running", label: "Velocidade", value: "103" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.3" }
      ]
    },
    {
      id: 113,
      name: "HOLE PUNCHER",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/HolePuncher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "951" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "9" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "168" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "348-566" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "2.9" }
      ]
    },
    {
      id: 114,
      name: "WIDOW MAKER",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/WidowMaker.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3738" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "66" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "473-885" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17" },
        { icon: "fas fa-running", label: "Velocidade", value: "103" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.5" }
      ]
    },
    {
      id: 115,
      name: "DICTATOR",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Dictator.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "879" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "12" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "204" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "290-501" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "11" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.4" }
      ]
    },
    {
      id: 116,
      name: "GOLDEN GLUCK18-C",
      category: "Pistols",
      primary: "ARMA SECUND\xC1RIA: PISTOL",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/GoldenGluck18-C.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "428" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "28" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "480" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "155" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "103" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "3.0" }
      ]
    }
  ],
  "Melee": [
    {
      id: 117,
      name: "SPLITJAW",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Splitjaw.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "6384" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "51" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.15" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" }
      ]
    },
    {
      id: 118,
      name: "STRIKEPIN",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Strikepin.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3342" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "730" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.6" }
      ]
    },
    {
      id: 119,
      name: "KNELL",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Comum",
      stars: 5,
      image: "/weapons/Knell.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "4751" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "48" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" }
      ]
    },
    {
      id: 120,
      name: "BLACKRIDGE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Incomum",
      stars: 5,
      image: "/weapons/Blackridge.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "5664" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "48" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" }
      ]
    },
    {
      id: 121,
      name: "ZIGGY",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Ziggy.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3755" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "857" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.7" }
      ]
    },
    {
      id: 122,
      name: "MACHETE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Machete.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7510" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "48" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" }
      ]
    },
    {
      id: 123,
      name: "COMPOSITE SLASHER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/CompositeSlasher.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3605" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "891" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.4" }
      ]
    },
    {
      id: 124,
      name: "SHUANGOU",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Shuangou.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7135" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "58" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" }
      ]
    },
    {
      id: 125,
      name: "HEAD CUTTER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Headcutter.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3830" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "857" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.8" }
      ]
    },
    {
      id: 126,
      name: "CANDY CANE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/CandyCane.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7285" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "52" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" }
      ]
    },
    {
      id: 127,
      name: "KATANA",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Katana.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7360" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "56" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" }
      ]
    },
    {
      id: 128,
      name: "REAPER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Reaper.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3530" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "910" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.5" }
      ]
    },
    {
      id: 129,
      name: "PREDATOR'S FANG",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/PredatorsFang.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "3830" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "857" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.2" }
      ]
    },
    {
      id: 130,
      name: "DESPAIR",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Despair.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7210" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "52" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "1.95" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" }
      ]
    },
    {
      id: 131,
      name: "BATON",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "Raro",
      stars: 5,
      image: "/weapons/Baton.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "7510" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "45" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" }
      ]
    },
    {
      id: 132,
      name: "C-T",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/C-T.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4649" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "8" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.3" },
        { icon: "fas fa-running", label: "Velocidade", value: "94" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.4" }
      ]
    },
    {
      id: 133,
      name: "CLEAVER",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Cleaver.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "8647" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "65" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "1.85" },
        { icon: "fas fa-running", label: "Velocidade", value: "102" }
      ]
    },
    {
      id: 134,
      name: "TROCKY",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Trocky.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5114" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "985" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "8" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.2" }
      ]
    },
    {
      id: 135,
      name: "ARMATURE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Armature.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "9949" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "37" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" }
      ]
    },
    {
      id: 136,
      name: "THROWING KNIVES",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/ThrowingKnives.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4649" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.0" }
      ]
    },
    {
      id: 137,
      name: "TACTICAL SHOVEL",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/TacticalShovel.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4974" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "8.6" },
        { icon: "fas fa-running", label: "Velocidade", value: "94" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.3" }
      ]
    },
    {
      id: 138,
      name: "E-BLADE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/E-Blade.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "8740" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "60" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.05" },
        { icon: "fas fa-running", label: "Velocidade", value: "100" }
      ]
    },
    {
      id: 139,
      name: "GENTLE KISS",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/GentleKiss.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "9484" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "44" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.15" },
        { icon: "fas fa-running", label: "Velocidade", value: "96" }
      ]
    },
    {
      id: 140,
      name: "SEMPAI",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Sempai.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4510" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1028" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.2" }
      ]
    },
    {
      id: 141,
      name: "SURVIVAL TOOL",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/SurvivalTool.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "9763" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "42" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.2" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" }
      ]
    },
    {
      id: 142,
      name: "ANCHOR",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Anchor.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "5346" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "955" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "9.0" },
        { icon: "fas fa-running", label: "Velocidade", value: "94" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "7.1" }
      ]
    },
    {
      id: 143,
      name: "CANDY CANE GOLD",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/CandyCaneGold.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "8833" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "52" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "2.1" },
        { icon: "fas fa-running", label: "Velocidade", value: "98" }
      ]
    },
    {
      id: 144,
      name: "HORROR",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Horror.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "4835" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "1060" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "171-310" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "7.7" },
        { icon: "fas fa-running", label: "Velocidade", value: "95" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "6.5" }
      ]
    },
    {
      id: 145,
      name: "HOPE",
      category: "Melee",
      primary: "ARMA CORPO A CORPO: MELEE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Hope.svg",
      stats: [
        { icon: "fas fa-fist-raised", label: "Dano", value: "8833" },
        { icon: "fas fa-tachometer-alt", label: "Velocidade de Ataque", value: "55" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "1.9" },
        { icon: "fas fa-running", label: "Velocidade", value: "97" }
      ]
    }
  ],
  "Prototypes": [
    {
      id: 146,
      name: "TAMM",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Tamm.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8798" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "72" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17" },
        { icon: "fas fa-running", label: "Velocidade", value: "77" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.8" }
      ]
    },
    {
      id: 147,
      name: "MLG99",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/MLG99.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "14000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "190" },
        { icon: "fas fa-ruler-horizontal", label: "Raio de Dano", value: "3.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.5" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "20" }
      ]
    },
    {
      id: 148,
      name: "SMS41",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/SMS41.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "20000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "1" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "60" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "24.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "65" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "64-1000" }
      ]
    },
    {
      id: 149,
      name: "KAPITZ-A",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Kapitz-A.svg",
      stats: [
        { icon: "fas fa-burn", label: "For\xE7a de Press\xE3o", value: "4000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Tempo de Recarga", value: "2.5" },
        { icon: "fas fa-ruler-horizontal", label: "Distancia da Tra\xE7\xE3o", value: "13" },
        { icon: "fas fa-regular fa-meteor", label: "Velocidade do Ativo", value: "45" },
        { icon: "fas fa-dumbbell", label: "For\xE7a de Tra\xE7\xE3o", value: "1400" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" }
      ]
    },
    {
      id: 150,
      name: "1S1K",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/1S1K.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "20000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "1" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "60" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "23" },
        { icon: "fas fa-running", label: "Velocidade", value: "70" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "64-1000" }
      ]
    },
    {
      id: 151,
      name: "MAXWELL",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Maxwell.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "8275" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "2067" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "2" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "81" },
        { icon: "fas fa-ruler-horizontal", label: "Alcance", value: "17" },
        { icon: "fas fa-running", label: "Velocidade", value: "84" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "1.7" }
      ]
    },
    {
      id: 152,
      name: "FAT BOY",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/FatBoy.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "13580" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "7" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "180" },
        { icon: "fas fa-ruler-horizontal", label: "Precis\xE3o", value: "20" },
        { icon: "fas fa-running", label: "Velocidade", value: "92" },
        { icon: "fas fa-ruler-horizontal", label: "Raio de Dano", value: "3.5" },
        { icon: "fas fa-sync-alt", label: "Recarga", value: "5.8" }
      ]
    },
    {
      id: 153,
      name: "GRAVIZAPA",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/Gravizapa.svg",
      stats: [
        { icon: "fas fa-burn", label: "For\xE7a de Press\xE3o", value: "4000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Tempo de Recarga", value: "2.3" },
        { icon: "fas fa-ruler-horizontal", label: "Distancia da Tra\xE7\xE3o", value: "11" },
        { icon: "fas fa-regular fa-meteor", label: "Velocidade do Ativo", value: "45" },
        { icon: "fas fa-dumbbell", label: "For\xE7a de Tra\xE7\xE3o", value: "1400" },
        { icon: "fas fa-running", label: "Velocidade", value: "85" }
      ]
    },
    {
      id: 154,
      name: "REIGN OF FIRE",
      category: "Prototypes",
      primary: "ARMA EXPERIMENTAL: PROTOTYPE",
      rarity: "\xC9pico",
      stars: 5,
      image: "/weapons/ReignOfFire.svg",
      stats: [
        { icon: "fas fa-burn", label: "Dano", value: "14000" },
        { icon: "fas fa-fist-raised", label: "Dano Melee", value: "930" },
        { icon: "fas fa-bolt", label: "Muni\xE7\xE3o", value: "6" },
        { icon: "fas fa-tachometer-alt", label: "Cad\xEAncia de Tiro", value: "200" },
        { icon: "fas fa-ruler-horizontal", label: "Raio de Dano", value: "3.5" },
        { icon: "fas fa-running", label: "Velocidade", value: "90" },
        { icon: "fas fa-sync-alt", label: "Regarga", value: "5.8" },
        { icon: "fas fa-bullseye", label: "Precis\xE3o", value: "20" }
      ]
    }
  ]
};

// server/storage.ts
var MemStorage = class {
  users;
  weaponsMap;
  currentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.currentId = 1;
    this.weaponsMap = /* @__PURE__ */ new Map();
    Object.entries(tacticoolWeapons).forEach(([category, weapons]) => {
      this.weaponsMap.set(category, weapons);
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getWeaponsByCategory(category) {
    return this.weaponsMap.get(category) || [];
  }
  async getAllCategories() {
    return Array.from(this.weaponsMap.keys());
  }
  async searchWeapons(category, searchTerm) {
    const categoryWeapons = this.weaponsMap.get(category) || [];
    if (!searchTerm) return categoryWeapons;
    const term = searchTerm.toLowerCase();
    return categoryWeapons.filter(
      (weapon) => weapon.name.toLowerCase().includes(term)
    );
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/weapons/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const weapons = await storage.getWeaponsByCategory(category);
      res.json(weapons);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch weapons" });
    }
  });
  app2.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });
  app2.get("/api/weapons/:category/search", async (req, res) => {
    try {
      const { category } = req.params;
      const { q } = req.query;
      const weapons = await storage.searchWeapons(category, q);
      res.json(weapons);
    } catch (error) {
      res.status(500).json({ error: "Failed to search weapons" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
