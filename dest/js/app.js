'use strict';

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

	$('[popup-js]').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function close() {}
		}
	});

	$('[popup-close-js]').on('click', function (ev) {
		$.magnificPopup.close();
	});
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

	svg4everybody();
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

	/**
   * @description
  */
	// WebFont.load({
	//   google: {
	//     families: [
	//       'Roboto:100,300,400,500,700,900'
	//     ]
	//   }
	// });

	/**
   * @description
  */
	var WebFontConfig = {
		custom: {
			families: ['SFCompactText:n2,n4,n5,n6,n7,n9']
		}
	};
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var initClickBody = function initClickBody() {
		$('body').on('click', function (e) {
			var className = ".profile__dropdown";

			if (!$(e.target).closest(className).length) {
				$('.profile__dropdown').removeClass('is-open');
			}
		});
	};

	var initHeaderProfileDropdown = function initHeaderProfileDropdown() {
		$('[dropdown-profile-js]').on('click', function (ev) {
			$(ev.currentTarget).closest('.profile__dropdown').toggleClass('is-open');
		});
	};

	var initHeaderNavBtn = function initHeaderNavBtn() {
		$('[header-navBtn-js]').on('click', function (ev) {
			$('[header-navBtn-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};

	var initMobileMenu = function initMobileMenu() {
		$('[hamburger-js]').on('click', function (ev) {
			$('html, body').addClass('is-hideScroll');
			$('[mobile-container-js]').addClass('is-open');
		});

		$('[mobile-close-js]').on('click', function (ev) {
			$('html, body').removeClass('is-hideScroll');
			$('[mobile-container-js]').removeClass('is-open');
		});
	};

	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initWebFontLoader();
		initPreventBehavior();
		initSvg4everybody();
		// ==========================================

		// lib
		initPopups();
		// ==========================================

		// callback
		initClickBody();
		initHeaderProfileDropdown();
		initHeaderNavBtn();
		initMobileMenu();
		// ==========================================
	};
	initNative();
})();