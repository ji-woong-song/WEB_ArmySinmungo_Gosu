module.exports = {
    extends: [
      'plugin:vue/recommended',
      //'plugin:vuetify/base'
    ],
    plugins: [
        'vuetify'
    ],
    rules:{
        'vuetify/no-deprecated-classes' : 'error'
    },
    parserOptions: {
      parser: "babel-eslint"
  },
}
