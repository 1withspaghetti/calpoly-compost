<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import lqip_hero from '$lib/assets/imgs/zerowaste.jpg?lqip';
	import Tool from './Tool.svelte';
</script>

<Meta title="Sorting Tool" />

<Header />
<main class="flex flex-col items-center overflow-hidden pt-20 pb-16">
	<section class="max-w-8xl relative mb-8 w-full">
		<enhanced:img
			class="absolute top-0 left-0 h-full w-full object-cover object-center"
			src="$lib/assets/imgs/zerowaste.jpg?w=1920;1440;960"
			loading="eager"
			title="Photo by Rachel Showalter"
			alt="a compost bin, recycling bin, and trash bin in calpoly"
			sizes="(max-width: 1920x) 100vw"
			style:background-image={`url("${lqip_hero.lqip}")`}
			style:background-size="cover"
			style:font-size="0"
		/>
		<div class="relative bg-black/40 p-8 py-16 text-center text-white">
			<h1 class="flex flex-col items-center">
				<span class="scale-x-125 text-4xl font-extrabold md:text-6xl"
					>Sorting Tool</span
				>
			</h1>
		</div>
	</section>
	<section class="container w-full p-4 md:p-8">
		<h2 class="text-2xl font-bold text-center mb-6">Select a Category:</h2>
		<Tool />
		<p class="mt-8 prose max-w-none text-center">
			Sources: <a href="https://afd.calpoly.edu/sustainability/campus-action/zero-waste/what-goes-where" rel="external" target="_blank">What Goes Where? - Cal Poly</a>, <a href="https://www.iwma.com/recycling-guide" rel="external" target="_blank">Recycling Guide - SLO IWMA</a>, <a href="https://kompogas-slo.com/organic-waste/" rel="external" target="_blank">Organic Waste - Kompogas SLO</a>
		</p>
	</section>
</main>
