<script lang="ts">
	import { inViewAnimate } from '$lib/components/actions/inView';
	import Header from '$lib/components/Header.svelte';
	import Meta, { GLOBAL_NAME } from '$lib/components/Meta.svelte';
	import { Earth, PiggyBank, Trash2 } from '@lucide/svelte';
	import lqip_hero from '$lib/assets/imgs/student_composting.jpg?lqip';
	import { Button } from '$lib/components/ui/button';
	import WasteStreamVisualization from './WasteStreamVisualization.svelte';
</script>

<Meta noTitleSuffix title={GLOBAL_NAME} />

<Header />
<main class="flex flex-col items-center overflow-hidden pt-20 pb-32">
	<section class="max-w-8xl relative mb-8 w-full">
		<enhanced:img
			class="absolute top-0 left-0 h-full w-full object-cover object-center"
			src="$lib/assets/imgs/student_composting.jpg?w=1500;1024;512"
			loading="eager"
			alt="student throwing a napkin into a compost bin"
			sizes="(max-width: 1500px) 100vw"
			style:background-image={`url("${lqip_hero.lqip}")`}
			style:background-size="cover"
			style:font-size="0"
		/>
		<div class="relative bg-black/40 p-8 py-16 text-center text-white md:py-48">
			<h1 class="flex flex-col items-center">
				<div class="text-xl font-bold md:text-3xl">Cal Poly has a</div>
				<div class="flex text-4xl font-extrabold md:scale-x-125 md:text-6xl">
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
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<h2>What's so special about compost?</h2>
		<div class="flex flex-col items-center gap-4 md:flex-row">
			<div use:inViewAnimate={{ keyframes: { opacity: [0, 1] } }} style="opacity: 0;">
				<Trash2 class="mx-16 size-16 shrink-0" />
			</div>
			<p class="col-span-2">
				The ability to compost <a
					href="https://extension.illinois.edu/blogs/everyday-environment/2024-10-17-reduce-methane-generation-composting"
					rel="external"
					target="_blank">diverts</a
				>
				waste away from landfills, where the organics rot and release large amounts of methane
				into the atmosphere; a greenhouse gas
				<a href="https://www.epa.gov/gmi/importance-methane" rel="external" target="_blank"
					>28 times</a
				> as potent as Co2.
			</p>
		</div>
		<div class="flex flex-col items-center gap-4 md:flex-row-reverse">
			<div
				use:inViewAnimate={{
					keyframes: { opacity: [0, 1] },
					options: { delay: 0.3 }
				}}
				style="opacity: 0;"
			>
				<PiggyBank class="mx-16 size-16 shrink-0" />
			</div>
			<p class="col-span-2">
				When used correctly, composting can <a
					href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9575438/"
					rel="external"
					target="_blank">often be cheaper</a
				> than sending waste to landfills, both for Cal Poly and hence the students.
			</p>
		</div>
		<div class="flex flex-col items-center gap-4 md:flex-row">
			<div
				use:inViewAnimate={{
					keyframes: { opacity: [0, 1] },
					options: { delay: 0.6 }
				}}
				style="opacity: 0;"
			>
				<Earth class="mx-16 size-16 shrink-0" />
			</div>
			<p class="col-span-2">
				And among many more benefits, compost <a
					href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9575438/"
					rel="external"
					target="_blank">helps</a
				> to save the diminishing topsoil health in the United States caused by large scale farming
				practices. Healthier soil, healthier food.
			</p>
		</div>
	</section>
	<section class="relative prose prose-lg w-full max-w-4xl p-8">
		<h2 class="pr-20">So, where are the compost bins?</h2>
		<div class="absolute top-8 right-4 flex text-6xl font-extrabold select-none md:right-8">
			<div
				style="transform: rotate(-20deg); opacity: 0;"
				use:inViewAnimate={{ keyframes: { opacity: [0, 1] }, options: { delay: 0 } }}
			>
				?
			</div>
			<div
				style="transform: rotate(5deg) translateY(-8px); opacity: 0;"
				use:inViewAnimate={{ keyframes: { opacity: [0, 1] }, options: { delay: 0.3 } }}
			>
				?
			</div>
			<div
				style="transform: rotate(30deg) translateY(12px); opacity: 0;"
				use:inViewAnimate={{ keyframes: { opacity: [0, 1] }, options: { delay: 0.6 } }}
			>
				?
			</div>
		</div>
		<div class="flex flex-col items-center gap-8 md:flex-row">
			<enhanced:img
				src="$lib/assets/imgs/where_are_the_bins.jpg?w=1024;512"
				alt="campus marketplace with an outline of where a compost bin would be"
				class="block max-w-64 shrink-0"
				use:inViewAnimate={{ keyframes: { opacity: [0, 1] } }}
				style="opacity: 0;"
			/>
			<div>
				<p>
					Ever had a meal at Campus Market? What about food trucks? You may have noticed
					that, although some of your waste can certainly be composted, there's nowhere to
					put it! The trash bins in the area are overflowing with content being sent to
					the landfill.
				</p>
				<p>
					Cal Poly does contain compost bins in its two major dining areas, 1901 and Vista
					Grande, but those are far from the only locations students enjoy their food.
				</p>
			</div>
		</div>
		<p>
			Even more surprisingly, continuing students in PCV or Cerro Visto Apartments <a
				href="https://www.instagram.com/p/C2A5zFPyB9l/?img_index=1"
				rel="external"
				target="_blank">don’t have access</a
			> to compost either! All those eggshells, banana peels, and way more are forced straight into
			the garbage.
		</p>
		<h4 class="mb-0">Cal Poly fails to live up to California's relative waste disposal:</h4>
		<WasteStreamVisualization />
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<h2>Where does the existing compost go?</h2>
		<div class="flex flex-col gap-8 md:flex-row-reverse">
			<enhanced:img
				src="$lib/assets/imgs/compostcontamination.jpg?w=615;512;256"
				alt="a pile of compost with plastic mixed in"
				class="not-prose max-w-64 shrink-0"
				use:inViewAnimate={{ keyframes: { opacity: [0, 1] } }}
				style="opacity: 0;"
			/>
			<div class="w-fit">
				<p>
					Over a decade ago, Cal Poly <a
						href="https://mustangnews.net/compostingv2/"
						rel="external"
						target="_blank">stopped sending</a
					>
					its post-consumer waste to facilities. That means, even if there are more compost
					bins, they still go <b>straight to landfill</b> regardless.
				</p>
				<p>
					The main issue? <b>Contamination</b>.
				</p>
				<p>
					Plastic and other contaminates in the wrong bin plague all post-consumer
					composting programs; it's the same reason Cal Poly <a
						href="https://www.instagram.com/p/C2A5zFPyB9l/?img_index=2"
						rel="external"
						target="_blank">removed it’s PCV compost dumpster</a
					> in 2023. Too many misplaced substances prevented the rest of it from being properly
					handled, and increased cost for everybody.
				</p>
			</div>
		</div>
	</section>
	<section class="w-full max-w-4xl p-8">
		<div class="flex w-full items-center gap-4 overflow-hidden">
			<div
				use:inViewAnimate={{
					keyframes: { translateX: ['-100%', 0] },
					options: { delay: 0.3, duration: 2, ease: [0, 0.55, 0.45, 1] }
				}}
				class="h-0 w-full border"
			></div>
			<Button href="/solutions" size="xl">What <i>you</i> can do</Button>
			<div
				use:inViewAnimate={{
					keyframes: { translateX: ['100%', 0] },
					options: { delay: 0.3, duration: 2, ease: [0, 0.55, 0.45, 1] }
				}}
				class="h-0 w-full border"
			></div>
		</div>
	</section>
</main>
