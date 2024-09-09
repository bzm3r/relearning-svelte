<script lang="ts">
	import Outer from './Outer.svelte';

	function handleMessage(message: string) {
		alert(message);
	}
</script>

<Outer onmessage={handleMessage} />
