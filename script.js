const swiper = new Swiper('.swiper', {
	speed: 1000,
	direction: 'vertical',
	autoHeight: true,
	autoplay : {
		delay: 5000,
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

const wcc_headline_title = document.getElementById("wcc-headline-title");
const wcc_headline_title_text_old = "WHY CHOOSE CYPRUS?";
const wcc_headline_title_text_new = "Why Choose Cyprus?";

function widthAdapt() {
	const width = window.innerWidth;

	if (width <= 480) {
		wcc_headline_title.textContent = wcc_headline_title_text_new;
	} else {
		wcc_headline_title.textContent = wcc_headline_title_text_old;
	}
}

widthAdapt();

window.addEventListener('resize', widthAdapt);