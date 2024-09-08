<script lang="ts">
	import { getRandomNumber } from './utils.js';

	let promise = $state(getRandomNumber());

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button onclick={handleClick}> generate random number </button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
