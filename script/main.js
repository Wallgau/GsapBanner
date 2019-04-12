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



});
const displayPage1 = () => {
	document.getElementById('text').style.backgroundImage = images[0].text;
	document.getElementById('textAndLogo').style.backgroundImage = images[0].img;
	TweenMax.to('.logo', 0.5, { left: 20 })
	TweenMax.to('#text', 0.5, { left: 5, delay: 0.8 });
	TweenMax.from('#textAndLogo', { backgroundPosition: left, x: 0 })

}

setTimeout(function displayPage2() {
	document.getElementById('text').style.backgroundImage = images[1].text;
	document.getElementById('textAndLogo').style.backgroundImage = images[1].img;
	TweenLite.from('#textAndLogo', 3, { opacity: 0 });
	TweenLite.to('#textAndLogo', 3, { opacity: 1 });
	TweenMax.from('.logo', 0.5, { opacity: 0, left: -1000, delay: 0.5 });
	TweenMax.to('.logo', 0.5, { opacity: 1, left: 20, delay: 1 });
	TweenMax.from('#text', 0.5, { opacity: 0, left: 1000, delay: 1.5 });
	TweenMax.to('#text', 0.5, { left: 5, opacity: 1, delay: 1.5 });
}, 2000);







