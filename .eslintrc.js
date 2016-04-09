module.exports = {
  'extends': 'standard',
  'plugins': [
    'standard'
  ],
  'env': {
    'es6': true
  },
  // add your custom rules here
  'rules': {
    // disallow paren-less arrow functions
    'arrow-parens': ['error', 'always'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // onty warn if unused vars
    'no-unused-vars': ['warn', {'vars': 'all'}],
    // allow multiple empty lines
    'no-multiple-empty-lines': 0
  }

};
