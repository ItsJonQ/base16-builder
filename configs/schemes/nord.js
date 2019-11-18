const baseColors = require('../colors/ayu');
const baseLightColors = require('../colors/oneLight');

module.exports = {
	name: 'Nord',

	baseDark: '2e3440',
	baseLight: 'eff1f5',

	baseColors: Object.assign({}, baseColors, {
		blue: '#789fc0',
		cyan: '#89c0d0',
	}),
	baseLightColors,
};
