<script lang="ts">
	import Button from '$lib/ui/button.svelte';

	type TimerConfig = {
		duration: number;
		cards: number;
	};

	const baseConfig: Array<TimerConfig> = [
		{ duration: 60 * 10, cards: 2 },
		{ duration: 60 * 8, cards: 3 },
		{ duration: 60 * 7, cards: 4 },
		{ duration: 60 * 6, cards: 5 },
		{ duration: 60 * 5, cards: 6 },
		{ duration: 60 * 4, cards: 7 },
		{ duration: 60 * 3, cards: 8 },
		{ duration: 60 * 2, cards: 9 },
		{ duration: 60 + 48, cards: 10 },
		{ duration: 60 + 48, cards: 11 },
		{ duration: 60 + 48, cards: 12 },
		{ duration: 60 + 48, cards: 13 }
	];

	let currentTimer: TimerConfig | null = null;

	function startTimer(timer: TimerConfig) {
		currentTimer = timer;
	}

	let count = 0;

	// const interval = setInterval(() => {
	// 	count++;
	// 	console.log(count);
	// 	if (count == 20) {
	// 		clearInterval(interval);
	// 	}
	// }, 1000);

	function formatDuration(secs: number): string {
		const minutes = Math.floor(secs / 60);
		const minutesStr = minutes.toString().padStart(2, '0');
		const seconds = secs % 60;
		const secondsStr = seconds.toString().padStart(2, '0');
		return `${minutesStr}:${secondsStr}`;
	}
</script>

<!--  -->

<div class="px-6 py-9 space-y-6 flex flex-col flex-nowrap items-stretch">
	{#each baseConfig as timer}
		{@const disabled = currentTimer != null && timer != currentTimer}
		{@const duration = formatDuration(timer.duration)}
		<Button
			on:click={() => {
				startTimer(timer);
			}}
			{disabled}
			lock
			disableOnLock
		>
			<div class="p-3">
				<p>Durata: <strong>{duration}</strong></p>
				<p>Carte: <strong>{timer.cards}</strong></p>
			</div>
		</Button>
	{/each}
</div>
