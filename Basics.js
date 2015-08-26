// 1) Constructor basics [10%]

// a) Here's a sequence of simple exercises related to how constructors and prototypes
//work.

// First make a constructor named Ctor for an object that has properties a and b and
//initializes them to 0 and 1 respectively.
// Now, make two objects named obj1 and obj2 using Ctor.
// Now make a new object obj3 this way:

function Ctor() {
  this.a = 0;
  this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();
var obj3 = {};
Ctor.call(obj3);
//and check its properties.
obj3
//Object {a: 0, b: 1}

// Next, add a property c to obj1 with a value of 2. What will be the value of obj2.c?

obj1.c = 2;
//
//Now, add a property d with the value 3 to obj1's "proto" (the object which helps
//out when obj1 can't do something by itself). Remember that there are at least four
//ways of referring to that proto object.

obj1.constructor.prototype.d = 3;
// What are the values of obj1.d, obj2.d, and obj3.d? Can you explain the results?

//obj1.d = 3
//obj2.d = 3
//obj3.d = undefined

//obj3 was created using {}, so it will inherit from the Object's (the big Obj in the sky)
//prototype. obj1 and obj2 will inherit whatever is associated with Ctor, because they
//were created using "new Ctor".

// b) Consider this code:

function A() {};
//set default values for instances of A:
A.prototype = {
  num: 0,
  str: 'default'
};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

//There is a difference between the behaviors of objA and
//objB!Explain.:

//objA has a prototype of Object (the big Obj in the sky) and objB has a prototype of the function B.