    module.exports = {
      extends: [
        "eslint:recommended",
        // Add other ESLint configurations here (e.g., "plugin:react/recommended")
        "plugin:prettier/recommended" // Must be last to disable conflicting rules
      ],
      // Add other ESLint configurations (parser, plugins, rules, etc.)
      rules: {
        "prettier/prettier": "error" // Enforce Prettier formatting as an ESLint error
      }
    };
