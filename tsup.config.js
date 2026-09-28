import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "bin/index.js",
  },
  format: ["esm"],
  clean: true,
  splitting: false,
  noExternal: ["@clack/prompts", "degit", "ora", "picocolors"],
});
