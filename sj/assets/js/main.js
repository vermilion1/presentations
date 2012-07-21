var query = {};

location.search.replace(/[A-Z0-9]+?=(\w*)/gi, function (a) {
	query[ a.split('=').shift() ] = a.split('=').pop();
});

Reveal.initialize({
	controls:false,
	progress:false,
	history:true,
	mouseWheel:false,
	rollingLinks:false
});

hljs.initHighlightingOnLoad();


$(function() {

	var $sjLogo = $('.sj-logo'),
		$sjFirst = $('.sj-first'),
		$sjSecond = $('.sj-second'),
		$sjThird = $('.sj-third'),
		$sjFourth = $('.sj-fourth'),
		isRunning = false;

	$('a').on('click', function(e) {
		e.preventDefault();
		window.open(this.href);
	});

	$sjLogo.on('click', toggleAnimation).click();

	function animate($element, stop) {
		if (stop) {
			$element.stop().css('opacity', 1);
			return false;
		}
		var rand = Math.random(),
			opacity = rand < 0.5 ? rand + 0.5 : rand;

		$element.animate({opacity:opacity}, Math.random() * 1000, function() {
			animate($element);
		});
	}

	function toggleAnimation() {
		isRunning = !isRunning;
		$sjLogo.toggleClass('running', isRunning);
		animate($sjFirst, !isRunning);
		animate($sjSecond, !isRunning);
		animate($sjThird, !isRunning);
		animate($sjFourth, !isRunning);
	}


	Reveal.addEventListener('questions', function () {
		var $questions = $('#questions').stop();
		function animateTrollFace() {
			$questions
				.animate({marginTop:0}, 100 + Math.random() * 10)
				.animate({marginTop:4 + Math.random()}, 200 + Math.random() * 10, function() {
					animateTrollFace();
				});
		}
		animateTrollFace();
	});


});