<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { Timer } from '$lib/classes/timer';
	import Button from './button.svelte';

	//

	export let duration: number;
	export let increase = 1000;
	export let cards: number;
	export let disabled: boolean = false;

	//

	let currentTime = duration;
	let locked = false;
	let completed = false;

	//

	const dispatch = createEventDispatcher<{
		end: null;
		click: null;
	}>();

	//

	let timer = new Timer(
		duration,
		increase,
		() => {
			currentTime = duration;
			completed = true;
			disabled = true;
			dispatch('end');
		},
		(count) => {
			currentTime = duration - count;
		}
	);

	function start() {
		timer.start();
		dispatch('click');
	}

	function formatTime(millis: number): string {
		const secs = millis / 1000;
		const minutes = Math.floor(secs / 60);
		const minutesStr = minutes.toString().padStart(2, '0');
		const seconds = secs % 60;
		const secondsStr = seconds.toString().padStart(2, '0');
		return `${minutesStr}:${secondsStr}`;
	}
</script>

<!--  -->

<Button on:click={start} bind:disabled bind:locked lock disableOnLock>
	<div class="p-3 flex flex-row flex-nowrap justify-between">
		<p>
			<strong>{formatTime(currentTime)}</strong> | <strong>{cards}</strong> carte
		</p>
		{#if completed}
			<p>✅</p>
		{/if}
	</div>
</Button>
