<script lang="ts">
	import { fade } from 'svelte/transition';
	import './layout.css';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

{#key $page.url.pathname}
	<div in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
		{@render children()} 
	</div>
{/key}
