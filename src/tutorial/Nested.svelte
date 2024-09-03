<script lang="ts">
	interface NestedProps {
		answer?: number | string;
	}
	let { answer = 'a mystery' }: NestedProps = $props();
</script>

<p>The answer is {answer}</p>
