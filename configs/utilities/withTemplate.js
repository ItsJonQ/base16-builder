const redent = require('redent')
const defaultBaseColors = require('../colors/ocean')
const withColor = require('./withColor')

const hexColor = color => color.hex().replace('#', '')

const normalizeBaseColors = (baseColors = defaultBaseColors) => ({
  red: withColor(baseColors.red),
  orange: withColor(baseColors.orange),
  yellow: withColor(baseColors.yellow),
  green: withColor(baseColors.green),
  cyan: withColor(baseColors.cyan),
  blue: withColor(baseColors.blue),
  magenta: withColor(baseColors.magenta),
  darkRed: withColor(baseColors.darkRed),
})

const baseColorsToBase16 = baseColors => {
  const {
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    magenta,
    darkRed
  } = baseColors

  return {
    base08: hexColor(red),
    base09: hexColor(orange),
    base0A: hexColor(yellow),
    base0B: hexColor(green),
    base0C: hexColor(cyan),
    base0D: hexColor(blue),
    base0E: hexColor(magenta),
    base0F: hexColor(darkRed),
  }
}

const baseLightColorsToBase16 = baseColors => {
  const {
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    magenta,
    darkRed
  } = baseColors

  return {
    base08Light: hexColor(red),
    base09Light: hexColor(orange),
    base0ALight: hexColor(yellow),
    base0BLight: hexColor(green),
    base0CLight: hexColor(cyan),
    base0DLight: hexColor(blue),
    base0ELight: hexColor(magenta),
    base0FLight: hexColor(darkRed),
  }
}

const makeBase16Palette = props => {
  const {
    baseLight,
    baseDark,
    baseColors,
    baseLightColors,
  } = props

  const baseDarkColor = withColor(baseDark)
  const baseLightColor = withColor(baseLight)

  const palette = Object.assign({},
    baseColorsToBase16(normalizeBaseColors(defaultBaseColors)),
    {
      base00: hexColor(baseDarkColor),
      base01: hexColor(baseDarkColor.lighten(0.085)),
      base02: hexColor(baseDarkColor.lighten(0.60)),
      base03: hexColor(baseDarkColor.lighten(0.85)),

      base04: hexColor(baseLightColor.darken(0.15)),
      base05: hexColor(baseLightColor.darken(0.075)),
      base06: hexColor(baseLightColor.darken(0.025)),
      base07: hexColor(baseLightColor),
    },
    baseColorsToBase16(normalizeBaseColors(baseColors)),
    (baseLightColors ?
      baseLightColorsToBase16(normalizeBaseColors(baseLightColors)) :
      {}
    ),
  )

  return palette
}

const withTemplate = props => {
  const {name} = props
  const palette = makeBase16Palette(props)

  const outputLight = palette.base08Light ? `
    # colors (light)
    base08Light: "${palette.base08Light}"
    base09Light: "${palette.base09Light}"
    base0ALight: "${palette.base0ALight}"
    base0BLight: "${palette.base0BLight}"
    base0CLight: "${palette.base0CLight}"
    base0DLight: "${palette.base0DLight}"
    base0ELight: "${palette.base0ELight}"
    base0FLight: "${palette.base0FLight}"
  ` : ''

  const output = redent(`
    scheme: "${name}"
    author: "Jon Q (https://jonquach.com)"

    # dark
    base00: "${palette.base00}"
    base01: "${palette.base01}"
    base02: "${palette.base02}"
    base03: "${palette.base03}"

    # light
    base04: "${palette.base04}"
    base05: "${palette.base05}"
    base06: "${palette.base06}"
    base07: "${palette.base07}"

    # colors
    base08: "${palette.base08}"
    base09: "${palette.base09}"
    base0A: "${palette.base0A}"
    base0B: "${palette.base0B}"
    base0C: "${palette.base0C}"
    base0D: "${palette.base0D}"
    base0E: "${palette.base0E}"
    base0F: "${palette.base0F}"
    ${outputLight}
  `).trim()

  return output
}

module.exports = withTemplate
