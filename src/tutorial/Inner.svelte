<script lang="ts">
	interface InnerProps {
		handleMessage: (message: string) => void;
	}

	let message = 'Hello!';
	let { handleMessage }: InnerProps = $props();
</script>

<button onclick={() => handleMessage(message)}> Click to say hello </button>
