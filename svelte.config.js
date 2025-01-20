import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Configure the adapter to output to the `build` directory
      pages: "build", // The directory to place the built pages
      assets: "build", // The directory to place the built assets
      fallback: "index.html", // Set to null for single-page app routing (no fallback file)
    }),
    // Set the base path for GitHub Pages (replace `your-repo-name` with your actual repo name)
    paths: {
      base: "/your-repo-name", // GitHub Pages uses /username/repo-name as the base URL
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
