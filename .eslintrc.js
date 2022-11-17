module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        // "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        // "@typescript-eslint"
    ],
    "rules": {
        "jsx-a11y/alt-text": [0],
        "react/react-in-jsx-scope": "off",
        "react/react-in-tsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx",".ts", ".tsx"] }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@next/next/no-html-link-for-pages": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain" : "off",
        "react/no-unescaped-entities": "off"
        
    }
}
