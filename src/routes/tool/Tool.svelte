<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { Banana, Info, Recycle, Trash2 } from "@lucide/svelte";
    import groups, { images } from "./toolItems";
	import { SortLocation, type Item, type ToolGroup } from "./toolTypes";
	import { fly } from "svelte/transition";
    import * as Tooltip from "$lib/components/ui/tooltip";
	import { easeOut } from "motion";

    let selectedGroup = $state<ToolGroup|undefined>(undefined);

    let entries = $derived(selectedGroup !== undefined ? Object.entries(selectedGroup.items) : []);

    function onclick(group: ToolGroup) {
        if (selectedGroup === undefined) document.getElementById("compostable")?.scrollIntoView({ behavior: "smooth", block: "center"})
        selectedGroup = group;
    }
</script>

{#snippet sortedItem(item: Item, delay: number)}
    {#snippet inner()}
        <enhanced:img
            src={images[item.img]}
            alt="thumbnail for group"
            class="w-24 h-24 object-contain"
            style="font-size: 0;"
        />
        <div class="text-sm text-center">{item.name}</div>
        {#if item.note}<Info size={16} strokeWidth={3} class="absolute top-4 right-4" />{/if}
    {/snippet}
    <div in:fly={{ y: 32, opacity: 0, delay, easing: easeOut }} class="relative w-28 text-foreground flex flex-col items-center">
        {#if item.note}
            <Tooltip.Root>
                <Tooltip.Trigger>{@render inner()}</Tooltip.Trigger>
                <Tooltip.Content class="text-sm p-4">{item.note}</Tooltip.Content>
            </Tooltip.Root>
        {:else}
            {@render inner()}
        {/if}
    </div>
{/snippet}

<div class="grid grid-cols-1 md:grid-cols-3">
    <div class="md:col-span-3 flex flex-wrap gap-4 justify-center mb-8">
        {#each groups as group (group.name)}
            <Button variant="outline" class="w-fit h-fit block flex-col p-4 pb-0" disabled={selectedGroup?.name == group.name} onclick={() => onclick(group)}>
                <h4 class="font-bold text-xl">{group.name}</h4>
                <enhanced:img
                    src={images[group.img]}
                    alt="thumbnail for group"
                    class="w-32 h-32 object-contain"
                />
            </Button>
        {/each}
    </div>
    <div id="compostable" class="bg-green-300/20 h-fit m-4 p-4 pb-8 rounded-4xl transition-opacity delay-0 duration-500" style:opacity={selectedGroup ? 1 : 0}>
        <h4 class="flex gap-2 items-center text-xl font-bold justify-center mb-2"><Banana /> Compostable</h4>
        <div class="flex flex-wrap items-start justify-center gap-2">
            {#each entries.filter(i => i[1].loc == SortLocation.COMPOST) as [key, item], i (selectedGroup!.name+key)}
                {@render sortedItem(item, i * 50)}
            {:else}
                <div class="text-center p-4">None :(</div>
            {/each}
        </div>
    </div>
    <div id="recyclable" class="bg-blue-300/20 h-fit m-4 p-4 pb-8 rounded-4xl transition-opacity delay-250 duration-500" style:opacity={selectedGroup ? 1 : 0}>
        <h4 class="flex gap-2 items-center text-xl font-bold justify-center mb-2"><Recycle /> Recyclable</h4>
        <div class="flex flex-wrap items-start justify-center gap-2">
            {#each entries.filter(i => i[1].loc == SortLocation.RECYCLING) as [key, item], i (selectedGroup!.name+key)}
                {@render sortedItem(item, i * 50 + 100)}
            {:else}
                <div class="text-center p-4">None :(</div>
            {/each}
        </div>
    </div>
    <div id="trash" class="bg-black/20 h-fit m-4 p-4 pb-8 rounded-4xl transition-opacity delay-500 duration-500" style:opacity={selectedGroup ? 1 : 0}>
        <h4 class="flex gap-2 items-center text-xl font-bold justify-center mb-2"><Trash2 /> Trash</h4>
        <div class="flex flex-wrap items-start justify-center gap-2">
            {#each entries.filter(i => i[1].loc == SortLocation.TRASH) as [key, item], i (selectedGroup!.name+key)}
                {@render sortedItem(item, i * 50 + 200)}
            {:else}
                <div class="text-center p-4">None :(</div>
            {/each}
        </div>
    </div>
</div>