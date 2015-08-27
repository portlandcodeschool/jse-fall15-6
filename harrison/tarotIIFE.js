//My code works when Dan's Card IIFE is pasted in along with the testing suite.

// This IIFE should create a subclass (constructor TarotCard)
//  of a superclass (constructor Card)
var TarotCard = (function(){

	// Create subclass constructor:
	function Ctor(id) {
		Card.call(this, id); // call superclass ctor first,

		// then add subclass-specific properties

		this.isUpsideDown = false;
	}
	// Replace default prototype so that subclass inherits from superclass...

		Ctor.prototype = new Card();
		Ctor.prototype.constructor = Ctor;



	// Override any inappropriate inherited instance methods...
		Ctor.prototype.color = undefined;



	// Instance methods are inherited, but class methods and private arrays aren't;
	//  you'll need to create corresponding methods/arrays for this subclass...

	//Private data for Tarot cards:
	var suitNames = ['','Cups','Pentacles','Swords','Wands'];

	var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven',
					'Eight','Nine','Ten', 'Page', 'Knight','Queen','King'];


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
		return 56;
		}


	return Ctor; //== TarotCard
})(); // end subclass IIFE
