
function test(fn, times) {
	var result = 0;
	for (var i = 0; i < (times || 1); i++) {
		result += fn();
	}
	return result;
}