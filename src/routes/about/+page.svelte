<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { Blend, CornerLeftDown, CornerRightUp, Megaphone, Scale } from '@lucide/svelte';
	import lqip_hero from '$lib/assets/imgs/about-calpoly-aerial.jpg?lqip';
	import { inViewAnimate } from '$lib/components/actions/inView';
</script>

<Meta title="About" />

<Header />
<main class="flex flex-col items-center overflow-hidden pt-20 pb-32">
	<section class="max-w-8xl relative mb-8 w-full">
		<enhanced:img
			class="absolute top-0 left-0 h-full w-full object-cover object-center"
			src="$lib/assets/imgs/about-calpoly-aerial.jpg?w=1600;1024;512"
			loading="eager"
			alt="ariel view of calpoly campus"
			sizes="(max-width: 1600px) 100vw"
			style:background-image={`url("${lqip_hero.lqip}")`}
			style:background-size="cover"
			style:font-size="0"
		/>
		<div class="relative bg-black/40 p-8 py-16 text-center text-white md:py-32">
			<h1 class="flex flex-col items-center">
				<span class="mb-2 scale-x-125 text-4xl font-extrabold md:text-6xl">About Us</span>
			</h1>
		</div>
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8 mb-8">
		<h2>The Mission:</h2>
		<div class="relative px-16 py-4 md:mx-8">
			<p class="text-center text-xl">
				To <b class="text-2xl">educate</b> and <b class="text-2xl">advocate</b> for
				effective waste reduction via <b class="text-2xl">composting opportunities</b> on the
				Cal Poly campus
			</p>
			<CornerLeftDown strokeWidth={3} class="absolute top-0 left-0 size-16" />
			<CornerRightUp strokeWidth={3} class="absolute right-0 bottom-0 size-16" />
		</div>
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<div class="flex w-full items-center gap-4 overflow-hidden mb-8">
			<div
				use:inViewAnimate={{
					keyframes: { translateX: ['-100%', 0] },
					options: { delay: 0.3, duration: 2, ease: [0, 0.55, 0.45, 1] }
				}}
				class="h-0 w-full border"
			></div>
			<h2 class="mt-0 mb-0">Values:</h2>
			<div
				use:inViewAnimate={{
					keyframes: { translateX: ['100%', 0] },
					options: { delay: 0.3, duration: 2, ease: [0, 0.55, 0.45, 1] }
				}}
				class="h-0 w-full border"
			></div>
		</div>
		<div class="flex flex-wrap justify-center gap-8 mb-8">
			<div class="flex flex-col items-center w-64">
				<Blend class="size-16" />
				<h3 class="mt-6 mb-2">Transparency</h3>
				<p class="text-center mt-0">
					Promote honest and ethical communication with access to high quality sources of information
				</p>
			</div>
			<div class="flex flex-col items-center w-64">
				<Megaphone class="size-16" />
				<h3 class="mt-6 mb-2">Advocacy</h3>
				<p class="text-center mt-0">
					Seeking to transform the world into a better place for everybody, one step at a time
				</p>
			</div>
			<div class="flex flex-col items-center w-64">
				<Scale class="size-16" />
				<h3 class="mt-6 mb-2">Integrity</h3>
				<p class="text-center mt-0">
					Always do the right thing, even when nobody is watching 
				</p>
			</div>
		</div>
		<div class="flex w-full items-center overflow-hidden">
			<div
				use:inViewAnimate={{
					keyframes: { translateX: ['-100%', 0] },
					options: { delay: 0.3, duration: 2, ease: [0, 0.55, 0.45, 1] }
				}}
				class="h-0 w-full border"
			></div>
			<div
				use:inViewAnimate={{
					keyframes: { translateX: ['100%', 0] },
					options: { delay: 0.3, duration: 2, ease: [0, 0.55, 0.45, 1] }
				}}
				class="h-0 w-full border"
			></div>
		</div>
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<h2>About the Author:</h2>
		<div class="flex gap-8 items-center">
			<enhanced:img
				src="$lib/assets/imgs/tyler.jpg?w=1024;512"
				alt="tyler laying down with a mountain in the background"
				class="w-full max-w-96 flex-1"
			/>
			<div class="flex-1">
				<h3>Tyler Place</h3>
				<p>
					Tyler Place is a climate-driven software developer who values people and the natural world over profit. He loves making websites, petting dogs, and hiking in nature.
				</p>
			</div>
		</div>
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8 mt-16">
		<p class="text-center text-sm">This website was make for a university project as part of ENGL 147</p>
	</section>
</main>
