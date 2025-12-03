/*(everything is generally on the 8-16-24 etc scale, though there are a few instances of 4px and 12px)*/

const colors = {
	advance: {
		100: '#6A0006',
		80: '#883338',
		60: '#A6666A',
		40: '#C3999B',
		30: '#D2B3B4',
	},
	almond: {
		900: '#8F8B86',
		800: '#A7A29D',
		700: '#BFBAB3',
		600: '#D7D1CA',
		500: '#EFE8E0',
		400: '#F1EAE3',
		300: '#F5F1EC',
		200: '#F9F6F3',
		100: '#FCFAF9',
	},
	midnight: {
		500: '#090B2A',
        400: '#3A3C55',
        200: '#6B6D7F',
		100: '#9D9DAA',
	},
	mono: {
		100: '#000000',
		90: '#191919',
		80: '#333333',
		70: '#4D4D4D',
		60: '#666666',
		50: '#AEAEAE',
		40: '#CCCCCC',
		30: '#E7E7E7',
		20: '#F7F7F7',
		10: '#FCFCFC',
		0: '#FFFFFF',
	},
	monochrome: {
		900: '#000000',
		800: '#191919',
		700: '#4C4C4C',
		600: '#666666',
		500: '#808080',
		400: '#B3B3B3',
		300: '#CCCCCC',
		200: '#E6E6E6',
		100: '#FFFFFF',
	},
	neutral: {
		100: '#E3DDD1',
		80: '#E9E4DA',
		60: '#EEEBE3',
		40: '#F4F1ED',
		//30: '#f7f5f1', //additional color created, unused ATM
	},
    peach: {
        900: '#806C53', 
        800: '#B39774',
        700: '#CCAC85',
        600: '#E6C295',
        500: '#FFD7A6',
        400: '#FFDBAF',
        300: '#FFE3C1',
        200: '#FFEFDB',
        100: '#FFF7ED',
    },
	peppermint: {
		900: '#4C7556',
		800: '#5B8C67',
		700: '#7ABA8A',
		600: '#89D29B',
		500: '#98E9AC',
		400: '#ADEDBD',
		300: '#C1F2CD',
		200: '#D6F6DE',
		100: '#EAFBEE',
	},
	periwinkle: {
		900: '#6F6A90',
		800: '#827CA8',
		700: '#948EC0',
		600: '#A79FD8',
		500: '#B9B1F0',
		400: '#C7C1F3',
		300: '#D5D0F6',
		200: '#E3E0F9',
		100: '#F1EFFC',
	},
	steel: {
		100: '#3A4146',
		80: '#61676B',
		60: '#898D90',
		40: '#B0B3B5',
		30: '#c4c6c8',
	},
	highlight: {
		100: '#FEE2AB',
	},
	lowlight: {
		100: '#FFF8E9',
	},
	success: {
		100: '#469E10',
	},
	error: {
        200: '#E92E4A',
		100: '#FF0000',
	},
};

const theme = {
	colors,
};
 
module.exports = theme;