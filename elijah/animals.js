// part 2a and b

// animal constructor iffy
var Animal = (function() {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function() {
        return 'walk';
    }
    // lay an egg
    Animal.prototype.layegg = function() {
        // create new egg and attach species constructor to it
        var n = new Egg();
        n.species = this.constructor;
        return n;
    }
    // return constructor
    return Animal;
})()

// bird constructor iffy
var Bird = (function() {
    function Bird(name) {
        this.name = name;
    }
    // make bird a subclass of animal
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;
    // custom move and wings prop
    Bird.prototype.move = function() {
        return 'fly';
    }
    Bird.prototype.hasWings = true;
    // return constructor
    return Bird;
})()

// fish constructor iffy
var Fish = (function() {
    function Fish(name) {
        this.name = name;
    }
    // subclass of animal
    Fish.prototype = Object.create(Animal.prototype);
    Fish.prototype.constructor = Fish;
    // custom move
    Fish.prototype.move = function() {
        return 'swim';
    }
    // return constructor
    return Fish;
})()

// penguin constructor iffy
var Penguin = (function() {
    function Penguin(name) {
        this.name = name;
    }
    // subclass of Bird
    Penguin.prototype = Object.create(Bird.prototype);
    Penguin.prototype.constructor = Penguin;
    // custom move
    Penguin.prototype.move = function() {
        return Fish.prototype.move.call(this);
    }
    // return constructor
    return Penguin;
})()

// egg constructor iffy
var Egg = (function() {
    function Egg() {}
    // hatch method
    Egg.prototype.hatch = function(name) {
        // return a new animal of correct species
        return new this.species(name);
    }
    // return constructor
    return Egg;
})()
