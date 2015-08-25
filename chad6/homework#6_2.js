// Homework #6 part 2a

var Animal = (function() {
    function AnimalCtor(name) {
      this.name = name;
    }
  
    AnimalCtor.prototype.move = function() {
      return 'walk';
    }
    AnimalCtor.prototype.layEgg = function() {
      return new Egg(this.constructor);
    }
    
    function Egg(ctor) {
        this.hatch = function(name) {
          return new ctor(name);
        }
    }
  
    return AnimalCtor;
        
})()

var Fish = (function(){
    function FishCtor(name) {
      Animal.call(this, name);
    }
    FishCtor.prototype = Object.create(Animal.prototype);
    FishCtor.prototype.constructor = FishCtor;
    FishCtor.prototype.move = function() {
      return 'swim';
    }
  
    return FishCtor;
})()

var Bird = (function(){
    function BirdCtor(name) {
      Animal.call(this, name);    
      this.hasWings = true;
    
    }
    BirdCtor.prototype = Object.create(Animal.prototype);
    BirdCtor.prototype.constructor = BirdCtor;
    BirdCtor.prototype.move = function() {
      return 'fly';
    }
  
    return BirdCtor;
})()

var Penguin = (function(){
    function PengoCtor(name) {
      Animal.call(this, name);
    }
    PengoCtor.prototype = Object.create(Animal.prototype);
    PengoCtor.prototype.constructor = PengoCtor;
    PengoCtor.prototype.move = function() {
      return 'swim';
    }
  
    return PengoCtor;
})()











