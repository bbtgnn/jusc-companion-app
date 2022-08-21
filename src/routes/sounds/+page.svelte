<script lang="ts">
	import Button from '$lib/ui/button.svelte';
	import { Howl, Howler } from 'howler';
	import { assets } from '$app/paths';

	export let count = 0;

	//

	let mamacita: Howl | null = null;

	function playMamacita() {
		if (mamacita) {
			mamacita.play();
			stopPapi();
		}
	}

	let mambo: Howl | null = null;

	function playMambo() {
		if (mambo) {
			mambo.play();
		}
	}

	let papiA: Howl | null = null;
	let papiB: Howl | null = null;

	let isPapiPlaying = false;

	function playPapi() {
		if (papiA && papiB) {
			if (!papiA.playing()) {
				papiA.play();
				papiB.stop();
			} else if (!papiB.playing()) {
				papiA.stop();
				papiB.play();
			}
			isPapiPlaying = true;
		}
	}

	function stopPapi() {
		if (papiA && papiB) {
			papiB.stop();
			papiA.stop();
			isPapiPlaying = false;
		}
	}

	//

	function createHowl(src: string | Array<string>) {
		return new Howl({
			src,
			preload: true,
			html5: true
		});
	}

	function createAudio() {
		mambo = createHowl([`${assets}/tracks/mambo.mp3`]);
		papiA = createHowl([`${assets}/tracks/papi.mp3`]);
		papiB = createHowl([`${assets}/tracks/papi.mp3`]);
		mamacita = createHowl([`${assets}/tracks/mamacita.mp3`]);
	}

	//

	let visible = false;

	function init() {
		createAudio();
		visible = true;
	}

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
</script>

{#if !visible}
	<div class="p-6 flex flex-col flex-nowrap items-stretch grow space-y-6">
		<Button grow on:click={init}>Start</Button>
	</div>
{:else}
	<div class="p-6 flex flex-col flex-nowrap items-stretch grow space-y-6">
		<div class="h-2" />
		<Button grow on:click={playPapi}>Papi</Button>
		<Button grow disabled>{count}</Button>
		<div class="grow shrink-0 flex flex-row flex-nowrap space-x-6">
			<Button grow disabled={!isPapiPlaying} on:click={playMamacita}>Mamacita</Button>
			<Button grow disabled={!isPapiPlaying} on:click={stopPapi}>Stop</Button>
		</div>
		<div class="h-4" />
		<Button grow lock on:click={playMambo}>Mambo Salentino</Button>
		<div class="h-2" />
	</div>
{/if}
