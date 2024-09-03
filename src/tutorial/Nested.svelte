<script lang="ts">
	interface NestedProps {
		answer: number;
	}
	let { answer }: NestedProps = $props();
</script>

<p>The answer is {answer}</p>
