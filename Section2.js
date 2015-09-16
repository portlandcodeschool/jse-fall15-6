//**2) Imaginary Menagerie**
//A
var Animal = (function(){
    var Animal = function(name){
        move = function move(){
            return 'walk';
    };
};
})();

var Bird = (function(){
    function Bird(name){
        this.move = return 'fly';

        this.hasWings = true;
    };
    Bird.prototype = new Animal();
    Bird.prototype.constructor = Bird;

    return bird();

})();

var Fish = (function(){
    function Fish(name){
        this.move = return 'swim';

    }
    Fish.prototype = new Animal();
    Fish.prototype.constructor = Fish;

    return fish;
})();

var Penguin = (function(){
    function Penguin(name){
        this.move.prototype = fish();
        this.hasWings;

    }
    Penguin.prototype = new Bird();
    Penguin.prototype.constructor = Penguin
})

//B
var Egg = (function(){
    function Egg(_name_){
        hatch = new Egg(){
            return //returning new object instance?

        }

})

Animal.prototype.layEgg = function(){
    return new Egg();

}



