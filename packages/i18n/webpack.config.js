const HtmlWebpackPlugin = require('html-webpack-plugin');
const I18nPlugin = require('i18n-webpack-plugin');
const glob = require('glob');
const path = require('path');

const translations = [{ language: 'en' }].concat(
  glob.sync('./src/languages/*.json').map(file => {
    console.log('<----->');
    console.log(file); // ./src/languages/ru.json
    console.log(path.basename(file)); // ru.json
    console.log(path.extname(file)); // .json
    console.log(path.basename(file, path.extname(file))); // ru
    console.log('<----->');
    return {
      language: path.basename(file, path.extname(file)),
      translation: require(file)
    };
  })
);

module.exports = translations.map(({ language, translation }) => ({
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].${language}.js`
  },
  plugins: [new HtmlWebpackPlugin(), new I18nPlugin(translation)]
}));
