import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.fireshort.in",
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), robotsTxt()]
});