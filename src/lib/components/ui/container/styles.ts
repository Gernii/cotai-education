import { cva } from 'cva';

import type { ContainerCVAProps, ContainerContentCVAProps } from './types';

export const containerClassNameHandler = cva<ContainerCVAProps>('', {
	variants: {
		padding: {
			bottom: 'pb-20 sm:pb-32 lg:pb-40',
			'top-bottom': 'py-14 sm:py-24 lg:py-28',
			none: ''
		}
	},
	defaultVariants: {
		padding: 'bottom'
	}
});

export const containerContentClassNameHandler = cva<ContainerContentCVAProps>('mx-auto', {
	variants: {
		size: {
			1: 'max-w-xs',
			2: 'max-w-sm',
			3: 'max-w-md',
			4: 'max-w-lg',
			5: 'max-w-xl',
			6: 'max-w-2xl',
			7: 'max-w-3xl',
			8: 'max-w-4xl',
			9: 'max-w-5xl',
			10: 'max-w-6xl',
			11: 'max-w-7xl',
			12: 'max-w-screen-xl',
			13: 'max-w-screen-2xl',
			0: ''
		},
		padding: {
			true: 'px-2 sm:px-3',
			false: ''
		}
	},
	defaultVariants: {
		size: 12,
		padding: true
	}
});
