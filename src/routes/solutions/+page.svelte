<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import lqip_hero from '$lib/assets/imgs/sandie-clarke-q13Zq1Jufks-unsplash.jpg?lqip';
</script>

<Meta title="Solutions" />

<Header />
<main class="flex flex-col items-center overflow-hidden pt-20 pb-32">
	<section class="max-w-8xl relative mb-8 w-full">
		<enhanced:img
			class="absolute top-0 left-0 h-full w-full object-cover object-center"
			src="$lib/assets/imgs/sandie-clarke-q13Zq1Jufks-unsplash.jpg?w=1920;1440;960"
			loading="eager"
			title="Photo by Sandie Clarke on Unsplash"
			alt="person holding brown dirt in a compost bin"
			sizes="(max-width: 1920x) 100vw"
			style:background-image={`url("${lqip_hero.lqip}")`}
			style:background-size="cover"
			style:font-size="0"
		/>
		<div class="relative bg-black/40 p-8 py-16 text-center text-white md:py-32">
			<h1 class="flex flex-col items-center">
				<span class="mb-2 scale-x-125 text-4xl font-extrabold md:text-6xl">What can be done?</span>
			</h1>
		</div>
	</section>
	<section class="container w-full p-8">TODO</section>
</main>
