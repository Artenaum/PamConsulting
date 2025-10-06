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

// Screen width tweeks
const wccHeadlineTitle = document.getElementById("wcc-headline-title");
const wccHeadlineTitleTextOld = "WHY CHOOSE CYPRUS?";
const wccHeadlineTitleTextNew = "Why Choose Cyprus?";

const mapHeadlineParagraph = document.getElementById("map-headline-paragraph");
const mapHeadlineParagraphDesktop = "Click your mouse over any city to learn more about it";
const mapHeadlineParagraphMobile = "Tap on any city to learn more about it";

const wwaAboutUs = document.getElementById("wwa-about-us");
const wwaLine = document.getElementById("wwa-line");

function wwaLineOffset() {
	wwaLine.style.marginLeft = String(-wwaAboutUs.getBoundingClientRect().left) + "px";
}

wwaLineOffset();

function widthAdapt() {
	const width = window.innerWidth;

	if (width >= 1000) {
		mapHeadlineParagraph.textContent = mapHeadlineParagraphDesktop;
	} else {
		mapHeadlineParagraph.textContent = mapHeadlineParagraphMobile;
	}

	if (width <= 480) {
		wccHeadlineTitle.textContent = wccHeadlineTitleTextNew;
		window.removeEventListener('resize', wwaLineOffset);
		wwaLine.style.marginLeft = "0px";
	} else {
		wccHeadlineTitle.textContent = wccHeadlineTitleTextOld;
		window.addEventListener('resize', wwaLineOffset);
	}
}

widthAdapt();

window.addEventListener('resize', widthAdapt);

// Cyprus Map
const nicosiaMap = document.getElementById("nicosia-map");
const limassolMap = document.getElementById("limassol-map");

const nicosiaMapLabel = document.getElementById("nicosia-map-label");
const limassolMapLabel = document.getElementById("limassol-map-label");

var mapDescriptionCardNicosia = document.getElementById("map-description-card-nicosia");
var mapDescriptionCardLimassol = document.getElementById("map-description-card-limassol");

var cards = [];
cards.push(mapDescriptionCardNicosia);
cards.push(mapDescriptionCardLimassol);

function hideCityCards() {
	cards.forEach((card) => card.style.display = "none");
}

function cyprusMapClickHandler(city) {
	switch (city) {
		case "Limassol": {
			if (window.getComputedStyle(mapDescriptionCardLimassol).display === "none") {
				console.log("Showing Limassol card");
				hideCityCards();
				mapDescriptionCardLimassol.style.display = "flex";
				break;
			} else {
				console.log("Limassol card already visible");
				break;
			}
		}
		case "Nicosia": {
			if (window.getComputedStyle(mapDescriptionCardNicosia).display === "none") {
				console.log("Showing Nicosia card");
				hideCityCards();
				mapDescriptionCardNicosia.style.display = "flex";
				break;
			} else {
				console.log("Nicosia card already visible");
				break;
			}
		}
		default: {
			alert("Something went very wrong!!!");
			break;
		}
	}
}

nicosiaMap.addEventListener('click', event => {cyprusMapClickHandler("Nicosia")});
limassolMap.addEventListener('click', event => {cyprusMapClickHandler("Limassol")});

nicosiaMapLabel.addEventListener('click', event => {cyprusMapClickHandler("Nicosia")});
limassolMapLabel.addEventListener('click', event => {cyprusMapClickHandler("Limassol")});

