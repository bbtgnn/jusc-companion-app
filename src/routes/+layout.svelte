<script lang="ts">
	import '../app.postcss';
	import { base } from '$app/paths';

	import Link from '$lib/ui/link.svelte';
</script>

<div class="w-screen h-screen flex flex-col items-stretch flex-nowrap overflow-hidden">
	<div class="border-b-2 border-b-black p-4">
		<Link href="{base}/timer">Timer</Link>
		<Link href="{base}/sounds">Sounds</Link>
	</div>

	<slot />
</div>
