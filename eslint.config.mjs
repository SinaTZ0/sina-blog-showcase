import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginPromise from "eslint-plugin-promise";
import reactCompiler from "eslint-plugin-react-compiler";
import sonarjs from "eslint-plugin-sonarjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

//next eslint plugins already have some eslint plugins with recommanded rules but not for the jsxA11y. that why when we want to apply jsxA11y recommanded setting it look like below
// here is the list of next eslint plugins
//eslint-plugin-import		  /recommended
//eslint-plugin-react-hooks	/recommended
//eslint-plugin-react		    /recommended
//typescript-eslint		      /recommended
//eslint-plugin-jsx-a11y

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Get the recommended rules from the plugin
      ...jsxA11y.flatConfigs.recommended.rules,
    },
  },
  reactCompiler.configs.recommended,
  pluginPromise.configs["flat/recommended"],
  sonarjs.configs.recommended,
  //you can enable individual rules like this(although jsxA11y already defined as plugin in next eslint plugin and you don't need to defined again)
  // {
  //   plugins: {
  //     'jsx-a11y': jsxA11y,
  //   },
  //   rules: {
  //     'jsx-a11y/anchor-is-valid': 'error',
  //     'jsx-a11y/img-redundant-alt': 'warn',
  //     'jsx-a11y/no-autofocus': 'warn',
  //     // Add other specific rules you want
  //   },
  // },
  {
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin", // Built-in imports (e.g., 'fs', 'path')
            "external", // External imports (e.g., 'react', 'lodash')
            "internal", // Internal imports (resolves based on 'paths' in tsconfig.json)
            ["parent", "sibling", "index"], // Relative imports
            "object", // 'object'-imports (not common)
            "type", // Type imports
          ],
          pathGroups: [
            // This rule ensures 'react' always comes first
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            // Add any other custom groupings here.
            // For example, if you have a '@/' alias for your 'src' folder:
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always", // Enforce newlines between groups
          alphabetize: {
            order: "asc", // Sort in ascending order
            caseInsensitive: true, // Ignore case
          },
        },
      ],
    },
  },
];

export default eslintConfig;
