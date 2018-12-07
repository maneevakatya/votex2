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

window.sf.form = ({
  init: function() {
	 var o = this;
	 $(".callback__input").keydown(function(e) {
		  -1 !== $.inArray(e.keyCode, [
			 46,
			 8,
			 9,
			 27,
			 13,
			 110,
			 190
		  ]) || 65 == e.keyCode && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && e.keyCode <= 40 || (e.shiftKey || e.keyCode < 48 || 57 < e.keyCode) && (e.keyCode < 96 || 105 < e.keyCode) && e.preventDefault()
		}),
		$(".callback__input, .feedback__input ").inputmask("+7 (999) 999 - 99 - 99", {
		  placeholder: " ",
		  showMaskOnHover: !1,
		  showMaskOnFocus: !1
		}),
		$(".callback__form, .feedback__form").submit(function(e) {
		  if (!o.checkForm($(this)))
			 return !1
		})
  },
  checkForm: function(form) {
	  var checkResult = true;
	  form.find('.warning').removeClass('warning');
	  form.find('input, textarea, select').each(function() {
		  if ($(this).data('req')) {
			  switch ($(this).data('type')) {
				  case 'email':
					  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
					  if (!re.test($(this).val())) {
						  $(this).addClass('warning');
						  checkResult = false;
					  }
					  break;
				  case 'mobile':
					  if ($.trim($(this).val()).length < 22) {
						  $(this).addClass('warning');
						  checkResult = false;
					  }
					  break;
				  default:
					  if ($.trim($(this).val()) === '') {
						  $(this).addClass('warning');
						  checkResult = false;
					  }
					  break;
			  }
		  }
	  });
	  return checkResult;

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

	$(".vacancy__resume-label, .feedback__label-file").click(function() {
	$(this).parent().find("input[type='file']").click();
})
	$("input[type='file']").change(function() {
	if ($(this).val() == '') {
		$(this).parent().find(".vacancy__resume-label span, .feedback__label-file span").text('?????? ?? ???????????');
	} else {
		var name = $(this).val();
		name = name.split('\path\\')[1]
		$(this).parent().find(".vacancy__resume-label span, .feedback__label-file span").text(name);
	}

	})

});
