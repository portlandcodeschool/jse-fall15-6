// Greg Parkinson HW 6 Part 3b - ImageCard

//NOTE: I have to load the associated HTML, then load this in by hand.  Sorry
//
// Part 3 - Cards
//

// Card definition copied unchanged

var Card = (function(){

	// Constructor:
	function Ctor(id) {
		this.id = id;
	}
	var proto = Ctor.prototype; //create alias for convenience

	// Instance methods (shared via prototype, inherited by subclass instances):
	proto.isValid = function() {
		return ((typeof this.id)==="number")//correct type
			&& (this.id%1 === 0)  //integer
			&& (this.id >=0)  // non-negative
			&& (this.id < this.constructor.numCards()); //in range for card type
	}

	proto.rank = function() {
		return Math.floor(this.id/4)+1;
	}
	proto.suit = function() {
		return (this.id%4)+1;
	}
	proto.color = function() {
		var suitVal=this.suit();
        return suitVal && ((suitVal<3)? "red": "black");
	}
	proto.name = function() {
        var rankVal = this.rank();
        var suitVal = this.suit();
        return rankVal && suitVal &&
        	// Instead of referencing the private arrays specific to this class,
        	// use the class method (of the instance's constructor)
        	// so that a different array can be returned for each subclass
            (this.constructor.rankNames()[rankVal]
            +' of '
            +this.constructor.suitNames()[suitVal]);
	}

	// Private data:
	var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

	var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven',
					'Eight','Nine','Ten','Jack','Queen','King'];


	// Class methods (not inherited by subclasses):
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

	// Return constructor:
	return Ctor;
})(); //end superclass IIFE


// This IIFE should create a subclass (constructor ImageCard)
//  of a superclass (constructor Card)

//tested redering by using document.body as the container
var ImageCard = (function(){

	// Create subclass constructor:
	function Ctor(id) {
	// call superclass ctor first,
		Card.call(this,id);
	// then add subclass-specific properties
		//this.myHTML = '<img class="cardImage" src="../images/SVG-cards-1.3/' + this.name().replace(/ /g,"_") + '.svg';
	    this.render = function(container) {
	    	myImageName = this.name().replace(/ /g,"_"); //replace the spaces with underscores
            myImageLoc = '../images/SVG-cards-1.3/' + myImageName + '.svg'; //create the full file string
            myDOMImg = document.createElement("img") // create an image object
            myDOMImg.src = myImageLoc;  // set the source to the location
			container.appendChild(myDOMImg);  //add it to the container
	}
	}

// Replace default prototype so that subclass inherits from superclass...

	Ctor.prototype = Object.create(Card.prototype);
	Ctor.prototype.constructor = Ctor;

// Private data:

// change to lowercase, and numbers instead of text 

	var suitNames = ['','hearts','diamonds','spades','clubs'];

	var rankNames = ['','ace','2','3','4','5','6','7',
					'8','9','10','Jack','Queen','King'];


	// Class methods (not inherited by subclasses):
/*	Ctor.isCard = function(thing) {
		return (thing.constructor === this)
			&& thing.isValid(); 
	}*/

	Ctor.rankNames = function() {
		return rankNames.slice();
	}

	Ctor.suitNames = function() {
		return suitNames.slice();
	}


	return Ctor; //== ImageCard
})(); // end subclass IIFE
