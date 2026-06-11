/** Web-Designsystem v1 — siehe Personal-Brand-System/05_Website/12_Web-Designsystem.md */
module.exports = {
  content: ['./src/**/*.{astro,html,js,md,ts}'],
  theme: {
    extend: {
      colors: {
        papier: '#f7f5f1',
        karte: '#fbfaf7',
        tinte: '#2b3036',
        grau: '#5c626a',
        tuerkis: '#14b4be',
        lagune: '#0e7c85',
        eisblau: '#8adadf',
        handspur: '#fc551e',
        anthrazit: '#333a45',
      },
      fontFamily: {
        sans: ['Basier Circle', 'Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      maxWidth: { prose: '42rem' },
    },
  },
  plugins: [],
};
