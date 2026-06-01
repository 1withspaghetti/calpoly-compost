import { inView as motionInView, type AnimationOptions, type DOMKeyframesDefinition } from 'motion';
import { animate } from 'motion';
import type { Action } from 'svelte/action';

export type InViewHandler = (element: Element, entry: IntersectionObserverEntry) => void;
export type InViewOptions = Parameters<typeof motionInView>[2];

export const inView: Action<
	HTMLElement,
	InViewHandler | { onEnter: InViewHandler; options: InViewOptions }
> = (node, params) => {
	const destroy = motionInView(
		node,
		typeof params == 'object' ? params.onEnter : params,
		typeof params == 'object' ? params.options : undefined
	);

	return {
		destroy
	};
};

export const inViewAnimate: Action<
	HTMLElement,
	{ keyframes: DOMKeyframesDefinition; options?: AnimationOptions; inViewOptions?: InViewOptions }
> = (node, { keyframes, options, inViewOptions }) => {
	const destroy = motionInView(
		node,
		(node) => {
			console.log('In view');
			const controls = animate(node, keyframes, options);
			controls.finished.then(() => console.log('Finished'));
		},
		inViewOptions
	);

	return {
		destroy
	};
};
