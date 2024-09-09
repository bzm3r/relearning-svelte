<script lang="ts">
	import Inner from './Inner.svelte';

	interface OuterProps {
		onmessage: (message: string) => void;
	}

	let { onmessage }: OuterProps = $props();
</script>

<Inner handleMessage={onmessage} />
