const baseColors = require('./one');
const darken = require('../utilities/color').darken;

const baseLightColors = {
  red: darken(baseColors.red, 0.2),
  orange: darken(baseColors.orange, 0.2),
  yellow: darken(baseColors.yellow, 0.2),
  green: darken(baseColors.green, 0.2),
  cyan: darken(baseColors.cyan, 0.2),
  blue: darken(baseColors.blue, 0.2),
  magenta: darken(baseColors.magenta, 0.2),
  darkRed: darken(baseColors.darkRed, 0.2),
};

module.exports = baseLightColors;
