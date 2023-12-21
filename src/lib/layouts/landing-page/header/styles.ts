import { cva } from 'cva';

import type { HeaderCVAProps } from './types';

export const headerClassNameHandler = cva<HeaderCVAProps>(
	'inset-x-1 top-1 z-40 h-16 border bg-base-100/90 px-1 py-1 shadow backdrop-blur-sm lg:inset-x-3 lg:top-3 lg:h-20 lg:px-2',
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
