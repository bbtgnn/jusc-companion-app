<script lang="ts">
	import { howls, stopHowl } from '$lib/ui/loopButton.svelte';
	import Button from '$lib/ui/button.svelte';

	function stopMambo() {
		stopHowl($howls['mambo']);
	}

	let isMamboPlaying: boolean;
	$: isMamboPlaying = $howls['mambo']?.isPlaying;
</script>

<div class="grow flex flex-col p-6">
	<p class="mb-6">
		Schiacciare solo in caso di partenza non intenzionale di "Mambo Salentino"
	</p>
	<Button disabled={!isMamboPlaying} grow on:click={stopMambo}
		>Stop Mambo</Button
	>
</div>
