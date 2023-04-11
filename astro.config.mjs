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
      resolveUrl: {function(url) {
        if (url.hostname === "connect.facebook.net") {
          var proxyUrl = new URL('https://my-reverse-proxy.com/');
          proxyUrl.searchParams.append('url', url.href);
          return proxyUrl;
        }
        return url;
      },
      forward: [
        "fbq"
      ]
    }
  }
  }), robotsTxt(), sitemap()]
});