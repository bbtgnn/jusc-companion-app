<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/**
	 * Exports
	 */

	export let grow = false;
	export let disabled = false;

	export let lock = false;
	export let release = false;
	export let disableOnLock = false;

	// State variable
	export let locked = false;

	/**
	 * Updating lock state
	 */

	let isDisabled: boolean;
	$: isDisabled = disabled || (disableOnLock && locked);

	let isDown: boolean;
	$: isDown = !disabled && lock && locked;

	/**
	 * Click dispatch
	 */

	const dispatch = createEventDispatcher<{ click: null; release: null }>();

	function click() {
		if (!lock) {
			dispatch('click');
		} else {
			if (!locked) {
				locked = true;
				dispatch('click');
			} else {
				if (release) {
					locked = false;
					dispatch('release');
				}
			}
		}
	}
</script>

<!--  -->

<button
	on:click={click}
	disabled={isDisabled}
	class:locked={isDown}
	class:grow
	class:basis-1={grow}
	class="relative shrink-0"
>
	<slot />
</button>

<style lang="postcss">
	button {
		transition: all 100ms;
		cursor: pointer;
		border-radius: 8px;

		background-color: white;
		border: solid 2px #000;
		box-shadow: -8px 8px 0 0 #000;
		transform: translate(8px, -8px);
	}

	button:disabled {
		pointer-events: none;

		color: gray;
		background-color: transparent;
		border: solid 2px gray;
		box-shadow: 0 0 0 0 gray;
		transform: translate(0, 0);
	}

	button:active,
	button.locked {
		background-color: lightgreen;
		box-shadow: -4px 4px 0 0 #000;
		transform: translate(4px, -4px);
	}
</style>
