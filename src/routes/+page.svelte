<script lang="ts">
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
        <div class="relative bg-black/40 p-8 py-16 md:py-32 text-center text-white">
            <h1 class="flex flex-col items-center">
                <span class="text-xl font-bold md:text-3xl">Cal Poly has a</span>
                <span class="mb-2 scale-x-125 text-4xl font-extrabold md:text-6xl">Compost Problem...</span>
            </h1>
        </div>
    </section>
    <section class="container w-full px-8 py-16">
        TODO
    </section>
</main>
