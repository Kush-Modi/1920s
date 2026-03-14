import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    syntaxHighlighting: false,
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});
