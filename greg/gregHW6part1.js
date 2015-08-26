// Greg Parkinson HW 6 Part 1


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