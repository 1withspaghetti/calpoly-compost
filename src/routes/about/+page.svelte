<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { CornerLeftDown, CornerRightUp } from '@lucide/svelte';
</script>

<Meta title="About" />

<Header />
<main class="flex flex-col items-center overflow-hidden pt-20 pb-32">
    <section class="max-w-8xl relative w-full">
        <enhanced:img
            class="absolute top-0 left-0 h-full w-full object-cover object-center"
            src="$lib/assets/imgs/about-calpoly-aerial.jpg?w=1600;1024;512"
            alt="ariel view of calpoly campus"
            sizes="(max-width: 1500px) 100vw"
        />
        <div class="relative bg-black/40 p-8 py-16 md:py-32 text-center text-white">
            <h1 class="flex flex-col items-center">
                <span class="mb-2 scale-x-125 text-4xl font-extrabold md:text-6xl">About Us</span>
            </h1>
        </div>
    </section>
    <section class="max-w-4xl w-full px-8 py-16">
        <h2 class="text-4xl font-extrabold mb-8">The Mission:</h2>
        <div class="relative mx-8 px-16 py-8">
            <p class="text-2xl">
                To <b class="text-3xl">educate</b> and <b class="text-3xl">advocate</b> for effective waste reduction via <b class="text-3xl">composting opportunities</b> on the Cal Poly campus
            </p>
            <CornerLeftDown strokeWidth={3} class="size-16 absolute top-0 left-0" />
            <CornerRightUp strokeWidth={3} class="size-16 absolute right-0 bottom-0" />
        </div>
    </section>
</main>
