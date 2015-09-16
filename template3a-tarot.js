// This IIFE should create a subclass (constructor TarotCard)
//  of a superclass (constructor Card)
var TarotCard = (function(){

	// Create subclass constructor:
	function TarotCtor(id) {
		Card.call(this,id);

		// call superclass ctor first,
		// then add subclass-specific properties
	}


	TarotCtor.prototype = new Card();

	TarotCtor.prototype.constructor = TarotCtor;

	TarotCtor.prototype.numCards = function(){
		return 56;
	}

	// Replace default prototype so that subclass inherits from superclass...

//just for fun! ;)
	TarotCtor.prototype.orientation = function(){
			var val = Math.round(Math.random());
			if (val === 0){
				val = 'upsidedown';
			} else {
				val = 'right-side-up';
			}
			return val;
	}



	// Override any inappropriate inherited instance methods...
	TarotCtor.prototype.color = function(){
			return null;
		}

	TarotCtor.prototype.name = function() {
        var rankVal = this.rank();
        var suitVal = this.suit();
        return rankVal && suitVal &&
		(tarotRankNames[rankVal]
        +' of '
        +tarotSuitNames[suitVal]);
		}



	// Instance methods are inherited, but class methods and private arrays aren't;
	//  you'll need to create corresponding methods/arrays for this subclass...
	var tarotSuitNames = ['','Cups','Pentacles','Swords','Wands'];
	var tarotRankNames = ['','Ace','Two','Three','Four','Five','Six','Seven',
					'Eight','Nine','Ten','Page','Knight','Queen','King'];



	return TarotCtor; //== TarotCard
})(); // end subclass IIFE
