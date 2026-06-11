# Offenes Notizbuch — Website von Nikolay (Personal Brand)

## Was das hier ist
Astro-Site (statisch) für Nikolays professionelle Identität: Feldnotizen (Blog), Gebaut (Build-Log),
Werkzeugkasten (Downloads), Über mich. KEINE Angebote, KEINE Preise, kein Verkaufs-Funnel —
Verkauf läuft über die CT-Website. Erfolgskriterium: Leute lesen gern und kommen wieder.

## Quellen der Wahrheit (im Ordner ../Personal-Brand-System/)
- 05_Website/11_Website-Konzept-und-Copy.md — Konzept „Das offene Notizbuch", Seitenlogik, Copy
- 05_Website/12_Web-Designsystem.md — Tokens, Komponenten, Tag-1-Pflichten, Nicht-Features
- 02_Messaging/06_Brand-Voice-Master.md + 07_Voice-Formate.md — Stimmregeln (Website = Sie-Form)
- 06_Governance (sobald vorhanden) — Brand-Guardrails

## Harte Regeln
1. Anrede Sie. Kein Berater-Sprech (Negativ-Liste in 05_Messaging-Architektur.md). Kein Bau-Vokabular als Markensprache.
2. Farben NUR aus tailwind.config.cjs (papier/karte/tinte/grau/tuerkis/lagune/eisblau/handspur/anthrazit).
   Orange (#fc551e) AUSSCHLIESSLICH für Handspur-Elemente, nie für Text. Links/Buttons-Text: lagune, nicht tuerkis.
3. Genau EINE Handspur pro Viewport-Höhe. Caveat nur für Randnotizen (max. 3–4 Wörter, aria-hidden).
4. Mobile-first (390px zuerst). Raster nie auf Karten, nie in Artikel-Prose.
5. Fonts bleiben self-hosted (DSGVO) — niemals Google-Fonts-Request einbauen.
6. Keine Suche, keine Kommentare, kein Dark Mode, kein Cookie-Banner (cookielose Analytics).

## Live-Stand (seit 11.06.2026)
Deployed auf GitHub Pages: https://nikomh.github.io (Repo Nikomh/Nikomh.github.io, Push auf main = Deploy).
PRELAUNCH-Flag in BaseLayout.astro setzt noindex — auf false stellen, sobald Impressum/Datenschutz echt sind und die Domain steht.
Montagmorgen-Check ist live unter /selbst-check (Vanilla-JS-Insel, Auswertung nur im Browser).

## Offene TODOs (Suche nach "TODO" im Code)
- Echte Domain registrieren, in astro.config.mjs + robots.txt eintragen, bei GitHub Pages als Custom Domain hinterlegen
- /impressum + /datenschutz: Platzhalter ([Nachname], Adresse, E-Mail) durch echte Angaben ersetzen → dann PRELAUNCH=false
- LinkedIn-URL + E-Mail-Adresse im Footer/Artikel-Ende/Über-mich
- 3 Fotos nach public/images/ (siehe LIES-MICH.txt dort; fehlende Bilder werden bis dahin per onerror ausgeblendet)
- Newsletter-Form an Anbieter anbinden (Double-Opt-in)
- OG-Images automatisieren (satori / astro-og-canvas), Plausible/Umami einbinden
- Werkzeugkasten: 3 PDFs produzieren und verlinken
- Ausbau-Stufe: Lexikon, /jetzt
