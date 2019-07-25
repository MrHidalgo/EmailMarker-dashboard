/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const initClickBody = () => {
		$('body').on('click', function (e) {
			const className = ".profile__dropdown, .c-modal__dropdown";

			if (!$(e.target).closest(className).length) {
				$('.profile__dropdown').removeClass('is-open');
				$('.c-modal__dropdown').removeClass('is-open');
			}
		});
	};


	const initHeaderProfileDropdown = () => {
		$('[dropdown-profile-js]').on('click', (ev) => {
			$(ev.currentTarget).closest('.profile__dropdown').toggleClass('is-open');
		});
	};


	const initModalDropdown = () => {
		$('[dropdown-c-modal-js]').on('click', (ev) => {
			$(ev.currentTarget).closest('.c-modal__dropdown').toggleClass('is-open');
		});
	};


	const initHeaderNavBtn = () => {
		$('[header-navBtn-js]').on('click', (ev) => {
			$('[header-navBtn-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};


	const initMobileMenu = () => {
		$('[hamburger-js]').on('click', (ev) => {
			$('html, body').addClass('is-hideScroll');
			$('[mobile-container-js]').addClass('is-open');
		});

		$('[mobile-close-js]').on('click', (ev) => {
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
	const initNative = () => {
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
		initModalDropdown();
		// ==========================================
	};
	initNative();
})();
