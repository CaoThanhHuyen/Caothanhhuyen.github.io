$('.owl-carousel-highlight').owlCarousel({
			autoplay:true,
			autoplayHoverPause: true,
			lazyLoad: true,
			margin: 30,
			stagePadding: 5,
			responsive: {
				0: {
					items: 1,
					dots: false
				},
				485: {
					items: 1,
					dots: false
				},
				728: {
					items: 2,
					loop: true
				},
				1200: {
					items: 4,
					loop: true
				},
				1920: {
					items: 4,
					dots: true
				}
			}
		});

		$('.deal')
			$('.owl-carousel-deal').owlCarousel({
			autoplay:true,
			// autoplayHoverPause: true,
			lazyLoad: true,
			margin: 30,
			// stagePadding: 30,
			items: 2,
			responsive: {
				0: {
					items: 1,
					dots: false
				},
				485: {
					items: 1,
					dots: false
				},
				728: {
					items: 1,
					loop: true
				},
				1200: {
					items: 2,
					loop: true
				},
				1920: {
					items: 2,
					dots: true
				}
			}
		});

		$('own-carousel').on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY>0 ) {
				$('.owl-carousel').trigger('next-owl');
			} else {
				$('.owl-carousel').trigger('prev-owl');
			}
			e.preventDefault();
		});

		// phần search
		$(function() {
			$(".search-submit").click(function(e) {
			if($(".search-text").val().length <= 0) {
			e.preventDefault();
			}
			$(".search-text").toggleClass("open");
			});
		});