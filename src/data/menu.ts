// Menydata för Mollösunds Bröd & Bullar.
//
// Priserna nedan är caféets RIKTIGA prislista, "Sommaren 2026" — skickad av
// kunden 2026-08-11 (skärmdump av deras egen prislista). Det här är alltså
// inte längre en exempelmeny.
//
// Vad som FORTFARANDE saknas: allergener. Prislistan innehåller ingen
// allergeninformation, så vi gissar inte fram den per rad (fel gissning på
// en allergen är värre än att inte visa något alls). `allergensConfirmed`
// styr en synlig TODO-notis i <Menu>-komponenten i stället.

export const allergensConfirmed = false;

export const menu = [
  {
    category: "Surdegsbröd",
    items: [
      { name: "Ciabatta", price: 65 },
      { name: "Valnötsbröd", price: 78 },
      { name: "Frukt- och hasselnötsbröd", price: 78 },
      { name: "Slussens porter", price: 78 },
      { name: "Levain rustique", price: 73 },
      { name: "Herr Bröds ljusa", price: 73 },
      { name: "Danskt rågbröd med tranbär", price: 75 },
      { name: "Fransmän (surdegsbaguette)", price: 55 },
      { name: "Rostad råg & havre", price: 73 },
      { name: "Grävling bröd", price: 73 },
      { name: "Malte bröd", price: 73 },
      { name: "Baguette", price: 39 },
    ],
  },
  {
    category: "Vetedeg",
    items: [
      { name: "Kanelbulle", price: 39 },
      { name: "Mandel-/kardemummabulle", price: 39 },
      { name: "Solbulle", price: 39 },
      { name: "Muffinskaka, choklad/tosca", price: 160 },
      { name: "Muffinskaka, kardemumma/hallon", price: 160 },
      { name: "Fylld längd, mandel/kardemumma", price: 160 },
      { name: "Fylld längd, kanel", price: 160 },
      { name: "Slät längd", price: 108 },
    ],
  },
  {
    category: "Frallor & småbaguette",
    items: [
      { name: "Småfranska", price: 25 },
      { name: "Rostad råg & havre-fralla", price: 25 },
      { name: "Grävling-fralla", price: 25 },
      { name: "Malte-fralla", price: 25 },
    ],
  },
  {
    category: "Kondisbitar",
    items: [
      { name: "Saltkolabiskvi", price: 34 },
      { name: "Chokladbiskvi", price: 35 },
      { name: "Månadens biskvi", price: 37 },
      { name: "Dammsugare", price: 33 },
      { name: "Mazarin", price: 39 },
      { name: "Tosca mazarin", price: 42 },
    ],
  },
  {
    category: "Småkakor i påse",
    items: [
      { name: "Choklad/havssalt", price: 67 },
      { name: "Syltkakor", price: 67 },
      { name: "Havrekakor", price: 67 },
      { name: "Biscotti", price: 67 },
    ],
  },
];
