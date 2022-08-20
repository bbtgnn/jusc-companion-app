<script lang="ts">
	import Button from '$lib/ui/button.svelte';
	import { Howl, Howler } from 'howler';
	import { assets } from '$app/paths';

	export let count = 0;

	//

	let mambo: Howl | null = null;
	let papi: Howl | null = null;

	function playMambo() {
		if (mambo) {
			mambo.play();
		}
	}

	function playPapi() {
		if (papi) {
			papi.play();
		}
	}

	function stopPapi() {
		if (papi) {
			papi.stop();
		}
	}

	//

	function createAudio() {
		mambo = new Howl({
			src: [`${assets}/tracks/mambo.mp3`],
			html5: true
			// onplay: function () {
			// 	requestAnimationFrame(step);
			// }
		});

		papi = new Howl({
			src: [`${assets}/tracks/papi.mp3`],
			html5: true
			// onplay: function () {
			// 	requestAnimationFrame(step);
			// }
		});
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
		<Button grow lock on:click={playPapi}>Papi</Button>

		<Button grow disabled>{count}</Button>
		<div class="grow shrink-0 flex flex-row flex-nowrap space-x-6">
			<Button grow disabled>Mamacita</Button>
			<Button grow on:click={stopPapi}>Stop</Button>
		</div>
		<hr class="border-t-2 border-t-black" />
		<Button grow lock on:click={playMambo}>Mambo Salentino</Button>
	</div>
{/if}
