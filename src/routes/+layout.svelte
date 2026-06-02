<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { Toaster } from '$lib/components/ui/sonner';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { ModeWatcher } from 'mode-watcher';
	import './layout.css';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<ModeWatcher track={false} defaultMode="light" />
<Tooltip.Provider>
	<Toaster />
	{@render children()}
</Tooltip.Provider>
