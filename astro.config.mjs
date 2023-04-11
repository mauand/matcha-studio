import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://matchastudioyoga.com',
  integrations: [tailwind(), react(), partytown({
    config: {
      forward: ["dataLayer.push", "fbq"]
    }
  }), robotsTxt(), sitemap()]
});