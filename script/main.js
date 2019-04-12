const images = [{
	img: `url('images/image1.jpg')`,
	alt: "women pushing the seat car",
	class: 'page1'
},
{
	img: `url('images/image2.jpg')`,
	alt: "kids on the front side car",
	class: 'page2',
},
{
	img: `url('images/image3.jpg')`,
	alt: "rear side car, parents putting luggages inside of the car",
	class: 'page3',
},
{
	img: `url('images/image4.jpg')`,
	alt: "entire car,around the car tha family, kid in front side and parent in the rear side",
	class: 'page4',
}]


// ===================DOCUMENT READY===================

document.addEventListener('DOMContentLoaded', function () {
	displayPage1();


});
const displayPage1 = () => {
	console.log('start')

	const text = document.getElementById('text').child('p')
	text.innetHTML = `industry-exclusive stow'n go seating`;
	$('figure').css('background-image', `${images[0].img} `)
	console.log(images[0].img)
	TweenMax.staggerTo("figcaption p", 2, { left: 50 });
}








