const swiper = new Swiper('.swiper', {
	speed: 400,
	direction: 'vertical',
	autoHeight: true,
	autoplay : {
		delay: 3000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

function hamburger() {
	var menu = document.getElementsByClassName("hamburger-menu");
	if (menu[0].style.display === "none") {
		menu[0].style.display = "flex";
	} else {
		menu[0].style.display = "none";
	}
}

function servicesDropdown() {
	var menu = document.getElementsByClassName("services-menu");
	if (menu[0].style.display === "none") {
		menu[0].style.display = "flex";
	} else {
		menu[0].style.display = "none";
	}
}