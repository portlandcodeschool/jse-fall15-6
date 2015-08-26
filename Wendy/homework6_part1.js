
//HOMEWORK PART A//
function Ctor(a,b){
	this.a = 0;
	this.b = 1;
}

var obj1 = new Ctor(3,1)
var obj2 = new Ctor(1,22)


var obj3 = {};
Ctor.call(obj3);

obj1.c = 3;
3
obj1.c
3
obj2.c
undefined

obj1.constructor.prototype.d = 3;
3
obj1.d
3
obj2.d
3
obj3.d
undefined
//If I create an obj3 = new Ctor than the value of obj3.d is 3.
//Adding to the prototype then alters the original template-- the original Ctor.
//What's interesting is that if I experiment and write:
//Ctor.constructor.d=4, then type in obj1.d, the values is still 3.
//don't mess with the protoptype unless you really want it to be altered forever.

//HOMEWORK PART B//
//In function B, saying B.prototype.num= 0 is the same as saying this.prototype.num = 0.  It is a constructor function.  This means that 
//B will return actual instances of B.  
//In function A,  I think javaScript is trying to interpret it as a constructor and giving it some of the same behaviors but if one looks
//under the hood, we see that there is a lot less we can do with function A because it is not actually a constructor function.

//PART 2








