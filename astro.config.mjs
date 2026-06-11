import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


// TODO: echte Domain eintragen
export default defineConfig({
  site: 'https://nikolay-baut.de',
  integrations: [tailwind({ applyBaseStyles: false })],
});
