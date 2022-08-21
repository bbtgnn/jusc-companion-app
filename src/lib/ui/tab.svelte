<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let name: string;
	export let current: Writable<string>;

	let hidden = false;
	$: hidden = $current !== name;
</script>

<!--  -->

<div class="grow flex flex-col flex-nowrap" class:hidden>
	<slot />
</div>
