import {loadFonts} from './base';

export const getInfo = () => ({
	fontFamily: 'Libertinus Sans',
	importName: 'LibertinusSans',
	version: 'v1',
	url: 'https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400',
	unicodeRanges: {
		'cyrillic-ext':
			'U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
		cyrillic: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
		'greek-ext': 'U+1F00-1FFF',
		greek:
			'U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF',
		vietnamese:
			'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB',
		'latin-ext':
			'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF',
		latin:
			'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
	},
	fonts: {
		italic: {
			'400': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Jr0-a6k7ZLbw_dle4knJh2cq8jOfb1dRUYw.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Jr0-a6k7ZLbw_dle4knJh2cq8jOfS1dRUYw.woff2',
				'greek-ext':
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Jr0-a6k7ZLbw_dle4knJh2cq8jOfa1dRUYw.woff2',
				greek:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Jr0-a6k7ZLbw_dle4knJh2cq8jOfV1dRUYw.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Jr0-a6k7ZLbw_dle4knJh2cq8jOfZ1dRUYw.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Jr0-a6k7ZLbw_dle4knJh2cq8jOfY1dRUYw.woff2',
				latin:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Jr0-a6k7ZLbw_dle4knJh2cq8jOfW1dQ.woff2',
			},
		},
		normal: {
			'400': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Lr0-a6k7ZLbw_dle4knJh2cq8hNfUzdA.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Lr0-a6k7ZLbw_dle4knJh2cq8jdfUzdA.woff2',
				'greek-ext':
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Lr0-a6k7ZLbw_dle4knJh2cq8hdfUzdA.woff2',
				greek:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Lr0-a6k7ZLbw_dle4knJh2cq8itfUzdA.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Lr0-a6k7ZLbw_dle4knJh2cq8htfUzdA.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Lr0-a6k7ZLbw_dle4knJh2cq8h9fUzdA.woff2',
				latin:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Lr0-a6k7ZLbw_dle4knJh2cq8idfU.woff2',
			},
			'700': {
				'cyrillic-ext':
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Or0-a6k7ZLbw_dle4knJh2cq0MvLB__FpWik.woff2',
				cyrillic:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Or0-a6k7ZLbw_dle4knJh2cq0MvLB9vFpWik.woff2',
				'greek-ext':
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Or0-a6k7ZLbw_dle4knJh2cq0MvLB_vFpWik.woff2',
				greek:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Or0-a6k7ZLbw_dle4knJh2cq0MvLB8fFpWik.woff2',
				vietnamese:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Or0-a6k7ZLbw_dle4knJh2cq0MvLB_fFpWik.woff2',
				'latin-ext':
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Or0-a6k7ZLbw_dle4knJh2cq0MvLB_PFpWik.woff2',
				latin:
					'https://fonts.gstatic.com/s/libertinussans/v1/YA9Or0-a6k7ZLbw_dle4knJh2cq0MvLB8vFp.woff2',
			},
		},
	},
	subsets: [
		'cyrillic',
		'cyrillic-ext',
		'greek',
		'greek-ext',
		'latin',
		'latin-ext',
		'vietnamese',
	],
});

export const fontFamily = 'Libertinus Sans' as const;

type Variants = {
	italic: {
		weights: '400';
		subsets:
			| 'cyrillic'
			| 'cyrillic-ext'
			| 'greek'
			| 'greek-ext'
			| 'latin'
			| 'latin-ext'
			| 'vietnamese';
	};
	normal: {
		weights: '400' | '700';
		subsets:
			| 'cyrillic'
			| 'cyrillic-ext'
			| 'greek'
			| 'greek-ext'
			| 'latin'
			| 'latin-ext'
			| 'vietnamese';
	};
};

export const loadFont = <T extends keyof Variants>(
	style?: T,
	options?: {
		weights?: Variants[T]['weights'][];
		subsets?: Variants[T]['subsets'][];
		document?: Document;
		ignoreTooManyRequestsWarning?: boolean;
	},
) => {
	return loadFonts(getInfo(), style, options);
};
