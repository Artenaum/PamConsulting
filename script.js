console.log("!");

const swiper = new Swiper('.swiper'
	,{
	direction: 'vertical',
	allowTouchMove: false,
	
	pagination: {
		el: '.swiper-pagination',
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