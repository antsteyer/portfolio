import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript"
import pluginVue from "eslint-plugin-vue"
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting"
import globals from "globals"

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"]
  },

  {
    name: "app/files-to-ignore",
    ignores: [
      "**/dist/**",
      "**/dist-ssr/**",
      "**/coverage/**",
      "**/node_modules/**",
      "**/.vite/**",
      "**/public/**"
    ]
  },

  {
    name: "app/language-options",
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  pluginVue.configs["flat/recommended"],

  vueTsConfigs.recommended,

  {
    name: "app/custom-rules",
    rules: {
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: false,
          ignores: []
        }
      ],
      "vue/multi-word-component-names": "error",
      "vue/padding-line-between-tags": ["error", [{ blankLine: "always", prev: "*", next: "*" }]],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ]
    }
  },

  skipFormatting
)
