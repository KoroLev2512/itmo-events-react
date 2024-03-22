module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": './tsconfig.json',
        "parser": '@typescript-eslint/parser',
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
    },
    "rules": {
        "indent": [1, 4],
        "@typescript-eslint/indent": [1, 4],
        "semi":"off",
        "@typescript-eslint/semi": ["error","always"]
    }
}
