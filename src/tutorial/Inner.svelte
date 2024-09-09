<script lang="ts">
	import type { InnerProps } from './InnerProps';

	let message = 'Hello!';
	let { handleMessage }: InnerProps = $props();
</script>

<button onclick={() => handleMessage(message)}> Click to say hello </button>
