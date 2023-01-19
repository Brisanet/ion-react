import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { resolve } from "path";

import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "ion-react",
      formats: ["es", "umd"],
      fileName: (format) => `ion-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [
        typescript({
          target: "es2022",
          rootDir: "./src",
          declaration: true,
          declarationDir: "./dist",
          exclude: "./node_modules/**",
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});
