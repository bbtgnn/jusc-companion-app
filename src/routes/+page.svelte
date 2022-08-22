<script lang="ts">
	import { writable } from 'svelte/store';
	import type { SvelteComponent } from 'svelte';

	import Sounds from './partials/sounds.svelte';
	import Timer from './partials/timer.svelte';
	import Special from './partials/special.svelte';

	import Tab from '$lib/ui/tab.svelte';
	import TabButton from '$lib/ui/tabButton.svelte';

	interface View {
		id: string;
		label: string;
		component: typeof SvelteComponent;
	}

	const views: Array<View> = [
		{ id: 'sounds', label: 'Sounds', component: Sounds },
		{ id: 'timer', label: 'Timer', component: Timer },
		{ id: 'special', label: '⛔', component: Special }
	];

	let currentView = writable<string>(views[0].id);
</script>

<!-- Navbar -->

<div
	class="
    bg-gray-300 pl-6 pr-7 pb-5 pt-6 space-x-8 h-24
    flex flex-row flex-nowrap items-stretch
"
>
	{#each views as view}
		{#if view.id != 'special'}
			<TabButton name={view.id} current={currentView} grow>
				{view.label}
			</TabButton>
		{:else}
			<TabButton name={view.id} current={currentView}>
				<div class="px-3">
					{view.label}
				</div>
			</TabButton>
		{/if}
	{/each}
</div>

<!-- Content -->

{#each views as view}
	<Tab name={view.id} current={currentView}>
		<svelte:component this={view.component} />
	</Tab>
{/each}
