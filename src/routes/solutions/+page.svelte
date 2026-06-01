<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import lqip_hero from '$lib/assets/imgs/sandie-clarke-q13Zq1Jufks-unsplash.jpg?lqip';
	import { Button } from '$lib/components/ui/button';
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
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<h2 id="1">1. Composting Effort and Education</h2>
		<p>
			<b>The first step starts with you!</b> Before Cal Poly can start composting again, the compost
			must not be as contaminated as before, meaning no more plastic or other items put into the
			wrong bin. This requires an <b>active effort, research, and thought</b> put into every meal or disposal.
			Lucky for you, we put together a tool with the most up-to-date information about the correct placement
			of on-campus meal items.
		</p>
		<div class="flex w-full items-center gap-4 not-prose">
			<div class="h-0 w-full border"></div>
			<Button href="/tool" size="xl">Sorting Tool</Button>
			<div class="h-0 w-full border"></div>
		</div>
		<p>
			If you have the means, spreading this information will make it even more effective. The Cal
			Poly must come together to solve this issue with just a little extra effort from everyone.
		</p>
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<h2 id="2">2. Cal Poly’s Changes</h2>
		<p>
			Once the post-consumer compost is clean enough, it’s able to be one-again combined with the
			pre-consumer compost from and <a
				href="https://afd.calpoly.edu/sustainability"
				rel="external"
				target="_blank">sent</a
			>
			to the
			<a href="https://kompogas-slo.com/organic-waste/" rel="external" target="_blank"
				>Hitachi-Zozen Anaerobic Digester</a
			> to produce clean energy and compost for the community, while diverting methane-producing waste
			from landfills. Once we believe that our compost is finally clean enough, we must call for Cal Poly
			to reconsider and take this action. But unfortunately, this is a dichotomy where either all the
			compost is effectively taken care of, or none of it is.
		</p>
		<p>
			<i>But it doesn’t have to be that way.</i> Even starting now, we can petition Cal Poly to
			<b>divert resources to provide on-campus or university funded sorting</b> to guarantee that all
			the waste that can be composted, does get composted.
		</p>
		<p>
			There is a major drawback to this idea. Sorting waste is difficult and expensive, there is a
			reason why compost plants <a
				href="https://mustangnews.net/compostingv2/"
				rel="external"
				target="_blank">doesn’t have the economical ability</a
			> to do it themselves. This solution will put a band-aid on the compost wound, but healing ourselves
			and putting the active effort in to properly sort will save money that may eventually come from
			our tuition.
		</p>
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<h2 id="3">3. More bins for everybody</h2>
		<p>
			Once we’ve achieved effective post-consumer composting, why stop there? Spread the ability to
			compost to second year housing, campus market, and anywhere where food scraps or other
			compostable waste could be disposed of. The more waste that is reused and composted, the
			better.
		</p>
		<p>
			This will also require a push for these services to be provided by the university, but <a
				href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9575438/"
				rel="external"
				target="_blank">hardly an additional cost</a
			>
			once the system has been established. They’ve
			<a href="https://www.instagram.com/p/C2A5zFPyB9l/?img_index=1" rel="external" target="_blank"
				>already provided</a
			> some of these services in the past, we just need to bring them back.
		</p>
	</section>
</main>
