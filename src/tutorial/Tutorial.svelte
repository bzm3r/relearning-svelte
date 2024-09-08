<script lang="ts">
	let clicked = $state(false);
	function once(fn: ((event: Event) => void) | null) {
		return function (event: Event) {
			if (fn) fn(event);
			clicked = true;
			fn = null;
		};
	}
</script>

{#if !clicked}
	<button onclick={once(() => alert('Clicked!'))}>Click me!</button>
{:else}
	😊
{/if}
