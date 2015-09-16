// 1A -   First make a constructor named _Ctor_ for an object that has properties _a_ and _b_ and initializes them to 0 and 1 respectively.

var Ctor = function (a,b){
    this.a = 0,
    this.b = 1,

}

//-   Now, make two objects named _obj1_ and _obj2_ using _Ctor_.

var obj1 = new Ctor();
var obj2 = new Ctor();

//-   Now make a new object _obj3_ this way:

var obj3 = {};
Ctor.call(obj3);

//    and check its properties.
// obj3 is coming up as undefined?

//-   Next, add a property _c_ to _obj1_ with a value of 2.  What will be the value of _obj2.c_?

obj1.c = 2;

obj2.c = undefined

//-   Now, add a property _d_ with the value 3 to _obj1_'s "proto" (the object which helps out when _obj1_ can't do something by itself).  Remember that there are at least four ways of referring to that proto object.
//-   What are the values of _obj1.d_, _obj2.d_, and _obj3.d_? Can you explain the results?

obj1.prototype.d = 3;

// I suspect they will all have properties d:3

// 1B Consider this code:

```
function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();
```

//There is a difference between the behaviors of `objA` and `objB`!  Explain.

//objA seems to have "Object" as it's prototype, whereas objB has a constructor function B() for it's prototype.
//Is objA adjusting the values of the "Object" while B is working on a specific constructor?


