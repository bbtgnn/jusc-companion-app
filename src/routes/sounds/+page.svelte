<script lang="ts">
	import Button from '$lib/ui/button.svelte';
	import { Howl, Howler } from 'howler';
	import { assets } from '$app/paths';

	export let count = 0;

	function playMambo() {
		mambo.play();
	}

	function playPapi() {
		papi.play();
	}

	function seekMambo() {
		console.log(mambo.seek() / mambo.duration());
	}

	let progress = 0;

	function step() {
		const seek = mambo.seek() || 0;
		progress = (seek / mambo.duration()) * 100 || 0;
		if (mambo.playing()) {
			requestAnimationFrame(step);
		}
	}

	const mambo = new Howl({
		src: [`${assets}/tracks/mambo.mp3`],
		onplay: function () {
			requestAnimationFrame(step);
		}
	});

	const papi = new Howl({
		src: [`${assets}/tracks/papi.mp3`]
		// onplay: function () {
		// 	requestAnimationFrame(step);
		// }
	});

	let papiClickable = true;

	function update() {
		papiClickable = false;
	}
</script>

<div class="p-6 flex flex-col flex-nowrap items-stretch grow space-y-6">
	<Button grow lock on:click={playPapi}>Papi</Button>

	<Button grow disabled>{count}</Button>
	<div class="grow shrink-0 flex flex-row flex-nowrap space-x-6">
		<Button grow disabled>Mamacita</Button>
		<Button grow lock disabled>Stop</Button>
	</div>
	<hr class="border-t-2 border-t-black" />
	<Button grow lock on:click={playMambo}>Mambo Salentino</Button>
</div>
