<script lang="ts">
	import Inner from './Inner.svelte';

	function handleMessage(message: string) {
		alert(message);
	}
</script>

<Inner {handleMessage} />
