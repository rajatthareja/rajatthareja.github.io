$(document).ready(function() {
	$('#header div').click(function() {
		if (!$(this).hasClass( 'active' )) {
			$('.circles').removeClass('active');
			$(this).addClass('active');
			var id = '#s-' + $(this).attr('id');
			var $lefty = $(id);
			$('#slider-container > div.slider').animate({
				left: -1000
			});
			$('#slider-container').height(parseInt($lefty.css('height'),10));
			$lefty.animate({
				left: parseInt($lefty.css('left'),10) == 0 ?
				-$lefty.outerWidth() :
				0
			});
		}
	});
});

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-33561933-1']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
