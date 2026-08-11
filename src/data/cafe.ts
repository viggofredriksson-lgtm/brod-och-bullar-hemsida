// Innehållsdata för Mollösunds Bröd & Bullar.
//
// Fält märkta `placeholder: true` är fabricerade platshållare — inte riktig
// information — och renderas med en synlig "TODO"-markering i gränssnittet
// tills kunden skickar riktiga uppgifter. Byt bara ut `value` och sätt
// `placeholder: false` (eller ta bort fältet) när riktig info finns.
//
// Löptext (hero, om-caféet) är däremot skriven som färdig svensk copy — inte
// platshållartext — så designen går att bedöma på riktigt. Den ska stämmas av
// med kunden innan lansering, men är inte markerad TODO i gränssnittet.
//
// Källa för verifierad info nedan (namn, adress, priser, beställningsvillkor):
// caféets Instagram-bio och prislista "Sommaren 2026", skickade av kunden
// 2026-08-11. Butiken säljer sortiment från leverantören Herr Bröd
// (@herr_brod) — den bakar inte nödvändigtvis själv på plats, vilket present-
// och hero-texten är skriven för att spegla ärligt i stället för att gissa.

export const cafe = {
  name: "Mollösunds Bröd & Bullar",

  hero: {
    heading: "Bröd och bullar mitt i Mollösund",
    subheading:
      "Vi säljer Herr Bröds nybakade sortiment på Sandvägen — beställ i god tid inför helg och kalas, eller kom förbi och se vad som finns kvar i disken.",
  },

  // TODO: en tredje stycke saknas fortfarande — vem/vilka driver butiken
  // idag, och hur länge har den funnits i Mollösund? Ett förnamn och ett
  // årtal gör texten trovärdig i stället för generisk. Lägg till som ett
  // tredje element i `paragraphs` när vi har svaret — skriv den som en
  // vanlig mening, inte som en TODO-rad, den renderas rakt av som brödtext.
  about: {
    heading: "Om oss",
    paragraphs: [
      "Mollösunds Bröd & Bullar är den lilla butiken på Sandvägen där du hittar Herr Bröds sortiment av surdegsbröd, vetebullar, längder och bakverk — mitt i hjärtat av Mollösund.",
      "Sortimentet växlar med säsongen, och en del av det mest efterfrågade — mousse­tårtor, glutenfritt, veganskt och andra specialbeställningar — behöver beställas i god tid. Se villkoren under Beställ nedan.",
    ],
  },

  // Fälten nedan saknar "TODO:" i själva `value` — komponenterna lägger på
  // den visuella TODO-markeringen själva utifrån `placeholder`, så texten
  // ska bara beskriva VAD som saknas, inte upprepa ordet TODO.
  contact: {
    address: {
      street: "Sandvägen",
      locality: "Mollösund",
      postalCode: "",
      // TODO: husnummer och postnummer saknas fortfarande — Instagram-bion
      // anger bara "Sandvägen, Mollösund" utan nummer.
      placeholder: false,
    },
    // Numret från prislistan är caféets sms-beställningsnummer — inte
    // nödvändigtvis en linje som svarar på vanliga samtal. Komponenterna
    // märker ut det som "sms" i gränssnittet, inte bara "telefon".
    phone: {
      value: "+46 70 380 35 65",
      preferredChannel: "sms",
      placeholder: false,
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

  // Beställningsvillkor för förbeställningar (tårtor, catering m.m.), hämtade
  // ordagrant ur prislistan "Sommaren 2026". Det här är caféets EGNA
  // ledtider för sitt sms-flöde — vi visar dem som kontext i
  // beställningsformuläret så förväntningarna stämmer, även om formuläret
  // själv går via mejl (se CLAUDE.md, avgränsat scope).
  ordering: {
    placeholder: false,
    leadTimes: [
      { items: "Bröd, frallor, baguette, fransmän och bullar", deadline: "senast kl. 20:00, två dagar innan leverans" },
      { items: "Tårtor & bakelser (ordinarie sortiment) samt kondisbitar", deadline: "senast kl. 20:00, fyra dagar innan leverans" },
      { items: "Moussetårtor samt glutenfria, veganska, laktosfria eller andra specialtårtor/bakelser", deadline: "senast kl. 20:00, sex dagar innan leverans" },
    ],
    note: "Herr Bröd levererar inte på söndagar — räkna med det när du planerar din beställning.",
  },

  // Caféets EGNA öppettider (när butiken har öppet för walk-in), skickade
  // av kunden 2026-08-11. Det är ett SÄSONGSSTÄLLE — bara öppet på
  // sommaren, och enligt kunden stängt just nu (mellan säsonger) trots att
  // tiderna nedan är de som gäller när det är öppet.
  openingHours: {
    placeholder: false,
    seasonal: true,
    seasonalNote: "Öppet endast under sommarsäsongen.",
    // TODO (manuellt underhåll, uppdatera själva när säsongen öppnar/stänger):
    // sätt till `false` när butiken har öppet för säsongen, `true` när den är
    // stängd mellan säsonger. Vi har inga exakta säsongsdatum att räkna på.
    closedForSeason: true,
    regular: [
      { day: "Måndag–lördag", hours: "08:00–15:30" },
      { day: "Söndag", hours: "10:00–14:00" },
    ],
    exceptions: [],
  },

  social: {
    // TODO: vi har sett caféets Instagram-BIO (skickad som skärmdump) men
    // inte fått själva konto-URL:en eller ett Facebook-konto bekräftat.
    instagram: { url: "", handle: "Instagram-konto", placeholder: true },
    facebook: { url: "", handle: "Facebook-sida", placeholder: true },
  },

  map: {
    placeholder: true,
    embedUrl: "", // TODO: karta/embed-länk när husnummer + postnummer är bekräftat
  },

  logo: {
    placeholder: true, // TODO: logotyp i vektorformat (SVG) från kunden
  },

  heroMedia: {
    // TODO: självhostad hero-loop (.mp4/.webm, max ~2–3 MB, 8–12 sek, ingen ljudkanal)
    // och en riktig poster-bild (foto från butiken/disken). Tills dess visas en
    // grafisk platshållare — se public/images/placeholder-hero.svg.
    videoMp4: "",
    videoWebm: "",
    poster: "/images/placeholder-hero.svg",
    placeholder: true,
  },
};
