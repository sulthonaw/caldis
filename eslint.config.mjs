import { defineConfig } from "eslint";
import next from "eslint-config-next";

export default defineConfig({
  ...next,
  ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],

  rules: {
    "@typescript-eslint/no-explicit-any": "error",
  },
});
