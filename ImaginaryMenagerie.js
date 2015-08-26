// // 2) Imaginary Menagerie [15%]
//
// // a) Implement a simple taxonomy of four related classes, using a constructor for each:
//
// // Animal: every instance of an Animal should inherit a method called move(). For basic animals, this just returns the string "walk".
// // Bird: A subclass of Animal. Every Bird instance should return "fly" instead of "walk" when asked to move(). All Birds also have a property hasWings which is true.
// // Fish: Another subclass of Animal. A Fish instance will "swim" instead of "walk".
// // Penguin: A subclass of Bird. Penguins cannot fly and they should move like Fish.
// // Every instance of Animal and its subclasses should also have a personal name property which is not inherited. It should be set only within the constructor Animal, and each subclass should each ensure that its own constructor calls its superclass constructor as an initializer.
//
// // You should see these behaviors:

// new Animal("Simba").move(); // 'walk'
// new Fish("Nemo").move(); // 'swim'
// new Bird("Lulu").move(); // 'fly'
// var pengo = new Penguin("Pengo");
// pengo.name; // "Pengo"
// pengo.move(); //'swim'
// pengo.hasWings; //true;
// pengo instanceof Penguin; //true
// pengo instanceof Bird; //true
// pengo instanceof Animal; //true

var Animal = (function() {
  function Zoo(name) {
    this.name = name;
  }
  Zoo.prototype.move = function() {
    return "walk";
  };
  return Zoo;
})();

var hippo = new Animal('Frank');
console.log(hippo);

//This zoo's scope is not the same as the above zoo.  It has it's own.
var Bird = (function() {
  function BirdZoo(name) {
    Animal.call(this, name);
    this.name = name;
  }
  BirdZoo.prototype = Object.create(Animal.prototype);
  //overidding the move function but for only the birds.
  BirdZoo.prototype.constructor = BirdZoo;
  BirdZoo.prototype.move = function() {
    return "fly";
  };
  BirdZoo.prototype.wings = true;
  return BirdZoo;
})();

var Peacock = new Bird("Mark");
console.log(Peacock);

var Fish = (function() {
  function FishZoo(name) {
    Animal.call(this, name);
    this.name = name;
  }
  FishZoo.prototype = Object.create(Animal.prototype);
  FishZoo.prototype.constructor = FishZoo;
  FishZoo.prototype.move = function() {
    return "swim";
  };
  return FishZoo;
})();

var Salmon = new Fish("Penny");
console.log(Salmon);

console.log(hippo.move());

var Penguin = (function() {
  function PenguinZoo(name) {
    Animal.call(this, name);
    this.name = name;
  }
  PenguinZoo.prototype = Object.create(Bird.prototype);
  PenguinZoo.prototype.constructor = PenguinZoo;
  PenguinZoo.prototype.move = function() {
    return "swim";
  };
  return PenguinZoo;
})();

//Testing

var KingPenguin = new Penguin('Mr.Fife');
console.log(KingPenguin);

// b) Create a class Egg, whose instances have one method, hatch(name),
//which returns a new instance (named name) of the same species which laid
//the egg. Assume that every Animal can lay an egg with an instance method
//layEgg() which creates a new Egg instance. Try to solve this without
//subclassing Egg and without implementing layEgg and hatch more than once.

// You should see this behavior:
// var pengo = new Penguin("Pengo");
// var egg = pengo.layEgg();
// egg.constructor === Egg; //true
// var baby = egg.hatch("Penglet");
// baby instanceof Penguin; //true
//
// var nemo = new Fish("Nemo");
// egg = nemo.layEgg();
// egg.constructor === Egg; //true
// baby = egg.hatch("Nemolet");
// baby instanceof Fish; //true

var Nest = (function() {
  function Egg() {
    this.hatch = function(name) {
      return new Egg(name);
    };
  }

  Animal.prototype.layEgg = function() {
    return new Egg(this.constructor);
  };
  return Egg;
})();

//Testing

var pengo = new Penguin("Pengo");
console.log(pengo);
var egg = pengo.layEgg();
console.log(egg);
var nemo = new Fish("Nemo");
egg = nemo.layEgg();
console.log(nemo);
console.log(nemo.constructor);