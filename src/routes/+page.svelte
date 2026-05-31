<script lang="ts">
	import { inViewAnimate } from '$lib/components/actions/inView';
	import Header from '$lib/components/Header.svelte';
	import Meta, { GLOBAL_NAME } from '$lib/components/Meta.svelte';
</script>

<Meta noTitleSuffix title={GLOBAL_NAME} />

<Header />
<main class="flex flex-col items-center overflow-hidden pt-20 pb-32">
	<section class="max-w-8xl relative w-full">
		<enhanced:img
			class="absolute top-0 left-0 h-full w-full object-cover object-center"
			src="$lib/assets/imgs/student_composting.jpg?w=1500;1024;512"
			alt="student throwing a napkin into a compost bin"
			sizes="(max-width: 1500px) 100vw"
		/>
		<div class="relative bg-black/40 p-8 py-16 text-center text-white md:py-32">
			<h1 class="flex flex-col items-center">
				<div class="text-xl font-bold md:text-3xl">Cal Poly has a</div>
				<div class="flex md:scale-x-125 text-4xl font-extrabold md:text-6xl">
					<div
						use:inViewAnimate={{
							keyframes: { translateX: [-50, 0], opacity: [0, 1] },
							options: { duration: 0.3, ease: 'easeOut' }
						}}
						style="opacity: 0;"
					>
						Compost&nbsp;
					</div>
					<div
						use:inViewAnimate={{
							keyframes: { translateX: [50, 0], opacity: [0, 1] },
							options: { delay: 0.3, duration: 0.3, ease: 'easeOut' }
						}}
						style="opacity: 0;"
					>
						Problem...
					</div>
				</div>
			</h1>
		</div>
	</section>
	<section class="w-full max-w-4xl px-8 py-16">
		<div>
			<h2 class="text-3xl font-extrabold">1: Where are all those compost bins?</h2>
			<p>TODO</p>
		</div>
	</section>
</main>
