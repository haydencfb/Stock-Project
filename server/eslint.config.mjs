import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { languageOptions: { globals: globals.node } },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
];
