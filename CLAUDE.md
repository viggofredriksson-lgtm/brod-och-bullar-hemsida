# Projekt: Bröd och bullar — hemsida

## Sammanhang

Frilansuppdrag åt ett lokalt café/bageri som heter **Bröd och bullar**. Jag är
designer/utvecklare, kunden är en liten verksamhet utan teknisk personal.

Leveransen är **tre stilistiska versioner** av samma sajt. Kunden väljer en, sen
gör vi en revideringsrunda på den valda. Sajten ska efter leverans kunna
förvaltas av någon annan — håll den enkel och läsbar.

## Teknisk ram

- **Statisk sajt.** Astro eller ren HTML/CSS/vanilla JS. Ingen React-app, ingen
  CMS-installation, inget UI-bibliotek.
- **Ingen Tailwind.** Vi vill ha en egen visuell identitet, inte default-utseende.
  Skriv egen CSS.
- **All styling går via CSS custom properties** i en tokens-fil per version:
  `--color-bg`, `--color-surface`, `--color-text`, `--color-accent`,
  `--font-display`, `--font-body`, `--radius`, `--space-unit`, `--shadow`.
- **En struktur, tre teman.** Samma komponenter och samma innehåll i alla tre
  versionerna. Skillnaden ska i huvudsak ligga i tokens-filen plus 1–2
  layoutvarianter av hero-sektionen. Bygg INTE tre separata sajter.
- Rutter: `/v1`, `/v2`, `/v3` så kunden kan klicka runt själv.
- Deploy: Cloudflare Pages eller Netlify.
- Inga externa tredjepartsskript som kräver cookie-samtycke (ingen
  YouTube-embed, ingen Google Fonts-CDN — självhosta typsnitten).

## Sidstruktur / sektioner

Startsida (one-pager eller startsida + undersidor, föreslå gärna):

1. **Hero** med bakgrundsvideo + logotyp
2. **Om caféet** — berättande text
3. **Meny** med priser och allergener
4. **Beställning** (se scope nedan)
5. **Hitta hit** — adress, karta, öppettider
6. **Footer** — kontakt, sociala medier, öppettider igen

## Innehåll — status

Kunden har ännu inte levererat allt. Använd tydligt märkta platshållare
(`TODO:`) för det som saknas, och lägg allt innehåll i separata data-/contentfiler
så det är lätt att byta ut. **Ingen lorem ipsum** — skriv rimliga svenska
utkastformuleringar som visar hur det kommer se ut på riktigt.

Saknas / ska in:
- Öppettider (inkl. avvikande dagar)
- Adress, telefon, mail
- Meny med priser + allergener
- Riktiga foton (viktigt: layouten får inte falla ihop med medelmåttiga bilder)
- Text om caféet
- Länkar till sociala medier
- Logotyp i vektorformat

## Hero-video — krav

Kunden vill ha video i bakgrunden. Bygg det så här:

- Självhostad `.mp4`/`.webm`, **max ~2–3 MB**, 8–12 sek loop, ingen ljudkanal.
- `muted autoplay playsinline loop` + `poster`-bild som visas direkt.
- **På mobil: ladda inte videon alls** — visa bara poster-bilden.
- Respektera `prefers-reduced-motion` — statisk bild då.
- Gradient/overlay bakom text så kontrasten håller när videon rör sig.
- Bygg komponenten så att den funkar lika bra med enbart stillbild, ifall
  kunden aldrig levererar film.

## Beställningssystem — begränsat scope

Kunden sa "beställningssystem", men det är avgränsat till:

**Ett formulär för tårt-, catering- och företagsfikabeställningar som mailas
till caféet.** (Namn, kontakt, önskat datum, antal, fritext, ev. allergier.)

Bygg **inte** kassa, betalning, kundkonton eller lagersaldo. Om något i koden
börjar dra åt det hållet — stanna och flagga det istället. Betalning online är
en separat fas som prisas för sig.

## De tre designriktningarna

Alla tre ska vara riktningar jag faktiskt vill bygga — ingen "utfyllnadsversion".
De ska kännas tydligt olika, inte som tre nyanser av samma idé.

| | Känsla | Typografi | Färg |
|---|---|---|---|
| **v1 — Varm & hantverk** | Mjöl, trä, händer i deg | Serif med karaktär, generös radavstånd | Terracotta, smör, mörkbrun |
| **v2 — Skandinaviskt rent** | Lugnt, luftigt, produkten i fokus | Grotesk, mycket whitespace | Off-white, ett accentblått |
| **v3 — Nostalgiskt konditori** | 50-tals bageriskylt, lekfullt | Display-font i rubriker, tightare sättning | Djupgrön/kräm, guldaccent |

**Varning på v1:** krämvit bakgrund + högkontrastserif + terracotta-accent är
exakt den palett AI-genererad design landar i som default. Riktningen är rätt,
men hämta färgerna och typsnittet från något konkret i bageriets värld i stället
för från den generiska varianten — mjölsäckens tryck, bakplåtens brända kanter,
kakelväggen, prislappen i kassan. Om v1 ser ut som vilken "artisan"-mall som
helst har vi missat.

## VIKTIGT: sajten får inte se AI-genererad ut

Det här är det viktigaste kravet i hela briefen. Kunden är ett litet lokalt
café — om sajten ser ut som en mall känns caféet som en kedja, och hela poängen
är borta. Jag säljer den här sajten som hantverk, och den ska tåla att jämföras
med en byrålevererad sajt.

**Undvik det här — det är de tydligaste tecknen:**

- Lila/indigo-gradienter, gradient-text i rubriker, glassmorphism.
- Emoji som ikoner, emoji i rubriker.
- Tre likadana kort i rad med ikon + fet rubrik + två rader grå text.
- Samma `border-radius` på precis allt.
- Inter, Poppins, Montserrat. Välj typsnitt med faktisk karaktär.
- Allt centrerat, allt symmetriskt, varje sektion i samma rytm:
  liten versal grå etikett → centrerad rubrik → grå underrubrik → innehåll.
- Fade-in-on-scroll på varje enskilt element.
- Pilar i knappar (`Läs mer →`) och bocklistor överallt.
- Dark mode-växlare som ingen har bett om.
- Alla sektioner lika höga, lika mycket luft, ingen skalkontrast.

**Undvik det här i texten — copy avslöjar en mall snabbare än layouten:**

- "Där tradition möter innovation", "Upplev den perfekta balansen mellan…",
  "Vi brinner för hantverket", "Med kärlek till detaljerna".
- Översatt-engelsk svenska. Läs högt: låter det som något en bagare i
  förortscentrum faktiskt skulle säga?
- Adjektiv utan innehåll. Skriv "surdeg på 18 timmars jäsning" i stället för
  "noggrant utvalda råvaror". Konkreta detaljer är det som inte går att generera
  fram: ett årtal, ett förnamn, ett gatunamn, en specifik bulle.

**Gör så här i stället:**

- Utgå från caféets egen värld när du väljer form. Materialen finns där redan:
  mjöl, smör, bakplåt, brödkorg, handskriven dagens-skylt, papperspåse,
  kaklet på väggen. Låt paletten och detaljerna komma därifrån, inte från en
  generisk "cozy bakery"-idé.
- Bygg layouten asymmetrisk och redaktionell. Låt något gå utanför griden.
  Låt rubrikerna variera i storlek på riktigt — inte 48px / 32px / 24px prydligt
  nedför sidan.
- **Lägg all djärvhet på ett ställe.** Välj *en* signaturidé som sidan blir
  ihågkommen för och håll allt runt omkring lugnt och disciplinerat. Tre halvt
  djärva grepp läser alltid som mall; ett helt genomfört gör det inte.
- Låt bilderna bära sidan. Stora, orörda, med luft omkring — inte små i kort med
  skuggor.
- Sparsamt med rörelse. En genomtänkt sekvens vid sidladdning slår tio
  scroll-animationer.
- Skriv färdig svensk copy som låter som caféet, inte platshållartext.

**Innan du säger att något är klart:** ta en skärmdump och ställ frågan — om du
fick prompten "gör en snygg hemsida åt ett bageri" utan någon annan kontext,
hade du landat här? I så fall gör om det. Berätta vad du ändrade och varför.

## Kvalitetskrav

- Mobilförst. Testa 375px, 768px, 1440px.
- Tillgänglighet: kontrastkrav (WCAG AA), alt-texter, logisk tabbordning,
  fokusmarkering som syns.
- Kör Lighthouse och rapportera siffrorna. Hero-videon kommer kosta poäng —
  mät tidigt så vi vet vad den kostar.
- Semantisk HTML. Öppettider och adress ska in som strukturerad data
  (schema.org `CafeOrCoffeeShop`) — viktigt för lokal sökning.
- Sidan ska fungera utan JavaScript för allt utom formuläret.

## Arbetssätt

- Commit ofta, med små avgränsade ändringar.
- Kör en lokal server och ta skärmdumpar för att kontrollera resultatet visuellt
  innan du säger att något är klart.
- Bygg **v1 först och färdigt**. Först när strukturen sitter, gör v2 och v3 som
  temavarianter.
- Fråga hellre än gissa när det gäller innehåll och scope.
