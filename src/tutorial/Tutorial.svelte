<script>
	let count = $state(0);

	function increment() {
		count++;
	}
</script>

<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
