<script lang="ts">
	import CardsTimer from '$lib/ui/cardsTimer.svelte';

	//

	// Creating timers

	type CardsTimerConfig = {
		cards: number;
		duration: number;
	};

	const baseConfig: Array<CardsTimerConfig> = [
		{ cards: 13, duration: 10 * 1000 },
		{ cards: 13, duration: 5 * 1000 }
	];

	// const baseConfigs: Array<CardsTimerConfig> = [
	// 	{ duration: 60 * 10, cards: 2 },
	// 	{ duration: 60 * 8, cards: 3 },
	// 	{ duration: 60 * 7, cards: 4 },
	// 	{ duration: 60 * 6, cards: 5 },
	// 	{ duration: 60 * 5, cards: 6 },
	// 	{ duration: 60 * 4, cards: 7 },
	// 	{ duration: 60 * 3, cards: 8 },
	// 	{ duration: 60 * 2, cards: 9 },
	// 	{ duration: 60 + 48, cards: 10 },
	// 	{ duration: 60 + 48, cards: 11 },
	// 	{ duration: 60 + 48, cards: 12 },
	// 	{ duration: 60 + 48, cards: 13 }
	// ];
</script>

<!--  -->

<div class="px-6 py-9 space-y-6 flex flex-col flex-nowrap items-stretch">
	{#each baseConfig as timer}
		<CardsTimer duration={timer.duration} cards={timer.cards} />
	{/each}
</div>
