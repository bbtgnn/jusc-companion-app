<script lang="ts">
	import { howls, stopHowl } from '$lib/ui/loopButton.svelte';
	import Button from '$lib/ui/button.svelte';

	//

	function stopMambo() {
		stopHowl($howls['mambo']);
	}

	let isMamboPlaying: boolean;
	$: isMamboPlaying = $howls['mambo']?.isPlaying;

	//

	function stopTimer() {
		console.log('Stop!');
	}
</script>

<div class="grow flex flex-col p-6">
	<p class="mb-4">
		Schiacciare solo in caso di partenza non intenzionale di "Mambo Salentino".
	</p>
	<Button disabled={!isMamboPlaying} grow on:click={stopMambo}
		>Stop Mambo</Button
	>

	<div class="h-8" />

	<p class="mb-4">Schiacciare solo in caso di stop d'emergenza del timer.</p>
	<Button grow on:click={stopTimer}>Stop Timer</Button>
</div>
