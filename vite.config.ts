import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  pack: {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    deps: {
      neverBundle: ["react", "react-dom", "prop-types", "styled-components"],
    },
  },
});
