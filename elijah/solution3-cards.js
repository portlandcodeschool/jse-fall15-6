var Card = (function(){

    // Constructor:
    function Ctor(id) {
        this.id = id;
    }
    var proto = Ctor.prototype; //create alias for convenience

    // Instance methods (shared via prototype, inherited by subclass instances):
    proto.isValid = function() {
        return ((typeof this.id)==="number")//correct type
            && (this.id%1 === 0)  //integer
            && (this.id >=0)  // non-negative
            && (this.id < this.constructor.numCards()); //in range for card type
    }

    proto.rank = function() {
        return Math.floor(this.id/4)+1;
    }
    proto.suit = function() {
        return (this.id%4)+1;
    }
    proto.color = function() {
        var suitVal=this.suit();
        return suitVal && ((suitVal<3)? "red": "black");
    }
    proto.name = function() {
        var rankVal = this.rank();
        var suitVal = this.suit();
        return rankVal && suitVal &&
            // Instead of referencing the private arrays specific to this class,
            // use the class method (of the instance's constructor)
            // so that a different array can be returned for each subclass
            (this.constructor.rankNames()[rankVal]
            +' of '
            +this.constructor.suitNames()[suitVal]);
    }

    // Private data:
    var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

    var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven',
                    'Eight','Nine','Ten','Jack','Queen','King'];


    // Class methods (not inherited by subclasses):
    Ctor.isCard = function(thing) {
        return (thing.constructor === this)
            && thing.isValid();
    }

    Ctor.rankNames = function() {
        return rankNames.slice();
    }

    Ctor.suitNames = function() {
        return suitNames.slice();
    }

    Ctor.numCards = function() {
        return 52;
    }

    // Return constructor:
    return Ctor;
})(); //end superclass IIFE
