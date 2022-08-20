<script lang="ts">
	import '../app.postcss';

	import Link from '$lib/ui/link.svelte';
</script>

<div class="w-screen h-screen flex flex-col items-stretch flex-nowrap overflow-hidden">
	<div class="border-b-2 border-b-black p-4">
		<Link href="/timer">Timer</Link>
		<Link href="/sounds">Sounds</Link>
	</div>

	<slot />
</div>
