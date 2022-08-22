<script lang="ts">
	import Button from '$lib/ui/button.svelte';
	import { assets } from '$app/paths';

	import LoopButton, { howls, stopHowl } from '$lib/ui/loopButton.svelte';

	//

	const tracks = {
		papi: {
			id: 'papi',
			src: [`${assets}/tracks/papi.mp3`]
		},
		mamacita: {
			id: 'mamacita',
			src: [`${assets}/tracks/mamacita.mp3`]
		},
		mambo: {
			id: 'mambo',
			src: [`${assets}/tracks/mambo.mp3`]
		}
	};

	//

	let isPapiPlaying: boolean;
	$: isPapiPlaying = $howls[tracks.papi.id]?.isPlaying;

	function stopPapi() {
		stopHowl($howls[tracks.papi.id]);
	}

	function stopMamacita() {
		stopHowl($howls[tracks.mamacita.id]);
	}
</script>

<!--  -->

<div class="p-6 flex flex-col flex-nowrap items-stretch grow space-y-6">
	<div class="h-1" />

	<!-- Papi & related -->
	<LoopButton name="papi" src={tracks.papi.src} on:click={stopMamacita} grow
		>Papi</LoopButton
	>
	<!-- <LoopButton name="count" src={papiSrc} disabled grow>0</LoopButton> -->

	<div class="grow shrink-0 flex flex-row flex-nowrap space-x-6">
		<LoopButton
			name="mamacita"
			disabled={!isPapiPlaying}
			grow
			src={tracks.mamacita.src}
			on:click={stopPapi}>Mamacita</LoopButton
		>
		<Button grow disabled={!isPapiPlaying} on:click={stopPapi}>Stop</Button>
	</div>

	<div class="h-3" />

	<!-- Mambo salentino -->
	<LoopButton name="mambo" grow lock disableOnLock src={tracks.mambo.src}
		>Mambo Salentino</LoopButton
	>

	<div class="h-1" />
</div>
