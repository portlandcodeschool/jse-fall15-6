// This IIFE should create a subclass (constructor ImageCard)
//  of a superclass (constructor Card)
var ImageCard = (function(){

	// Create subclass constructor:
	function ImageCardCtor(id) {
		// call superclass ctor first,
		Card.call(this, id);
		// then add subclass-specific properties

		this.id = id;

		this.rank = function() {
			return Math.floor(this.id/4)+1;
		}

		this.suit = function() {
			return (this.id%4)+1;
		}


	/*	this.getFileName = function() {
			var nameString = this.name();
			var nameArray = [];
			for (var i = 0; i< nameString.length; i++) {
					nameArray[nameArray.length] = nameString[i];
				}

			for (var i=0; i<nameString.length; i++) {
				if (nameArray[i+1] === " ") {
					nameArray[i+1] = "_";
				}
			}
			for (var i=0;i<nameString.length;i++) {
				nameString[i] = nameArray[i];
			}
			return nameString += '.svg';
		}; */

		this.getFileName = function() {
	        var rankVal = this.rank();
	        var suitVal = this.suit();
	        return rankVal && suitVal &&
	        	// Instead of referencing the private arrays specific to this class,
	        	// use the class method (of the instance's constructor)
	        	// so that a different array can be returned for each subclass
							(this.constructor.rankNames()[rankVal]
	            +'_of_'
	            +this.constructor.suitNames()[suitVal])
							+ ".svg>";
		};

		this.render = function(container) {
			var element;
			if (typeof container === "string"){
				element = document.getElementByID(container);
			} else {
				element = container;
			}

			var imageHTML = "<img class = 'cardImage' src= images/SVG-cards-1.3/";
			imageHTML += this.getFileName();
			document.body.innerHTML = imageHTML;

	};


	// Replace default prototype so that subclass inherits from superclass...

		ImageCardCtor.prototype = new Card();
		ImageCardCtor.prototype.constructor = ImageCardCtor;




// Private arrays for ImageCard
		var suitNames = ['','hearts','diamonds','spades','clubs'];

		var rankNames = ['','ace','2','3','4','5','6','7',
						'8','9','10','jack','queen','king'];


//Constructor methods:

ImageCardCtor.isCard = function(thing) {
	return (thing.constructor === this)
		&& thing.isValid();
}

ImageCardCtor.rankNames = function() {
	return rankNames.slice();
}

ImageCardCtor.suitNames = function() {
	return suitNames.slice();
}

ImageCardCtor.numCards = function() {
	return 52;
};


};

	return ImageCardCtor; //== ImageCard
})(); // end subclass IIFE

var card1 = new ImageCard(1);

function testImage() {
	// Sample code for displaying an image:
	var myHtml = '<img class="cardImage" src="images/SVG-cards-1.3/red_joker.svg">';
	document.body.innerHTML += myHtml;
}

window.onload = testImage;
