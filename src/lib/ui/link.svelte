<script lang="ts">
	export let href: string;
	export let blank = false;
</script>

<a
	{href}
	target={blank ? '_blank' : '_self'}
	class="text-blue-600 hover:text-white hover:bg-blue-600"
>
	<slot />
</a>
