<script>
	let count = $state(0);

	function increment() {
		count++;
	}

	let doubled = $derived(count * 2);

	$effect(() => {
		console.log(`the count is ${count}`);
		console.log(`this will also be logged whenever count changes`);
	});
</script>

<button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
