// homework #6 part 1a

function Ctor() {
  return {
    a: 0,
    b: 1
  }
}

var obj1 = Ctor()
undefined
var obj2 = Ctor()
undefined
var obj3 = {};
undefined
Ctor.call(obj3);
Object { a: 0, b: 1 } // .call adds properties to the obj3 object, but since
                      // it wasn't set to a var, they are immediately discarded.
obj1
Object { a: 0, b: 1 }
obj2
Object { a: 0, b: 1 }
obj3
Object {  }

obj1.c = 2; // this will not affect obj2, obj2.c will be undefined
2

obj2
Object { a: 0, b: 1 }
obj1
Object { a: 0, b: 1, c: 2 }
obj2.c
undefined

obj1.constructor.prototype.d = 3 // this will add a property _d_ to all objects
3                                // that have been created with obj1's constructor

obj1.d
3
obj2.d
3
obj3.d
3

// part 1b

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

// A sets the props in the prototype itself. B, using dot notation, 
// creates an object as a side effect of setting the props.










