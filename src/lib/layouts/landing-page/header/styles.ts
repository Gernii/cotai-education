import { cva } from 'cva';

import type { HeaderCVAProps } from './types';

export const headerClassNameHandler = cva<HeaderCVAProps>(
	'inset-x-3 top-3 z-40 h-20 bg-white px-2 py-1 shadow',
	{
		variants: {
			disableScrollEvent: {
				true: 'sticky',
				false: 'fixed rounded-lg'
			}
		},

		defaultVariants: {
			disableScrollEvent: false
		}
	}
);

// export const headerClassNameHandler = cva<HeaderCVAProps>(
// 	'inset-x-0 top-0 z-40 h-16 bg-base-100 shadow-sm',
// 	{
// 		variants: {
// 			disableScrollEvent: {
// 				true: 'sticky',
// 				false: 'fixed'
// 			},
// 			scroll: {
// 				true: '',
// 				false: ''
// 			}
// 		},
// 		compoundVariants: [
// 			{
// 				disableScrollEvent: false,
// 				scroll: true,
// 				class: 'opacity-100 transition-opacity duration-300'
// 			},
// 			{
// 				disableScrollEvent: false,
// 				scroll: false,
// 				class: 'h-0 opacity-0'
// 			}
// 		],
// 		defaultVariants: {
// 			scroll: false,
// 			disableScrollEvent: false
// 		}
// 	}
// );
