var query = {};

location.search.replace(/[A-Z0-9]+?=(\w*)/gi, function (a) {
	query[ a.split('=').shift() ] = a.split('=').pop();
});

Reveal.addEventListener('customevent', function () {
	console.log('"customevent" has fired');
});

Reveal.initialize({
	controls:false,
	progress:false,
	history:true,
	mouseWheel:false,
	rollingLinks:false
});

hljs.initHighlightingOnLoad();