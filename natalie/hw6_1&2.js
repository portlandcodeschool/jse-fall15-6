//1a

var Ctor = function() {
  this.a = 0;
  this.b = 1;
}

var obj1 = new Ctor()
var obj2 = new Ctor()

var obj3 = {};
Ctor.call(obj3);

obj1.c = 2;
//adding property c with a value of 2 to obj1 did not add a property of c to obj2

Ctor.prototype.d = 3;

//obj1 looks like {a:0, b:1, c:2} and then has d:3 in its prototype object.
//a:0 and b:1 were set in the main object when obj1 was created as a new Ctor.
//c:2 was added when we set obj1.c to 2.  It has d:3 as a property in the prototype
//object when we set the d property in Ctor's prototype object to 3.  Any object created
//with the Ctor constructor will have the property d:3 in its prototype object.

//obj2 looks like {a:0, b:1} and then has d:3 in its prototype object because obj2 was created
//with the Ctor constructor.  It does not have a c property because we only added that to
//the obj1 object.

//obj3 looks like {a:0, b:1}. Since it was not created with the Ctor constructor, it
//does not have the d property in its prototype object and the c property was only added
//to obj1.


//1b

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

//objA has an additional prototype object that is set that has properties num:0 and str: 'default'.
//The value for the __proto__ property is Object, rather than a name we defined.  This prototype
//object does not have a constructor.


function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

//objB has an additional prototype object that is named B. It has the num:0 and str:default properties
//but it also has a constructor property where the constructor is function B()

//2a

function Animal(name) {
  this.name = name;
}

Animal.prototype.move = function() {
  return 'walk';
}

function Bird(name) {
  Animal.call(this,name);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.move = function() {
  return "fly";
}
Bird.prototype.hasWings = true;

function Fish(name) {
  Animal.call(this,name);
}

Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;
Fish.prototype.move = function() {
  return "swim";
}

function Penguin(name) {
  Bird.call(this,name);
}

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.move = Fish.prototype.move;

function Egg(WhichAnimal) {
  this.hatch = function(name) {
    return new WhichAnimal(name);
  }
}

Animal.prototype.layEgg = function() {
  return new Egg(this.constructor);
}
