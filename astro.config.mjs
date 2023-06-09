import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://tmfm.buildwithhussain.dev",
  markdown: {
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true,
    }
  },
  integrations: [
    starlight({
      title: "Missing Frappe Manual",
      social: {
        github: "https://github.com/NagariaHussain",
        twitter: "https://twitter.com/NagariaHussain",
      },
      sidebar: [
        {
          label: "FSchool Handouts",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Day 0", link: "/handouts/day-0" },
            { label: "Day 1", link: "/handouts/day-1" },
            { label: "Day 2", link: "/handouts/day-2" },
            { label: "Day 3", link: "/handouts/day-3" },
          ],
        },
        {
          label: "No Code",
          autogenerate: { directory: "no-code" },
        },
      ],
    }),
  ],
});
