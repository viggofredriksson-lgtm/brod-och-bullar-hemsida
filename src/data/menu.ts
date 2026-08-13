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
//
// `id` (kategori och vara) är stabila ASCII-slugs som <OrderShop> använder
// för att bygga Netlify-fältnamn (`qty_<kategori-id>_<vara-id>`) — ändra
// dem inte i efterhand utan att tänka på att gamla Netlify-inskick då blir
// svårare att jämföra historiskt.
//
// `leadTimeKey` pekar mot cafe.ordering.leadTimes[].key och avgör vilken
// ledtid <OrderShop> räknar med för varorna i kategorin. Kondisbitar delar
// tårtans ledtid (4 dagar), INTE brödets (2 dagar) — se prislistans egna
// ledtidsrader i cafe.ts.

export const allergensConfirmed = false;

export const menu = [
  {
    category: "Surdegsbröd",
    id: "surdegsbrod",
    leadTimeKey: "brod",
    items: [
      { id: "ciabatta", name: "Ciabatta", price: 65 },
      { id: "valnotsbrod", name: "Valnötsbröd", price: 78 },
      { id: "frukt-hasselnotsbrod", name: "Frukt- och hasselnötsbröd", price: 78 },
      { id: "slussens-porter", name: "Slussens porter", price: 78 },
      { id: "levain-rustique", name: "Levain rustique", price: 73 },
      { id: "herr-brods-ljusa", name: "Herr Bröds ljusa", price: 73 },
      { id: "danskt-ragbrod-tranbar", name: "Danskt rågbröd med tranbär", price: 75 },
      { id: "fransman", name: "Fransmän (surdegsbaguette)", price: 55 },
      { id: "rostad-rag-havre", name: "Rostad råg & havre", price: 73 },
      { id: "gravling-brod", name: "Grävling bröd", price: 73 },
      { id: "malte-brod", name: "Malte bröd", price: 73 },
    ],
  },
  {
    category: "Vetedeg",
    id: "vetedeg",
    leadTimeKey: "brod",
    items: [
      { id: "kanelbulle", name: "Kanelbulle", price: 39 },
      { id: "mandel-kardemummabulle", name: "Mandel-/kardemummabulle", price: 39 },
      { id: "solbulle", name: "Solbulle", price: 39 },
      { id: "muffinskaka-choklad-tosca", name: "Muffinskaka, choklad/tosca", price: 160 },
      { id: "muffinskaka-kardemumma-hallon", name: "Muffinskaka, kardemumma/hallon", price: 160 },
      { id: "fylld-langd-mandel-kardemumma", name: "Fylld längd, mandel/kardemumma", price: 160 },
      { id: "fylld-langd-kanel", name: "Fylld längd, kanel", price: 160 },
      { id: "slat-langd", name: "Slät längd", price: 108 },
    ],
  },
  {
    category: "Frallor & småbaguette",
    id: "frallor-smabaguette",
    leadTimeKey: "brod",
    items: [
      { id: "baguette", name: "Baguette", price: 39 },
      { id: "smafranska", name: "Småfranska", price: 25 },
      { id: "rostad-rag-havre-fralla", name: "Rostad råg & havre-fralla", price: 25 },
      { id: "gravling-fralla", name: "Grävling-fralla", price: 25 },
      { id: "malte-fralla", name: "Malte-fralla", price: 25 },
    ],
  },
  {
    category: "Kondisbitar",
    id: "kondisbitar",
    leadTimeKey: "tarta",
    items: [
      { id: "saltkolabiskvi", name: "Saltkolabiskvi", price: 34 },
      { id: "chokladbiskvi", name: "Chokladbiskvi", price: 35 },
      { id: "manadens-biskvi", name: "Månadens biskvi", price: 37 },
      { id: "dammsugare", name: "Dammsugare", price: 33 },
      { id: "mazarin", name: "Mazarin", price: 39 },
      { id: "tosca-mazarin", name: "Tosca mazarin", price: 42 },
    ],
  },
  {
    category: "Småkakor i påse",
    id: "smakakor-i-pase",
    // TODO: prislistans ledtidstabell nämner inte småkakor uttryckligen —
    // vi antar samma ledtid som bröd (2 dagar) tills kunden bekräftar.
    leadTimeKey: "brod",
    items: [
      { id: "choklad-havssalt", name: "Choklad/havssalt", price: 67 },
      { id: "syltkakor", name: "Syltkakor", price: 67 },
      { id: "havrekakor", name: "Havrekakor", price: 67 },
      { id: "biscotti", name: "Biscotti", price: 67 },
    ],
  },
];
