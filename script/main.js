const tl = new TimelineLite();
const text = document.getElementById('text');
const textAndLogo = document.getElementById('textAndLogo');
const nextBackground = document.getElementById('nextBackground')
const logo = document.getElementById('logo');
const secondText = document.getElementById('secondText');
const images = [{
	img: `url('./images/image1.jpg')`,
	alt: "women pushing the seat car",
	class: 'page1',
	text: `url('./images/text1.png')`
},
{
	img: `url('images/image2.jpg')`,
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
	displayPage1();
	displayPage2();
	displayPage3();
	displayPage4();



});

function displayPage1() {
	text.style.backgroundImage = images[0].text;
	textAndLogo.style.backgroundImage = images[0].img;
	tl.to(logo, 0.5, { left: -1000 }).to(logo, 0.5, { left: 20 }).to(text, 0.5, { left: 5, delay: 0.8 }, textAndLogo, 0.5, { left: 0 })

}

function displayPage2() {
	setTimeout(function () {
		text.style.backgroundImage = images[1].text;
		textAndLogo.style.backgroundImage = images[1].img;
		nextBackground.style.backgroundImage = images[2].img;
		tl
			.set(textAndLogo, { opacity: 0, left: 0 })
			.set(logo, { opacity: 0, left: -1000 })
			.set(text, { opacity: 0, left: 1000 })
			.to(textAndLogo, 1.5, { opacity: 1 })
			.to(logo, 0.5, { opacity: 1, left: 20, delay: 0.5 })
			.to(text, 0.5, { opacity: 1, left: 5, delay: 0.6 })
			.to(textAndLogo, 1, { left: -300 + `px`, delay: 3 })

	}, 2000);
}


function displayPage3() {
	setTimeout(function () {
		text.style.backgroundImage = images[2].text;
		nextBackground.style.backgroundImage = images[2].img;
		tl

			.set(nextBackground, { left: 100 + `%` }, 0)
			.set(logo, { opacity: 0, left: -100 + `%`, delay: 1 })
			.set(text, { opacity: 0, left: 100 + `%`, delay: 1.5 })
			.to(nextBackground, 1, { x: - 300, delay: -3.5 })
			.to(logo, 0.5, { opacity: 1, left: 20 })
			.to(text, 0.5, { left: 5, opacity: 1, top: 0 })
			.to($('.slide'), 3, { x: -300 })


	}, 2000);
}
function displayPage4() {
	setTimeout(function () {
		text.style.backgroundImage = images[3].text1;
		secondText.style.backgroundImage = images[3].text2;
		nextBackground.style.backgroundImage = images[3].img;
		tl

			.set(logo, { opacity: 0, left: -100, delay: 1 })
			.set(text, { opacity: 0, left: 100, delay: 1.5 })
			.to(nextBackground, 3, { scale: 1, backgroundSize: "+= 100% +=100%", delay: 3 })
			.to(logo, 0.5, { opacity: 1, left: 20, delay: 1.2 })
			.to(text, 0.5, { left: 5, opacity: 1, top: 0, delay: 1.3 })

	}, 10000);
}









