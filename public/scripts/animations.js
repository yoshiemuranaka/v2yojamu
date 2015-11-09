$(document).ready(function(){

	Slide = {

		config: {
			current: 1,
			animate: $('.js-animate')
		},

		init: function() {
			Slide.animateIn();
			Slide.events();
		},

		events: function() {
			$('.center').scroll(function(){console.log('yo')})
		},

		animateIn: function() {
			$(".about").delay(300).addClass('active');
			$(".contact").css({"display": "none"});
		},

		changeSlide: function() {
			console.log('change slide')
		}
	
	};

	Slide.init();


})