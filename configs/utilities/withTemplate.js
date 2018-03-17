const redent = require('redent')
const defaultBaseColors = require('../colors/ocean')
const withColor = require('./withColor')
const hexColor = require('./color').hexColor

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

const normalizeBasePaletteColors = (baseColors) => {
  if (!baseColors) return {}
  return {
    base00: withColor(baseColors.base00),
    base01: withColor(baseColors.base01),
    base02: withColor(baseColors.base02),
    base03: withColor(baseColors.base03),
    base04: withColor(baseColors.base04),
    base05: withColor(baseColors.base05),
    base06: withColor(baseColors.base06),
    base07: withColor(baseColors.base07),
  }
}

const baseColorsToBase16 = baseColors => {
  if (!baseColors) return {}
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
  if (!baseColors) return {}
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

const basePaletteColorsToBase16 = baseColors => {
  if (!baseColors || !baseColors.base00) return {}
  const {
    base00,
    base01,
    base02,
    base03,
    base04,
    base05,
    base06,
    base07
  } = baseColors

  return {
    base00: hexColor(base00),
    base01: hexColor(base01),
    base02: hexColor(base02),
    base03: hexColor(base03),
    base04: hexColor(base04),
    base05: hexColor(base05),
    base06: hexColor(base06),
    base07: hexColor(base07),
  }
}

const makeBase16Palette = props => {
  const {
    baseLight,
    baseDark,
    baseColors,
    baseLightColors,
    basePaletteColors,
  } = props

  const baseDarkColor = withColor(baseDark)
  const baseLightColor = withColor(baseLight)

  const palette = Object.assign({},
    baseColorsToBase16(normalizeBaseColors(defaultBaseColors)),
    {
      base00: hexColor(baseDarkColor),
      base01: hexColor(baseDarkColor.lighten(0.085)),
      base02: hexColor(baseDarkColor.lighten(0.60)),
      base03: hexColor(baseDarkColor.lighten(1.25)),

      base04: hexColor(baseLightColor.darken(0.20)),
      base05: hexColor(baseLightColor.darken(0.075)),
      base06: hexColor(baseLightColor.darken(0.030)),
      base07: hexColor(baseLightColor),
    },
    baseColorsToBase16(normalizeBaseColors(baseColors)),
    (baseLightColors ? 
      baseLightColorsToBase16(normalizeBaseColors(baseLightColors)) :
      {}
    ),
    (basePaletteColors ? 
      basePaletteColorsToBase16(normalizeBasePaletteColors(basePaletteColors)) :
      {}
    ),
  )

  return palette
}

const withTemplate = props => {
  const {monochrome, name} = props
  const palette = makeBase16Palette(props)

  const outputMonochrome = monochrome ? `
    monochrome: true
  ` : ''

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
    ${outputMonochrome}

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
module.exports.hexColor = hexColor
