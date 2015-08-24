// function Ctor() {
// 	this.a = 0;
// 	this.b = 1;
// };

// var obj1 = new Ctor();
// var obj2 = new Ctor();

// var obj3 = {};
//     Ctor.call(obj3);

// obj1.c = 2;

// obj1.__proto__.d = 3;


// console.log(obj1)
// console.log(obj1.a)
// console.log(obj3)
// console.log(obj3.a)

// b: There is a difference between the behaviors of `objA` and `objB`!  Explain.
function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

// [answer] A.prototype stores the object as a key of prototype, while B.prototype stores the values in a constructor function of prototype. Therefor, they are stored as different types, A is an object and B a function. Prototype inheretence for A will not inheret anything more than what is in A because all prototypes inhereit from the Object. B will inherit from the function object first, then inheret from the Object if the requested value is not found. 


console.log(objA);
console.log(objB);