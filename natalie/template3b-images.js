// This IIFE should create a subclass (constructor ImageCard)
//  of a superclass (constructor Card)
var ImageCard = (function(){

	// Create subclass constructor:
	function Ctor(id) {
		Card.call(this,id);
		this.render = function(container) {
			var cardImg = document.createElement('img');
			cardImg.className = 'cardImage';
			cardImg.src = "../images/SVG-cards-1.3/" + this.fileName();
			var mydiv = document.getElementById(container);
			mydiv.appendChild(cardImg);
		}
		// then add subclass-specific properties
	}
	// Replace default prototype so that subclass inherits from superclass...
	Ctor.prototype = Object.create(Card.prototype);
	Ctor.prototype.constructor = Ctor;

	proto = Ctor.prototype;

	proto.fileName = function() {
    var rankVal = this.rank();
    var suitVal = this.suit();
    return rankVal && suitVal &&
      (this.constructor.rankNames()[rankVal]
      +'_of_'
      +this.constructor.suitNames()[suitVal]
		  +'.svg');
	}

	var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

	var rankNames = ['','Ace','2','3','4','5','6','7',
					'8','9','10','Jack','Queen','King'];

	Ctor.isCard = function(thing) {
		return (thing.constructor === this)
		&& thing.isValid();
	}

	Ctor.rankNames = function() {
		return rankNames.slice();
	}

	Ctor.suitNames = function() {
		return suitNames.slice();
	}

	Ctor.numCards = function() {
		return 52;
	}

	return Ctor; //== ImageCard
})(); // end subclass IIFE


function testImage() {
	// Sample code for displaying an image:
	var myHtml = '<img class="cardImage" src="../images/SVG-cards-1.3/red_joker.svg">';
	document.body.innerHTML += myHtml;
}

window.onload = testImage;
