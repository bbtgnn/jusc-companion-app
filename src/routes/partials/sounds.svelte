<script lang="ts">
	import Button from '$lib/ui/button.svelte';
	import { assets } from '$app/paths';

	import LoopButton, { howls } from '$lib/ui/loopButton.svelte';

	// Loading tracks

	let papiSrc = [`${assets}/tracks/papi.mp3`];
	let mamacitaSrc = [`${assets}/tracks/mamacita.mp3`];
	let mamboSrc = [`${assets}/tracks/mambo.mp3`];

	// Is Papi playing ?

	let isPapiPlaying = false;

	function stopPapi() {
		$howls['papi'].base.stop();
		$howls['papi'].copy.stop();
	}

	$: isPapiPlaying = $howls['papi']?.isPlaying ? true : false;

	function stopMamacita() {
		$howls['mamacita'].base.stop();
		$howls['mamacita'].copy.stop();
	}
</script>

<!--  -->

{isPapiPlaying}

<div class="p-6 flex flex-col flex-nowrap items-stretch grow space-y-6">
	<div class="h-2" />

	<!-- Papi & related -->
	<LoopButton name="papi" grow src={papiSrc} on:click={stopMamacita}>Papi</LoopButton>
	<Button grow disabled>0</Button>
	<div class="grow shrink-0 flex flex-row flex-nowrap space-x-6">
		{!isPapiPlaying}
		<LoopButton name="mamacita" disabled={!isPapiPlaying} grow src={mamacitaSrc} on:click={stopPapi}
			>Mamacita</LoopButton
		>
		<Button grow disabled={!isPapiPlaying} on:click={stopPapi}>Stop</Button>
	</div>

	<div class="h-4" />

	<!-- Mambo salentino -->
	<LoopButton name="mambo" grow lock disableOnLock src={mamboSrc}>Mambo Salentino</LoopButton>

	<div class="h-2" />
</div>
