<script lang="ts">
	import Button from '$lib/ui/button.svelte';
	import { Howl } from 'howler';
	import { assets } from '$app/paths';

	import LoopButton from '$lib/ui/loopButton.svelte';

	//

	// function playMamacita() {
	// 	if (mamacita) {
	// 		mamacita.play();
	// 		stopPapi();
	// 	}
	// }

	// function playMambo() {
	// 	if (mambo) {
	// 		mambo.play();
	// 	}
	// }

	// function playPapi() {
	// 	if (papiA && papiB && mamacita) {
	// 		mamacita.stop();
	// 		if (!papiA.playing()) {
	// 			papiA.play();
	// 			papiB.stop();
	// 		} else if (!papiB.playing()) {
	// 			papiA.stop();
	// 			papiB.play();
	// 		}
	// 		isPapiPlaying = true;
	// 	}
	// }

	// function stopPapi() {
	// 	if (papiA && papiB) {
	// 		papiB.stop();
	// 		papiA.stop();
	// 		isPapiPlaying = false;
	// 	}
	// }

	// function seekMambo() {
	// 	console.log(mambo.seek() / mambo.duration());
	// }

	// let progress = 0;

	// function step() {
	// 	const seek = mambo.seek() || 0;
	// 	progress = (seek / mambo.duration()) * 100 || 0;
	// 	if (mambo.playing()) {
	// 		requestAnimationFrame(step);
	// 	}
	// }

	// Loading tracks

	let mamacita: Howl | null = null;
	let mambo: Howl | null = null;
	let papi: Howl | null = null;

	let isPapiPlaying = false;

	function createHowl(src: string | Array<string>) {
		return new Howl({
			src,
			preload: true,
			html5: true
		});
	}

	let papiSrc = [`${assets}/tracks/papi.mp3`];
	let mamacitaSrc = [`${assets}/tracks/mamacita.mp3`];
	let mamboSrc = [`${assets}/tracks/mambo.mp3`];

	// Loading view

	let visible = false;

	function init() {
		visible = true;
	}

	function press() {
		console.log('pressed');
	}
	function release() {
		console.log('release');
	}

	function stopPapi() {
		console.log('stop');
	}
</script>

<!-- {#if !visible}
	<div class="p-6 flex flex-col flex-nowrap items-stretch grow space-y-6">
		<Button grow on:click={init}>Start</Button>
	</div>
{:else} -->
<div class="p-6 flex flex-col flex-nowrap items-stretch grow space-y-6">
	<div class="h-2" />
	<LoopButton grow src={papiSrc}>Papi</LoopButton>
	<!-- {#if papi}
		{/if} -->
	<Button grow disabled>0</Button>
	<div class="grow shrink-0 flex flex-row flex-nowrap space-x-6">
		<LoopButton grow src={mamacitaSrc}>Mamacita</LoopButton>
		<Button grow disabled={!isPapiPlaying} on:click={stopPapi}>Stop</Button>
	</div>
	<div class="h-4" />
	<LoopButton grow lock disableOnLock src={mamboSrc}>Mambo Salentino</LoopButton>
	<div class="h-2" />
</div>
<!-- {/if} -->
