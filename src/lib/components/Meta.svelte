<script lang="ts" module>
	export const GLOBAL_NAME = "Cal Poly Compost"
</script>

<script lang="ts">
	import { page } from '$app/state';
	import { PUBLIC_ORIGIN } from '$env/static/public';

	type MetaProps = {
		title?: string;
		noTitleSuffix?: boolean;
		description?: string;
		image?: string;
		path?: string;
		author?: string;
	};

	let {
		title,
		noTitleSuffix = false,
		description,
		image,
		path = page.url.pathname,
		author
	}: MetaProps = $props();
</script>

<svelte:head>
	{#if title}
		<title>{title}{noTitleSuffix ? '' : ' | '+GLOBAL_NAME}</title>
		<meta property="og:title" content="{title}{noTitleSuffix ? '' : ' | '+GLOBAL_NAME}" />
		<meta name="twitter:title" content="{title}{noTitleSuffix ? '' : ' | '+GLOBAL_NAME}" />
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta name="twitter:description" content={description} />
	{/if}

	{#if author}
		<meta name="author" content={author} />
	{/if}

	{#if image}
		<meta property="og:image" content={image} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={image} />
	{/if}

	<meta property="og:type" content="website" />
	<meta property="og:url" content={new URL(path, PUBLIC_ORIGIN).href} />
</svelte:head>
