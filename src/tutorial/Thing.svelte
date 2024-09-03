<script lang="ts">
	import type { EmojiMap } from './Thing';

	const emojis: EmojiMap = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	// the name is updated whenever the prop value changes...
	type EmojiKey = keyof EmojiMap;
	let { name }: { name: EmojiKey } = $props();

	// ...but the "emoji" variable is fixed upon initialisation
	// of the component because it uses `const` instead of `$:`
	let emoji = $derived(emojis[name]);
</script>

<p>{emoji} = {name}</p>
