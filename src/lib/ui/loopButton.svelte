<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import { Howl } from 'howler';

	export const howls = writable<Record<string, { base: Howl; copy: Howl; isPlaying: boolean }>>({});
</script>

<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	import Button from './button.svelte';
	import Spinner from './spinner.svelte';

	type HowlSrc = string | Array<string>;

	export let name: string;
	export let src: HowlSrc;
	export let grow = false;
	export let loop = false;
	export let lock = false;
	export let disableOnLock = false;
	export let disabled = false;

	//

	let howl = createHowl(src);
	let howlCopy = createHowl(src);

	let isPlaying: boolean;
	$: isPlaying = name in $howls ? $howls[name].isPlaying : false;

	onMount(() => {
		$howls[name] = {
			base: howl,
			copy: howlCopy,
			isPlaying: false
		};
		return () => {
			delete $howls[name];
		};
	});

	function createHowl(src: HowlSrc) {
		return new Howl({
			src,
			preload: true,
			html5: true,
			loop,
			onstop: () => {
				$howls[name].isPlaying = false;
			},
			onend: () => {
				$howls[name].isPlaying = false;
			},
			onplay: () => {
				$howls[name].isPlaying = true;
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

	//

	const dispatch = createEventDispatcher();

	function click() {
		play();
		dispatch('click', {});
	}
</script>

<Button {grow} on:click={click} {lock} {disableOnLock} {disabled} on:release={stop}>
	<slot />
	{#if isPlaying}
		<div class="absolute right-4 top-4">
			<Spinner />
		</div>
	{/if}
</Button>
