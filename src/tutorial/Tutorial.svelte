<script lang="ts">
	import type { EmojiMap } from './Thing';
	import Thing from './Thing.svelte';

	type ThingObj = { id: Number; name: keyof EmojiMap };
	let things: ThingObj[] = $state([
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	]);

	function handleClick() {
		things = things.slice(1);
	}
</script>

<button onclick={handleClick}> Remove first thing </button>

{#each things as thing}
	<Thing name={thing.name} />
{/each}
