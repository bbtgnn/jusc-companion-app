<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import type { HowlSrc } from './loopButton.svelte';
	import { Howl } from 'howler';

	import Button from './button.svelte';
	import Spinner from './spinner.svelte';

	//

	export let name: string;

	export let srcSet: Array<HowlSrc>;

	export let grow = false;
	export let disabled = false;

	//

	name;

	// Check that srcset length is > 2

	let index: number;
	let howlCurrent: Howl | null;
	let howlNext: Howl;

	function setup() {
		// Creating howls
		index = 0;
		howlCurrent = null;
		howlNext = createHowl(srcSet[0]);
	}

	onMount(() => {
		setup();

		// // Storing in store
		// $howls[name] = {
		// 	base: howl,
		// 	copy: howlCopy,
		// 	isPlaying: false
		// };

		// // On destroy
		// return () => {
		// 	delete $howls[name];
		// };
	});

	//

	function createHowl(src: HowlSrc) {
		return new Howl({
			src,
			preload: true,
			html5: true
			// onstop: () => {
			// 	$howls[name].isPlaying = false;
			// },
			// onend: () => {
			// 	$howls[name].isPlaying = false;
			// },
			// onplay: () => {
			// 	$howls[name].isPlaying = true;
			// }
		});
	}

	//

	function play() {
		if (howlCurrent) {
			howlCurrent.stop();
		}
		howlNext.play();

		index++;

		howlCurrent = howlNext;
		howlNext = createHowl(srcSet[index]);
	}

	//

	const dispatch = createEventDispatcher();

	function click() {
		play();
		dispatch('click', {});
	}

	//

	$: if (disabled) {
		setup();
		howlNext.stop();
		howlCurrent?.stop();
	}

	//

	// let isPlaying: boolean;
	// $: isPlaying = $howls[name]?.isPlaying;
</script>

<!--  -->

<Button {grow} on:click={click} bind:disabled>
	<slot {index} />
	<!--  -->
	<!-- {#if isPlaying}
		<div class="absolute right-4 top-4">
			<Spinner />
		</div>
	{/if} -->
</Button>
