const Y = g => (x => g(x(x)))(x => g(x(x)))

async function why() {
	const funcs = [Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y];
	const f = function(ff) { ff(ff) };
	mapAsync(funcs, function(bf) { bf(f); console.debug("ok"); });
}

export default why;
