const autoprefixer = require('autoprefixer');
const combinemq = require('postcss-combine-media-query');
const removeDuplicates = require('postcss-discard-duplicates');

module.exports = (api) => ({
  ident: 'postcss',
  syntax: require('postcss-scss'),
  plugins: [combinemq, removeDuplicates, autoprefixer],
});
