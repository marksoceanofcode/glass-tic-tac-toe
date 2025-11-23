import { defineConfig } from "eslint/config"
import next from "eslint-config-next"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

const eslintConfig = defineConfig([
  // Pull in the Next.js recommended config
  next,

  // Add Prettier config (turns off conflicting rules)
  prettierConfig,

  // Add Prettier plugin
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "@next/next/no-img-element": "off",
      "prettier/prettier": "error",
      // Optional: if you want warnings instead of errors
      // "prettier/prettier": "warn",
    },
  },

  // Override default ignores
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  },
])

export default eslintConfig
