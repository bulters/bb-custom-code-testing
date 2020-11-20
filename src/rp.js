async function rp() {
	const { result } = await request("https://postman-echo.com/get?foo1=bar1&foo2=bar2", {});
	console.debug(result);
	console.debug("OK");
}
