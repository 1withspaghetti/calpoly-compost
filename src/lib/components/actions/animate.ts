import type { AnimationOptions, DOMKeyframesDefinition } from 'motion';
import { animate as motionAnimate } from 'motion';
import type { Action } from 'svelte/action';

export const animate: Action<
	HTMLElement,
	{ keyframes: DOMKeyframesDefinition; options?: AnimationOptions }
> = (node, { keyframes, options }) => {
	console.log('starting animation', node);

	const controls = motionAnimate(node, keyframes, options);
	controls.finished.then(() => console.log('finished'));

	return {
		destroy: () => {
			console.log('animation canceled');
			controls.stop();
		}
	};
};
