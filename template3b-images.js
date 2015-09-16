// This IIFE should create a subclass (constructor ImageCard)
//  of a superclass (constructor Card)
var ImageCard = (function(){

	// Create subclass constructor:
	function ImageCtor(id) {
		// call superclass ctor first,
		Card.call(this, id);
		// then add subclass-specific properties
	}

	var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

	ImageCtor.prototype.render = function(container){
		if (typeof container === 'string') {
        container = document.getElementById(container);
    	}
	        return container;
	    var suitVal = this.suit();
	    var cardvalue = this.id + '_of_' + this.suitVal[suitNames];
	    var myHtml = '<img class = "cardImage" src="../images/SVG-cards-1.3/'+ cardvalue + '.svg">';
			document.body.innerHTML += myHtml;;




	}

	console.log(container);

	// Replace default prototype so that subclass inherits from superclass...

	ImageCtor.prototype = new Card;
	ImageCtor.prototype.constructor = ImageCtor;










	return ImageCtor; //== ImageCard
})(); // end subclass IIFE


//console.log(ImageCard);

function testImage() {
	// Sample code for displaying an image:
	var myHtml = '<img class="cardImage" src="images/SVG-cards-1.3/red_joker.svg">';
	document.body.innerHTML += myHtml;
}

window.onload = testImage;
