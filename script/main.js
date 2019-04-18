const tl = new TimelineLite();
const tw = new TweenLite.lagSmoothing();
const text = document.getElementById('text');
const figure = document.getElementById('figure');
const textAndLogo = document.getElementById('textAndLogo');
const nextBackground = document.getElementById('nextBackground')
const logo = document.getElementById('logo');
const logoNext = document.getElementById('logoNext');
const secondText = document.getElementById('secondText');
const textNext = document.getElementById('textNext');
const button = document.getElementById('button');
const images = [{
	img: `url('./images/image1.jpg')`,
	alt: "women pushing the seat car",
	class: 'page1',
	text: `url('./images/text1.png')`
},
{
	img: `url('images/imageBanner.png')`,
	alt: "kids on the front side car",
	class: 'page2',
	text: `url('./images/text2.png')`
},
{
	img: `url('images/image3.jpg')`,
	alt: "rear side car, parents putting luggages inside of the car",
	class: 'page3',
	text: `url('./images/text3.png')`
},
{
	img: `url('images/image4.jpg')`,
	alt: "entire car,around the car tha family, kid in front side and parent in the rear side",
	class: 'page4',
	text1: `url('./images/text4.png')`,
	text2: `url('./images/text5.png')`
}]


// ===================DOCUMENT READY===================

document.addEventListener('DOMContentLoaded', function () {
	TweenLite.lagSmoothing(1000, 16);
	displayPage1();
	displayPage2();
	displayPage3();
	displayPage4();



});

function displayPage1() {
	text.style.backgroundImage = images[0].text;
	textAndLogo.style.backgroundImage = images[0].img;
	tl
		.to(logo, 0.5, { left: -1000 }).to(logo, 0.5, { left: 20 }).to(text, 0.5, { left: 5, delay: 0.8 }, textAndLogo, 0.5, { left: 0 })

}

function displayPage2() {
	setTimeout(function () {

		text.style.backgroundImage = images[1].text;
		textAndLogo.style.backgroundImage = images[1].img;
		tl
			.set(textAndLogo, { opacity: 0, left: 0 })
			.set(logo, { left: -1000 + `px`, immediateRender: false })
			.set(text, { opacity: 0, left: 1000 + `px` })
			.to(textAndLogo, 1.5, { opacity: 1 })
			.to(logo, 0.5, { left: 20 })
			.to(text, 0.5, { opacity: 1, left: 5, ease: Back.easeInOut, delay: -0.6 })
			.to(textAndLogo, 1, { left: -300 + `px`, ease: Power4.easeInOut, delay: 1 })

	}, 2000);
}

function displayPage3() {
	setTimeout(function () {
		nextBackground.style.backgroundImage = images[1].img;
		textNext.style.backgroundImage = images[2].text;
		tl
			.set(nextBackground, { left: 100 + `%` }, 0)
			.set(logoNext, { left: 1000 + `px`, delay: 1, immediateRender: false })
			.set(textNext, { left: 200 + `%`, delay: 1 })
			.to(nextBackground, 1, { x: - 300, ease: Power4.easeInOut, delay: -3 })
			.to(logoNext, 0.4, { opacity: 1, left: -100, delay: -1.5, ease: Power4.easeInOut })
			.to(textNext, 0.4, { opacity: 1, left: 5, ease: Bounce.easeOut, delay: -1 })



	}, 3000);
}
function displayPage4() {
	setTimeout(function () {
		textNext.style.backgroundImage = images[3].text1;
		secondText.style.backgroundImage = images[3].text2;
		nextBackground.style.backgroundImage = images[3].img;

		tl

			.set(logoNext, { left: -1000, delay: -1, immediateRender: false })
			.set(secondText, { top: -1000 + `%`, delay: 1.3 })
			.to(nextBackground, 0.8, { backgroundColor: `rbga(25, 30, 0, 0.5)`, immediateRender: true })
			.set(nextBackground, {
				transformOrigin: "right", scale: 2, ease: Power4.easeInOut, delay: -6, immediateRender: true
			})
			.to(textNext, 0.3, { top: 5, left: 5, opacity: 1, delay: 1 })
			.to(secondText, 0.3, { opacity: 1, left: 4, top: 20, delay: 2 })
			.to(nextBackground, 3, { scale: 1, ease: Power4.easeInOut, delay: -6 })
			.to(logoNext, 0.5, { /* opacity: 1, */ left: 20, delay: 1 })
			.to(button, 1, { opacity: 1, right: 20 })
			.to([button, textNext], 2, { rotationY: 15, z: 100, yoyo: true, repeat: 2, delay: 0.5 });
		$("#button").hover(redOver, redOut);
		function redOver() {
			TweenMax.to("#button", 1, {
				className: "+=redGlow"
			})
		}
		function redOut() {
			TweenMax.to("#button", 1, {
				className: "-=redGlow",
			}, "+=1");
		}



	}, 9200);
}








