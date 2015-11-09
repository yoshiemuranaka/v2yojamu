$(document).ready(function(){

	Slide = {

		config: {
			current: 1
		},

		init: function() {
			Slide.animateIn(Slide.config.current);
		},

		animateIn: function(newSlide) {
			$('[data-slide=' + newSlide + ']').addClass('active');
		}
	
	};

	Slide.init();


})