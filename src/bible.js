async function logBible() {
	const { bible } = await request('http://www.gutenberg.org/files/10/10.txt', {});

	console.debug(bible);

	return true;
}

export default logBible;
