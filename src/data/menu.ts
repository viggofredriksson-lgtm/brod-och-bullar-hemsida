// Menydata för Bröd och bullar.
//
// VIKTIGT: Detta är en exempelmeny, inte kundens riktiga sortiment eller
// priser (se CLAUDE.md, "Saknas / ska in" → meny med priser + allergener).
// Raderna nedan är skrivna för att vara realistiska nog att bedöma layouten
// på — konkreta rätter, riktiga priser för ett svenskt café — men de ska
// bytas ut mot kundens faktiska meny innan lansering. `isExample: true`
// styr den synliga "exempelmeny"-markeringen i <Menu>-komponenten.

export const isExample = true;

export const allergenLabels = {
  gluten: "Gluten",
  mjolk: "Mjölk",
  agg: "Ägg",
  notter: "Nötter",
  mandel: "Mandel",
  soja: "Soja",
};

export const menu = [
  {
    category: "Bullar & fikabröd",
    items: [
      {
        name: "Kardemummabulle",
        description: "Nybakad efter morgonpasset, rejält kardemummakrossad topping.",
        price: 35,
        allergens: ["gluten", "mjolk", "agg"],
      },
      {
        name: "Kanelbulle",
        description: "Långjäst deg, pärlsocker på toppen — klassikern, gjord som den ska.",
        price: 32,
        allergens: ["gluten", "mjolk", "agg"],
      },
      {
        name: "Wienerbröd med vaniljkräm",
        description: "Smördeg vikt för hand, fylld med hemkokt vaniljkräm.",
        price: 42,
        allergens: ["gluten", "mjolk", "agg"],
      },
      {
        name: "Mandeltoppar",
        description: "Två åt gången — knapriga i kanten, mjuka i mitten.",
        price: 29,
        allergens: ["gluten", "mjolk", "agg", "mandel"],
      },
    ],
  },
  {
    category: "Bröd",
    items: [
      {
        name: "Surdegslimpa, 18 timmars jäsning",
        description: "Vår grundsurdeg, bakad på morgonen — hel limpa att ta med hem.",
        price: 79,
        allergens: ["gluten"],
      },
      {
        name: "Rågsurdeg med solrosfrön",
        description: "Mörkare, tyngre limpa, gott till ost och rimmat.",
        price: 85,
        allergens: ["gluten"],
      },
      {
        name: "Frallor, 4-pack",
        description: "Mjuka lunchfrallor, bakas fredag och lördag.",
        price: 45,
        allergens: ["gluten"],
      },
    ],
  },
  {
    category: "Smörgåsar",
    items: [
      {
        name: "Dagens smörgås",
        description: "Skriven på tavlan vid disken, ändras dag för dag.",
        price: 95,
        allergens: ["gluten", "mjolk"],
      },
      {
        name: "Skagenmacka på surdeg",
        description: "Handskalade räkor, dill, citron.",
        price: 115,
        allergens: ["gluten", "agg", "mjolk"],
      },
      {
        name: "Getost & honung",
        description: "Rostad surdeg, valnötter, en skvätt lokal honung.",
        price: 89,
        allergens: ["gluten", "mjolk", "notter"],
      },
    ],
  },
  {
    category: "Att dricka",
    items: [
      {
        name: "Kaffe",
        description: "Bryggt löpande hela dagen, gratis påtår i caféet.",
        price: 32,
        allergens: [],
      },
      {
        name: "Cortado",
        description: "",
        price: 38,
        allergens: ["mjolk"],
      },
      {
        name: "Chai latte",
        description: "Eget kryddat te, mjölk eller havre.",
        price: 45,
        allergens: ["mjolk"],
      },
    ],
  },
];
