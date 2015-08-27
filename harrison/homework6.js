//Problem 1:
//a)

function Ctor() {
  this.a = 0;
  this.b = 1;
};

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

//console.log(obj3);    //obj3 has the same properties and values
                      //as obj1 and obj2

obj1.c = 2;           //obj2 will not have a c property. Only onj1 will

Ctor.prototype.d = 3;

//console.log(obj1, obj2, obj3);   //None of these have the property d
                                // because that prop belongs to the
                                // prototype. But all of these instances
                                // can access the property b/c it belongs
                                // to their prototype

/* b)
constructor A's prototype (and objA.__proto__) is an anonymous object
with the given properties and values, but B's (and objB.__proto__) is
named B. It can be opened up in the console to find its constructor and
prototype, while A's prototype can't. Also, objB.constructor is function B()
while objA.constructor is function Object() */

//Problem 2
//a)

var Animal = (function() {      //Animal constructor wrapped in IIFE

  function Animal(name) {
    this.name = name;
  };

  Animal.prototype.move = function() {
    return 'walk';
  };

  Animal.prototype.layEgg = function() {
    var newEgg = new Egg();
    newEgg.creator = this.constructor;
    newEgg.constructor = Egg;
    return newEgg;
  };

  return Animal;

})();


var Bird = (function(){

  function Bird(name) {
    this.name = name;
  };

  Bird.prototype = new Animal();
  Bird.prototype.constructor = Bird;
  Bird.prototype.move = function() {
    return "fly";
  };
  Bird.prototype.hasWings = true;

  return Bird;
})();


var Fish = (function(){
    function Fish(name) {
    this.name = name;
  };

  Fish.prototype = new Animal();
  Fish.prototype.constructor = Fish;
  Fish.prototype.move = function() {
    return "swim";
  };
  return Fish;
})();


var Penguin = (function(){

  function Penguin(name) {
    this.name = name;
  };

  Penguin.prototype = new Bird();
  Penguin.prototype.constructor = Penguin;
  Penguin.prototype.move = function() {
    return "swim";
  };

  return Penguin;
})();


function Egg() {
  this.hatch = function(name) {
    var newAnimal = new this.creator();
    newAnimal.name = name;
    return newAnimal;
  };
};

var marcus = new Fish("Marcus");

caviar = marcus.layEgg();
//console.log(caviar.constructor);  //[Function: Egg]
louis = caviar.hatch('Louis');

//console.log(louis instanceof Fish, louis instanceof Animal);  //true true

var janice = new Penguin("Janice");

penguinEgg = janice.layEgg();

suzette = penguinEgg.hatch("Suzette");

//console.log(suzette instanceof Penguin, suzette instanceof Bird, suzette instanceof Animal, suzette.hasWings, suzette.move(), suzette.name);
    // true true true 'swim' 'Suzette'
