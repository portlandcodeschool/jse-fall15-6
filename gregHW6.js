//
// ** 1. Constructor Basics
//

// 1a

function Ctor() {
	this.a = 0,
	this.b = 1
}

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);


obj1.constructor.prototype.d = 3;
obj1.__proto__.e = 4;
Ctor.prototype.f = 5;

// what's the fourth?
// all these will show up when accessed using <obj>.d,e,f format

// all of them have the same initial value, and setting them on the object will make an object-local attribute value
// obj1.d will return 3
// obj1.d = 99;
// obj1.d will return 99
// obj2.d will still be 3;

/*
To see what's where:

Object.getOwnPropertyNames(obj2);
["a", "b"]

Object.getOwnPropertyNames(obj2.__proto__);
["constructor", "d", "e", "f"]

Object.getOwnPropertyNames(obj2.constructor.prototype);
["constructor", "d", "e", "f"]

*/

// 1b

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};


function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

// B has a constructor function B();
// A doesn't, because it was overwritten by setting it to a new object.


//
// ** 2. Imaginary Menagerie
//

function Animal(name) {
	this.name = name;
	this.moveAction = "walk";
	//this.move = function() {return "walk"};
	// this.layEgg = function() {return new Egg(this.__proto__.constructor)};
	//this.Ctor = Object.getPrototypeOf(this).constructor;
	//this.layEgg = function() {return new Egg(this.Ctor)};
};

Animal.prototype.layEgg = function() {return new Egg(this.__proto__.constructor)};
Animal.prototype.move = function() {return this.moveAction};

function Bird(name) {
	Animal.call(this,name);
	this.hasWings = true;
	this.moveAction = "fly";
	//	this.move = function() {return "fly"}

}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

function Fish(name) {
	Animal.call(this,name);
	this.moveAction = "swim";
}

Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;

function Penguin(name) {
	Bird.call(this,name);
	this.moveAction = "swim";
}

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;


function Egg(Ctor) {
	this.Ctor = Ctor;
	this.hatch = function(eggName){return new this.Ctor(eggName)}
}


//
// Cards
//

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




// This IIFE should create a subclass (constructor TarotCard)
//  of a superclass (constructor Card)
var TarotCard = (function(){

	// Create subclass constructor:
	function Ctor(id,up) {
		// call superclass ctor first,
		Card.call(this,id);
		// then add subclass-specific properties
		this.upDown = up;
	}
	
	//



	// Replace default prototype so that subclass inherits from superclass...
	Ctor.prototype = Object.create(Card.prototype);
	Ctor.prototype.constructor = Ctor;


	// Override any inappropriate inherited instance methods...

	var proto = Ctor.prototype; //create alias for convenience
	proto.color = undefined;




	// Instance methods are inherited, but class methods and private arrays aren't;
	//  you'll need to create corresponding methods/arrays for this subclass...

	var suitNames = ['','Cups','Pentacles','Swords','Wands'];
	var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven',
					'Eight','Nine','Ten','Page','Knight','Queen','King'];

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

