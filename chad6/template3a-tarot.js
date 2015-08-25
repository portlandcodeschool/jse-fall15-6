// This IIFE should create a subclass (constructor TarotCard)
//  of a superclass (constructor Card)
var TarotCard = (function(){

	// Create subclass constructor:
	function Ctor(id) {
		// call superclass ctor first,
        Card.call(this,id);
		// then add subclass-specific properties
        this.upsideDown = false;
	}
	// Replace default prototype so that subclass inherits from superclass...
    Ctor.prototype = Object.create(Card.prototype);
    Ctor.prototype.constructor = Ctor;



	// Override any inappropriate inherited instance methods...
    Ctor.prototype.color = undefined;



	// Instance methods are inherited, but class methods and private arrays aren't;
	//  you'll need to create corresponding methods/arrays for this subclass...
    var suitNames = ['','Cups','Pentacles','Swords','Wands'];

	var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven',
					'Eight','Nine','Ten','Page','Knight','Queen','King'];

    Ctor.isCard = Card.isCard;

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
