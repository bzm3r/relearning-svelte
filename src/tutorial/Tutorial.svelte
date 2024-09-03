<script>
	let count = $state(0);

	function increment() {
		count++;
	}

	let doubled = $derived(count * 2);
</script>

<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
