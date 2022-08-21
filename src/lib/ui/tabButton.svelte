<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Button from './button.svelte';

	export let name: string;
	export let current: Writable<string>;
	export let grow = false;

	let locked = false;
	$: locked = $current === name;

	function setCurrent() {
		$current = name;
	}
</script>

<Button on:click={setCurrent} lock active {grow} bind:locked><slot /></Button>
