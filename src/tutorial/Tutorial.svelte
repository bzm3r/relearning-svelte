<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
	<p>{count} is greater than 10</p>
{:else if count == 0}
	<p>press the button to get started!</p>
{:else}
	<p>you have to press the button {10 - count} more times!</p>
{/if}
