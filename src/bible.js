async function logBible() {

	console.debug("Getting the bible");
	const { bible } = await request('http://www.gutenberg.org/files/10/10.txt', {});
	console.debug(bible);
	console.debug("Holy be thy name");


	return true;
}

export default logBible;
