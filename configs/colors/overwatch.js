const darken = require('../utilities/color').darken
const lighten = require('../utilities/color').lighten

const makeColors = (
  mainColor = '289aff',
  baseDark = '141820',
  baseLight = 'f9f9fb',
) => {

  const subColor = darken(baseLight, 0.16)
  const subLightColor = lighten(baseDark, 0.16)
  const redColor = darken(baseLight, 0.35)
  const redLightColor = lighten(baseDark, 0.4)

  return {
    baseDark,
    baseLight,
    baseColors: {
      red: redColor,
      orange: subColor,
      yellow: subColor,
      green: mainColor,
      cyan: subColor,
      blue: mainColor,
      magenta: mainColor,
      darkRed: redColor,
    },

    baseLightColors: {
      red: redLightColor,
      orange: subLightColor,
      yellow: subLightColor,
      green: mainColor,
      cyan: subLightColor,
      blue: mainColor,
      magenta: mainColor,
      darkRed: redLightColor,
    }
  }
}

module.exports = makeColors
