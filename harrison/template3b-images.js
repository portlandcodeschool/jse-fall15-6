// This IIFE should create a subclass (constructor ImageCard)
//  of a superclass (constructor Card)
var ImageCard = (function(){

	// Create subclass constructor:
	function Ctor(id) {
		// call superclass ctor first,
		// then add subclass-specific properties
	}
	// Replace default prototype so that subclass inherits from superclass...















	return Ctor; //== ImageCard
})(); // end subclass IIFE


function testImage() {
	// Sample code for displaying an image:
	var myHtml = '<img class="cardImage" src="images/SVG-cards-1.3/red_joker.svg">';
	document.body.innerHTML += myHtml;
}

window.onload = testImage;