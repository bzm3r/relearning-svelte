export async function GET_RANDOM_NUMBER() {
	let min = 0;
	let max = 100;
	min = +min;
	max = +max;

	// simulate a long delay
	await new Promise((res) => setTimeout(res, 1000));

	// fail sometimes
	if (Math.random() < 0.333) {
		return new Response(`Failed to generate random number. Please try again`, {
			status: 400,
			headers: { 'Access-Control-Allow-Origin': '*' }
		});
	}

	const num = min + Math.round(Math.random() * (max - min));
	return new Response(String(num), {
		headers: { 'Access-Control-Allow-Origin': '*' }
	});
}

export async function getRandomNumber(): Promise<String> {
	// Fetch a random number between 0 and 100
	// (with a delay, so that we can see it)
	const res = await GET_RANDOM_NUMBER();

	if (res.ok) {
		return await res.text();
	} else {
		// Sometimes the API will fail!
		throw new Error('Request failed');
	}
}
