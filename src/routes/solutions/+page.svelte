<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import lqip_hero from '$lib/assets/imgs/sandie-clarke-q13Zq1Jufks-unsplash.jpg?lqip';
	import { Button } from '$lib/components/ui/button';
	import { inViewAnimate } from '$lib/components/actions/inView';
	import { Banknote, Link, Mail, Recycle, Split, Trash } from '@lucide/svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { toast } from 'svelte-sonner';

	async function copyText(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			toast.success(`"${text}" copied to clipboard`);
		} catch (err) {
			console.error('Failed to copy text: ', err);
			toast.error(`Failed to copy text: ${err}`);
		}
	}
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
				<span
					use:inViewAnimate={{ keyframes: { opacity: [0, 1] }, options: { delay: 0.3 } }}
					style="opacity: 0;"
					class="mb-2 scale-x-125 text-4xl font-extrabold md:text-6xl"
					>What can be done?</span
				>
			</h1>
		</div>
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<h2 id="1">1. Composting Effort and Education</h2>
		<p>
			<b>The first step starts with you!</b> Before Cal Poly can start composting again, the
			compost must not be as contaminated as before, meaning no more plastic or other items
			put into the wrong bin. This requires an <b>active effort, research, and thought</b> put into
			every meal or disposal. Lucky for you, we put together a tool with the most up-to-date information
			about the correct placement of on-campus meal items.
		</p>
		<div class="not-prose flex w-full items-center gap-4 overflow-hidden">
			<div
				use:inViewAnimate={{
					keyframes: { translateX: ['-100%', 0] },
					options: { delay: 0.3, duration: 2, ease: [0, 0.55, 0.45, 1] }
				}}
				class="h-0 w-full border"
			></div>
			<Button href="/tool" size="xl"><Recycle /> Sorting Tool</Button>
			<div
				use:inViewAnimate={{
					keyframes: { translateX: ['100%', 0] },
					options: { delay: 0.3, duration: 2, ease: [0, 0.55, 0.45, 1] }
				}}
				class="h-0 w-full border"
			></div>
		</div>
		<p>
			If you have the means, spreading this information will make it even more effective. The
			Cal Poly must come together to solve this issue with just a little extra effort from
			everyone.
		</p>
		<div class="flex justify-center gap-6">
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button
						onclick={() => copyText(PUBLIC_ORIGIN)}
						variant="ghost"
						size="icon"
						class="size-14"
					>
						<Link class="size-8" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>Copy Link</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button
						href={`mailto:?subject=${encodeURIComponent('Save Cal Poly Compost')}&body=${encodeURIComponent('Did you know nothing in the compost bins ends up getting composted? Learn more here: ' + PUBLIC_ORIGIN)}`}
						variant="ghost"
						size="icon"
						class="size-14"
					>
						<Mail class="size-8" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>Send Email</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button
						onclick={() =>
							copyText(PUBLIC_ORIGIN).then(
								() => (location.href = 'https://instagram.com')
							)}
						variant="ghost"
						size="icon"
						class="size-14"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							class="size-8"
							><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path
								fill="currentColor"
								d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
							/></svg
						>
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>Copy Link + Open Instagram</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</section>
	<section class="prose prose-lg w-full max-w-4xl p-8">
		<h2 id="2">2. Cal Poly’s Changes</h2>
		<p>
			Once the post-consumer compost is clean enough, it’s able to be one-again combined with
			the pre-consumer compost from and <a
				href="https://afd.calpoly.edu/sustainability"
				rel="external"
				target="_blank">sent</a
			>
			to the
			<a href="https://kompogas-slo.com/organic-waste/" rel="external" target="_blank"
				>Hitachi-Zozen Anaerobic Digester</a
			> to produce clean energy and compost for the community, while diverting methane-producing
			waste from landfills. When the time is right, we must call for Cal Poly to take this action.
			But unfortunately, this is a dichotomy where either all the compost is effectively taken care
			of, or none of it is.
		</p>
		<div class="flex flex-col items-center gap-2 md:flex-row-reverse">
			<div
				use:inViewAnimate={{
					keyframes: { opacity: [0, 1] }
				}}
				style="opacity: 0;"
			>
				<Split class="mx-8 size-16 shrink-0" />
			</div>
			<p>
				<i>But it doesn’t have to be that way.</i> Even starting now, we can petition Cal
				Poly to
				<b>divert resources to provide on-campus or university funded sorting</b> to guarantee
				that all the waste that can be composted, does get composted.
			</p>
		</div>
		<div class="flex flex-col items-center gap-2 md:flex-row">
			<div
				use:inViewAnimate={{
					keyframes: { opacity: [0, 1] },
					options: { delay: 0.3 }
				}}
				style="opacity: 0;"
			>
				<Banknote class="mx-8 size-16 shrink-0" />
			</div>
			<p>
				There is a major drawback to this idea. Sorting waste is difficult and expensive,
				there is a reason why compost plants <a
					href="https://mustangnews.net/compostingv2/"
					rel="external"
					target="_blank">doesn’t have the economical ability</a
				> to do it themselves. This solution will put a band-aid on the compost wound, but healing
				ourselves and putting the active effort in to properly sort will save money that may eventually
				come from our tuition.
			</p>
		</div>
	</section>
	<section class="relative prose prose-lg w-full max-w-4xl p-8">
		<h2 id="3">3. More bins for everybody</h2>
		<div class="absolute top-8 right-4 flex select-none md:right-8">
			<div
				style="transform: rotate(-20deg); opacity: 0;"
				use:inViewAnimate={{ keyframes: { opacity: [0, 1] }, options: { delay: 0 } }}
			>
				<Trash size={48} />
			</div>
			<div
				style="transform: rotate(5deg) translateY(-8px); opacity: 0;"
				use:inViewAnimate={{ keyframes: { opacity: [0, 1] }, options: { delay: 0.3 } }}
			>
				<Trash size={48} />
			</div>
			<div
				style="transform: rotate(30deg) translateY(12px); opacity: 0;"
				use:inViewAnimate={{ keyframes: { opacity: [0, 1] }, options: { delay: 0.6 } }}
			>
				<Trash size={48} />
			</div>
		</div>
		<p>
			Once we’ve achieved effective post-consumer composting, why stop there? Spread the
			ability to compost to second year housing, campus market, and anywhere where food scraps
			or other compostable waste could be disposed of. The more waste that is reused and
			composted, the better.
		</p>
		<p>
			This will also require a push for these services to be provided by the university, but <a
				href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9575438/"
				rel="external"
				target="_blank">hardly an additional cost</a
			>
			once the system has been established. They’ve
			<a
				href="https://www.instagram.com/p/C2A5zFPyB9l/?img_index=1"
				rel="external"
				target="_blank">already provided</a
			> some of these services in the past, we just need to bring them back.
		</p>
	</section>
	<section class="w-full max-w-4xl p-8 pb-0">
		<div
			use:inViewAnimate={{ keyframes: { opacity: [0, 1] }, options: { duration: 1 } }}
			class="flex w-full justify-center"
		>
			<enhanced:img
				src="$lib/assets/imgs/sprout.png?w=512;256"
				alt="sprout or seedling vector art"
				class="not-prose max-w-24 shrink-0 md:max-w-32"
			/>
		</div>
	</section>
</main>
