// ---------
// 1a)
// ---------

var Ctor = function() {
  this.a = 0;
  this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};

Ctor.call(obj3);

obj1.c = 2;

obj1.constructor.prototype.d = 3;

// obj1 and obj2 will both have a property d equal to 3 because we set that
// property on the prototype.
// obj3 however, will not have a d property because we did not use the
// new keyward when creating object 3, and so it does not share that prototype

// ---------
// 1b)
// ---------

// the difference is that for objA we overrode the prototype and set it equal
// to a new object with properties of num and str. With objB we simply added
// two properties to it's original prototype. So objA has a prototype of Object
// and objB has a prototype of B (with an extra property constructor
// referenceing the function that created it)

// ---------
// 2a and 2b)
// ---------

// Animal constructor
var Animal = function(name) {
  this.name = name;
};

Animal.prototype.move = function() { return 'walk' };
Animal.prototype.layEgg = function() { return new Egg(Animal) };

// Bird inherits from Animal
var Bird = function(name) {
  this.hasWings = true;
  this.name = name;
};

Bird.prototype = new Animal();
Bird.prototype.move = function() { return 'fly' };
Bird.prototype.layEgg = function() { return new Egg(Bird) };

// Fish inherits from Animal
var Fish = function(name) {
  this.hasGills = true;
  this.name = name;
};

Fish.prototype = new Animal();
Fish.prototype.move = function() { return 'swim' };
Fish.prototype.layEgg = function() { return new Egg(Fish) };

// Penguin inherits from Bird which inherits from Animal
var Penguin = function(name) {
  this.name = name;
};

Penguin.prototype = new Bird();
Penguin.prototype.move = function() { return 'swim' };
Penguin.prototype.layEgg = function() { return new Egg(Penguin) };

// Egg constructor
var Egg = function(parentAnimal) {
  this.parentAnimal = parentAnimal;
};

Egg.prototype.hatch = function(name) { return new this.parentAnimal(name) };

// ---------
// 3a)
// ---------

var Card = (function(){

	// Constructor:
	function Card(id) {
		this.id = id;
	}
	var proto = Card.prototype; //create alias for convenience

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
	Card.isCard = function(thing) {
		return (thing.constructor === this)
			&& thing.isValid();
	}

	Card.rankNames = function() {
		return rankNames.slice();
	}

	Card.suitNames = function() {
		return suitNames.slice();
	}

	Card.numCards = function() {
		return 52;
	}

	return Card;
})();

var TarotCard = (function() {
  function TarotCard (id) {
    this.id = id;
  }

  TarotCard.prototype = new Card();
  TarotCard.prototype.constructor = TarotCard;

  var proto = TarotCard.prototype;

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
	proto.color = undefined;
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
	var suitNames = ['','Cups','Pentacles','Swords','Wands'];

	var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven',
					'Eight','Nine','Ten','Page','Knight','Queen','King'];

  TarotCard.isCard = function(thing) {
		return (thing.constructor === this)
			&& thing.isValid();
	}

	TarotCard.rankNames = function() {
		return rankNames.slice();
	}

	TarotCard.suitNames = function() {
		return suitNames.slice();
	}

  TarotCard.numCards = function() {
		return 56;
	}

  return TarotCard;
})();

// ---------
// 3b)
// ---------

var ImageCard = (function() {
  function ImageCard (id) {
    this.id = id;
  }

  ImageCard.prototype = new Card();
  ImageCard.prototype.constructor = ImageCard;

  // pulls images named from their id
  // pass in an element id as a string
  ImageCard.prototype.render = function(elementId) {
    var image = document.createElement('img');
    image.src = 'img/' + this.id + '.svg';
    document.getElementById(elementId).appendChild(image);
  }

  return ImageCard;
})();
