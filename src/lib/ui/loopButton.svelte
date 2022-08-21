<script lang="ts">
	import { Howl } from 'howler';
	import Button from './button.svelte';
	import Spinner from './spinner.svelte';

	type HowlSrc = string | Array<string>;

	export let src: HowlSrc;
	export let grow = false;
	export let loop = false;
	export let lock = false;
	export let disableOnLock = false;

	//

	let howl = createHowl(src);
	let howlCopy = createHowl(src);

	let isPlaying = false;

	function createHowl(src: HowlSrc) {
		return new Howl({
			src,
			preload: true,
			html5: true,
			loop,
			onstop: () => {
				isPlaying = false;
			},
			onend: () => {
				isPlaying = false;
			},
			onplay: () => {
				isPlaying = true;
			}
		});
	}

	//

	function play() {
		if (!howl.playing()) {
			howl.play();
			howlCopy.stop();
		} else if (!howlCopy.playing()) {
			howl.stop();
			howlCopy.play();
		}
	}

	function stop() {
		howl.stop();
		howlCopy.stop();
	}

	// function toggleState() {
	// 	console.log(howl.playing());
	// 	// if (lock) {
	// 	// 	stop();
	// 	// } else {
	// 	// 	play();
	// 	// }
	// }
</script>

<Button {grow} on:click={play} {lock} {disableOnLock} on:release={stop}>
	<slot />
	{#if isPlaying}
		<div class="absolute right-4 top-4">
			<Spinner />
		</div>
	{/if}
</Button>
