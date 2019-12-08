module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "indent": 0,
        "no-plusplus": 0,
        "no-use-before-define": 0,
        "quotes": 0,
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-one-expression-per-line": 0,
    },
};
