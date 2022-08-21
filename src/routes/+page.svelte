<script lang="ts">
	import { writable } from 'svelte/store';

	import Sounds from './partials/sounds.svelte';
	import Timer from './partials/timer.svelte';

	import Tab from '$lib/ui/tab.svelte';
	import TabButton from '$lib/ui/tabButton.svelte';

	const Views = ['timer', 'sounds'] as const;
	type View = typeof Views[number];

	let currentView = writable<View>('sounds');

	function log() {
		console.log('Working');
	}
</script>

<!-- Navbar -->

<div
	class="
    border-b-2 border-b-black px-6 py-4 pt-6 space-x-8 h-24
    flex flex-row flex-nowrap items-stretch
"
>
	<TabButton current={currentView} name={Views[0]} grow>Timer</TabButton>
	<TabButton current={currentView} name={Views[1]} grow>Sounds</TabButton>
</div>

<!-- Content -->

<Tab name="sounds" current={currentView}>
	<Sounds />
</Tab>
<Tab name="timer" current={currentView}>
	<Timer />
</Tab>
