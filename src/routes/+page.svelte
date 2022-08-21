<script lang="ts">
	import Sounds from './partials/sounds.svelte';
	import Timer from './partials/timer.svelte';

	import Button from '$lib/ui/button.svelte';

	let view: 'timer' | 'sounds' = 'sounds';

	function viewTimer() {
		view = 'timer';
	}

	function viewSounds() {
		view = 'sounds';
	}
</script>

<!-- Navbar -->

<div
	class="
    border-b-2 border-b-black px-6 py-4 pt-6 space-x-8 h-24
    flex flex-row flex-nowrap items-stretch
"
>
	<Button grow on:click={viewTimer}>Timer</Button>
	<Button grow on:click={viewSounds}>Sounds</Button>
</div>

<!-- Content -->

<div class="grow flex flex-col flex-nowrap" class:hidden={view != 'sounds'}>
	<Sounds />
</div>
<div class="grow flex flex-col flex-nowrap" class:hidden={view != 'timer'}>
	<Timer />
</div>
