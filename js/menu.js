document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.querySelector('.menu-toggle');

	hamburger.addEventListener('click', function (event) {
		event.preventDefault();
		const elementToShow = document.querySelector('.page-navigation');
		const elemToHide = document.querySelector('.jumbotron-box__title');
		elemToHide.classList.toggle('visible');
		elementToShow.classList.toggle('hide');
		const mobile = window.matchMedia("(min-width: 1000px)");
		mobile.addListener( function(mobile) {
			if (mobile.matches) {
				elemToHide.classList.remove('visible');
				console.log(mobile.matches);
				console.log(elementToShow.className)
			} else if (mobile.matches === false && elementToShow.className.indexOf("hide") === -1) {
				console.log("hass");
				elemToHide.classList.add('visible');
			}
		});

	})

});