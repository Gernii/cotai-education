import type { KeenSliderPlugin } from 'keen-slider';

export const autoSwitchSlide =
	(delayTimeout: number): KeenSliderPlugin =>
	(slider) => {
		let timeout: number | undefined = undefined;
		let mouseOver = false;
		function clearNextTimeout() {
			clearTimeout(timeout);
		}
		function nextTimeout() {
			clearTimeout(timeout);
			if (mouseOver) return;
			timeout = window.setTimeout(() => {
				slider.next();
			}, delayTimeout);
		}
		slider.on('created', () => {
			slider.container.addEventListener('mouseover', () => {
				mouseOver = true;
				clearNextTimeout();
			});
			slider.container.addEventListener('mouseout', () => {
				mouseOver = false;
				nextTimeout();
			});
			nextTimeout();
		});
		slider.on('dragStarted', clearNextTimeout);
		slider.on('animationEnded', nextTimeout);
		slider.on('updated', nextTimeout);
	};
