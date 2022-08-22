<script lang="ts">
	import Button from '$lib/ui/button.svelte';

	let locks = false;
	const changeLocks = () => {
		locks = !locks;
	};
</script>

<div class="grow flex flex-col flex-nowrap items-stretch p-6 space-y-6">
	<Button grow on:click={changeLocks}>Change locks</Button>

	<div class="h-3" />

	<Button grow>Base</Button>
	<Button grow disabled>Disabled</Button>
	<Button grow lock>Lock</Button>
	<Button grow lock release>Lock+Release</Button>
	<Button grow lock disabled>Lock Disabled</Button>
	<Button bind:locked={locks} grow lock disableOnLock>Lock & disableOnLock</Button>
</div>
