// Greg Parkinson HW 6 Part 2


//
// ** 2. Imaginary Menagerie
//

function Animal(name) {
	this.name = name;
	this.moveAction = "walk";

	// Moved the move method to the prototype and created moveAction attribute
	//this.move = function() {return "walk"};  

    // First implementation using __proto__
	//this.layEgg = function() {return new Egg(this.__proto__.constructor)};

	// Second try, could only make it work by storing the Ctor as a attibute.  
	// Ended up moving the first implementation into the prototype
	//this.Ctor = Object.getPrototypeOf(this).constructor;
	//this.layEgg = function() {return new Egg(this.Ctor)};
};

Animal.prototype.layEgg = function() {return new Egg(this.__proto__.constructor)};
Animal.prototype.move = function() {return this.moveAction};

function Bird(name) {
	Animal.call(this,name);
	this.hasWings = true;
	this.moveAction = "fly";
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

