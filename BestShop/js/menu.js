document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.querySelector('.menu-toggle');

	hamburger.addEventListener('click', function (event) {
		event.preventDefault();
		const elementToShow = document.querySelector('.page-navigation');
		const elemToHide = document.querySelector('.jumbotron-box__title');
		elemToHide.classList.toggle('visible');
		elementToShow.classList.toggle('hide');

	})

});