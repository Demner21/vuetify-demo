module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,  // Si tu código corre en el navegador
        jest: true      // Si estás usando Jest para pruebas
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        'plugin:prettier/recommended' // Agrega esta línea si usas Prettier
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',  // Advertir sobre variables sin usar en TS
        'vue/no-unused-components': 'warn', // Advertir sobre componentes Vue no utilizados
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
}