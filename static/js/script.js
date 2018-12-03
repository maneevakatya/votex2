$(document).ready(function() {
	window.sf = {};
	window.sf.contacts = ({

  bindEvents: function() {

	 var mapOptions = {
	   zoom: 16,
	   scrollwheel: false,
	   center: '',
		disableDefaultUI: true,

	   zoomControlOptions: { },
	 };

	 var image = 'static/i/pin.png';

	 mapOptions.center = new google.maps.LatLng(55.712710, 37.644477);
	 map = new google.maps.Map(document.getElementById('contactsmap'), mapOptions);
	 var start_point = new google.maps.LatLng(55.713519, 37.645539);

	 var map_center = new google.maps.LatLng(55.712710, 37.644477);

	 var marker = new google.maps.Marker({
	   position: start_point,
	   map: map,
	   icon: image
	 });

  },

  init: function() {

	 if ($('#contactsmap').length)
	   this.bindEvents();
  }

}).init();

	$(".nav__link").click(function(i) {
		if ($(window).width() <= 1023 && $(this).next(".nav__list").slideToggle(), $("body").hasClass("index")) {
			i.preventDefault();
			var n = $(this).attr("href").substr(1),
				t = $(n).offset().top;
			$("html, body").animate({
				scrollTop: t - 50
			}, 1500), $(window).width() <= 1024 && $(".nav").slideToggle()
		}
	}), $(".burger-menu").click(function() {
		$(".nav").slideToggle(), $(this).toggleClass("is-active"), $("body, html").toggleClass("ovh")
	}), $(".slide").owlCarousel({
		nav: !1,
		dots: !1,
		items: 4,
		margin: 10,
		responsiveClass: !0,
		responsive: {
			0: {
				nav: !0
			}
		}
	}), $(".slide2").owlCarousel({
		nav: !1,
		dots: !1,
		items: 1,
		margin: 10,
		responsiveClass: !0,
		responsive: {
			0: {
				nav: !0
			}
		}
	}), $(window).on("load", function() {
		$(window).width() <= 1023 && $(".nav > .nav__list").mCustomScrollbar({
			theme: "dark"
		})
	}), $("body").on("resize", function() {
		var i = $(".footer").outerHeight() + $(".header").outerHeight();
		$(".inner-wrapper").css("min-height", "calc(100vh - " + i + "px)")
	}).trigger("resize"), $(".fabric-info__main-img").click(function() {
		var i = parseInt($(this).children().attr("data-index"), 10) - 1;
		$(".fabric-info__fancybox")[i].click()
	}), $(".fabric-info__img").click(function() {
		var i = $(this).children().attr("data-original"),
			n = $(this).children().attr("data-index");
		$(".fabric-info__img-big").attr("data-index", n), $(".fabric-info__img-big").attr("src", i)
	})

	$(".vacancy__resume-label").click(function() {
	$(this).parent().find("input[type='file']").click();
})
	$("input[type='file']").change(function() {
	if ($(this).val() == '') {
		$(this).parent().find(".vacancy__resume-label span").text('?????? ?? ???????????');
	} else {
		var name = $(this).val();
		name = name.split('\path\\')[1]
		$(this).parent().find(".vacancy__resume-label span").text(name);
	}

	})

});
