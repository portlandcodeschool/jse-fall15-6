// constructor basics
// part a

// constructor
var Ctor = function() {
    // create some properties
    this.a = 0;
    this.b = 1;
}

// build a few new objects with Ctor
var obj1 = new Ctor, obj2 = new Ctor;
// build a third with call
var obj3 = {};
Ctor.call(obj3);

// check properties
console.log("obj1: " + Object.keys(obj1));
console.log("obj2: " + Object.keys(obj2));
console.log("obj3: " + Object.keys(obj3));

// add some properties
obj1.c = 2;
// check obj2
console.log("obj2.c: " + obj2.c); // undefined

// add property to obj1's proto
obj1.constructor.prototype.d = 3;
// check for this property in all created objs
console.log("obj1.d: " + obj1.d); // 3
console.log("obj2.d: " + obj2.d); // 3
console.log("obj3.d: " + obj3.d); // undefined

/* RESULTS:
    obj1 and obj2 share the Ctor prototype
    while obj3 has the Object prototype
    any changes made to the Ctor proto will not be inherited by obj3
 */

// part b

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

/* EXPLAIN:
 * XXX
 * objB has constructor B(), something to do with the invocation?
 */
