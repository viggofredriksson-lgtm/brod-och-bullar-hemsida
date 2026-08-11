// Innehållsdata för Bröd och bullar.
//
// Fält märkta `placeholder: true` är fabricerade platshållare — inte riktig
// information — och renderas med en synlig "TODO"-markering i gränssnittet
// tills kunden skickar riktiga uppgifter. Byt bara ut `value` och sätt
// `placeholder: false` (eller ta bort fältet) när riktig info finns.
//
// Löptext (hero, om-caféet) är däremot skriven som färdig svensk copy — inte
// platshållartext — så designen går att bedöma på riktigt. Den ska stämmas av
// med kunden innan lansering, men är inte markerad TODO i gränssnittet.

export const cafe = {
  name: "Bröd och bullar",

  hero: {
    heading: "Bakat på Storgatan sen sex på morgonen",
    subheading:
      "Surdegsbröd, kanelbullar och kaffe — bakat i ugnen bakom disken, inte i en fabrik nån annanstans.",
  },

  about: {
    heading: "Om oss",
    paragraphs: [
      "Bröd och bullar öppnade dörrarna som ett litet skafferi med två bakbord och en vedeldad ugn. Idag är ugnen eldriven, men degen jäser fortfarande lika länge — surdegen har vi haft levande sen starten.",
      "Vi bakar allt på plats, varje morgon. Det syns på skorpan när brödet är för färskt och på kön när kanelbullarna kommer ut klockan sju.",
      "TODO: kort stycke om vem/vilka som driver caféet idag — gärna ett förnamn och ett årtal, det är sånt som gör texten trovärdig i stället för generisk.",
    ],
  },

  // Fälten nedan saknar "TODO:" i själva `value` — komponenterna lägger på
  // den visuella TODO-markeringen själva utifrån `placeholder`, så texten
  // ska bara beskriva VAD som saknas, inte upprepa ordet TODO.
  contact: {
    address: {
      value: "gatuadress, postnummer och ort",
      placeholder: true,
    },
    phone: {
      value: "telefonnummer",
      placeholder: true,
    },
    email: {
      value: "mejladress för allmänna frågor",
      placeholder: true,
    },
    orderEmail: {
      value: "mejladress som beställningsformuläret ska skickas till",
      placeholder: true,
    },
  },

  openingHours: {
    placeholder: true,
    // TODO: ersätt med riktiga öppettider, inkl. avvikande dagar
    // (röda dagar, sommarstängt etc.) när kunden skickar dem.
    regular: [
      { day: "Måndag–fredag", hours: "t.ex. 07:00–17:00" },
      { day: "Lördag", hours: "t.ex. 08:00–15:00" },
      { day: "Söndag", hours: "t.ex. 09:00–14:00" },
    ],
    exceptions: [{ label: "avvikande dag, t.ex. midsommarafton", hours: "Stängt" }],
  },

  social: {
    instagram: { url: "", handle: "Instagram-konto", placeholder: true },
    facebook: { url: "", handle: "Facebook-sida", placeholder: true },
  },

  map: {
    placeholder: true,
    embedUrl: "", // TODO: karta/embed-länk när adressen är bekräftad
  },

  logo: {
    placeholder: true, // TODO: logotyp i vektorformat (SVG) från kunden
  },

  heroMedia: {
    // TODO: självhostad hero-loop (.mp4/.webm, max ~2–3 MB, 8–12 sek, ingen ljudkanal)
    // och en riktig poster-bild (foto av bakning/ugn). Tills dess visas en
    // grafisk platshållare — se public/images/placeholder-hero.svg.
    videoMp4: "",
    videoWebm: "",
    poster: "/images/placeholder-hero.svg",
    placeholder: true,
  },
};
