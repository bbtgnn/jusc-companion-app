<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import { Howl } from 'howler';

	export type HowlSrc = string | Array<string>;

	export interface HowlRecord {
		base: Howl;
		copy: Howl;
		isPlaying: boolean;
	}

	export type HowlRecords = Record<string, HowlRecord>;

	export const howls = writable<HowlRecords>({});

	export function stopHowl(howl: HowlRecord) {
		howl.base.stop();
		howl.copy.stop();
	}
</script>

<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	import Button from './button.svelte';
	import Spinner from './spinner.svelte';

	//

	export let name: string;

	export let src: HowlSrc;
	export let loop = false;

	export let grow = false;
	export let lock = false;
	export let disableOnLock = false;

	export let disabled = false;

	//

	let howl: Howl;
	let howlCopy: Howl;

	onMount(() => {
		// Creating howls
		howl = createHowl(src);
		howlCopy = createHowl(src);

		// Storing in store
		$howls[name] = {
			base: howl,
			copy: howlCopy,
			isPlaying: false
		};

		// On destroy
		return () => {
			delete $howls[name];
		};
	});

	//

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
			howlCopy.stop();
			howl.play();
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

	//

	let isPlaying: boolean;
	$: isPlaying = $howls[name]?.isPlaying;
</script>

<Button
	{grow}
	on:click={click}
	{lock}
	{disableOnLock}
	bind:disabled
	on:release={stop}
>
	<slot />
	<!--  -->
	{#if isPlaying}
		<div class="absolute right-4 top-4">
			<Spinner />
		</div>
	{/if}
</Button>
