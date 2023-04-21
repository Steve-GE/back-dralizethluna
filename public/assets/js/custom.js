(function($) { 

	/* ..............................................
	Loader
    ................................................. */

	$(window).on('load', function() {
		$('.preloader').fadeOut();
		$('#preloader').delay(550).fadeOut('slow');
		$('body').delay(450).css({'overflow':'visible'});
	});

	/* ..............................................
    Navbar Bar
    ................................................. */
	(function($) { // Begin jQuery
		$(function() { // DOM ready
		  // If a link has a dropdown, add sub menu toggle.
		  $('nav ul li a:not(:only-child)').click(function(e) {
			$(this).siblings('.nav-dropdown').toggle();
			// Close one dropdown when selecting another
			$('.nav-dropdown').not($(this).siblings()).hide();
			e.stopPropagation();
		  });
		  // Clicking away from dropdown will remove the dropdown class
		  $('html').click(function() {
			$('.nav-dropdown').hide();
		  });
		  // Toggle open and close nav styles on click
		  $('#nav-toggle').click(function() {
			$('nav ul').slideToggle();
		  });
		  // Hamburger to X toggle
		  $('#nav-toggle').on('click', function() {
			this.classList.toggle('active');
		  });
		}); // end DOM ready
	  })(jQuery); // end jQuery

	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});

	/* ..............................................
    Fixed Menu
    ................................................. */

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
    Properties Filter
    ................................................. */
	// var Container = $('.container');
	// Container.imagesLoaded(function () {
	// 	var portfolio = $('.properties-menu');
	// 	portfolio.on('click', 'button', function () {
	// 		$(this).addClass('active').siblings().removeClass('active');
	// 		var filterValue = $(this).attr('data-filter');
	// 		$grid.isotope({
	// 			filter: filterValue
	// 		});
	// 	});
	// 	var $grid = $('.properties-list').isotope({
	// 		itemSelector: '.properties-grid'
	// 	});

	// });

	/* ..............................................
    Gallery
    ................................................. */

	// $(document).ready(function() {
	// 	$('.popup-gallery').magnificPopup({
	// 		delegate: 'a',
	// 		type: 'image',
	// 		tLoading: 'Loading image #%curr%...',
	// 		mainClass: 'mfp-img-mobile',
	// 		gallery: {
	// 			enabled: true,
	// 			navigateByImgClick: true,
	// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// 		},
	// 		image: {
	// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	// 			titleSrc: function(item) {
	// 				return item.el.attr('title') + '<small>Dra. Lizeth Luna</small>';
	// 			}
	// 		}
	// 	});
	// });

	/* ..............................................
    Gallery
    ................................................. */

	

	/* ..............................................
    Scroll To Top
    ................................................. */

	$(document).ready(function () {

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});

		$('#scroll-to-top').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	});


	/* ..............................................
    Smooth Scroll
    ................................................. */

	$('a[href*="#"]:not([href="#"])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
		  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 65,
				  }, 1000);
				  return false;
			  }
		}
	});


}(jQuery));
