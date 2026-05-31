<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta title="Sorting Tool" />

<Header />
<main class="flex flex-col items-center overflow-hidden pt-20 pb-32">
    <section class="max-w-8xl relative w-full">
        <enhanced:img
            class="absolute top-0 left-0 h-full w-full object-cover object-center"
            src="$lib/assets/imgs/zerowaste.jpg?w=1920;1440;960"
            title="Photo by Rachel Showalter"
            alt="a compost bin, recycling bin, and trash bin in calpoly"
            sizes="(max-width: 1920x) 100vw"
        />
        <div class="relative bg-black/40 p-8 py-16 md:py-32 text-center text-white">
            <h1 class="flex flex-col items-center">
                <span class="mb-2 scale-x-125 text-4xl font-extrabold md:text-6xl">Sorting Tool</span>
            </h1>
        </div>
    </section>
    <section class="container w-full px-8 py-16">
        TODO
    </section>
</main>
