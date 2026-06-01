<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { CornerLeftDown, CornerRightUp } from '@lucide/svelte';
</script>

<Meta title="About" />

<Header />
<main class="flex flex-col items-center overflow-hidden pt-20 pb-32">
	<section class="max-w-8xl relative mb-8 w-full">
		<enhanced:img
			class="absolute top-0 left-0 h-full w-full object-cover object-center"
			src="$lib/assets/imgs/about-calpoly-aerial.jpg?w=1600;1024;512"
			alt="ariel view of calpoly campus"
			sizes="(max-width: 1500px) 100vw"
		/>
		<div class="relative bg-black/40 p-8 py-16 text-center text-white md:py-32">
			<h1 class="flex flex-col items-center">
				<span class="mb-2 scale-x-125 text-4xl font-extrabold md:text-6xl">About Us</span>
			</h1>
		</div>
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<h2>The Mission:</h2>
		<div class="relative px-16 py-4 md:mx-8">
			<p class="text-xl">
				To <b class="text-2xl">educate</b> and <b class="text-2xl">advocate</b> for effective waste
				reduction via <b class="text-2xl">composting opportunities</b> on the Cal Poly campus
			</p>
			<CornerLeftDown strokeWidth={3} class="absolute top-0 left-0 size-16" />
			<CornerRightUp strokeWidth={3} class="absolute right-0 bottom-0 size-16" />
		</div>
	</section>
</main>
