var Creature = (function() {
	function Animal (name) {
		this.name = name;
	}

Animal.prototype.move = function() {
	return 'walk';
}

return Animal;

})() //end of iffy.

//THE BIRD//

function Bird (name) {	
	this.hasWings = true;
	this.move = function() {
		return 'fly';
		}
	Creature.call(this, name);
}
	
Bird.prototype = Object.create(Creature.prototype);
Bird.prototype.constructor = Bird;

//THE FISH//

function Fish (name) {	
	this.move = function() {
		return 'swim';
		}
	Creature.call(this, name);
}
	
Fish.prototype = Object.create(Creature.prototype);
Fish.prototype.constructor = Fish;

//THE PENGUIN//
function Penguin (name) {	
	this.hasWings = true;
	this.move = function() {
		return 'swim';
		}
	Creature.call(this, name);
}
	
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
