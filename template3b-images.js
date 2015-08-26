// This IIFE should create a subclass (constructor ImageCard)
//  of a superclass (constructor Card)
var ImageCard = (function(){

    // Create subclass constructor:
    function Ctor(id) {
        // call superclass ctor first,
        Card.call(this, id);
        // then add subclass-specific properties
    
    }
    // Replace default prototype so that subclass inherits from superclass...
    Ctor.prototype = Object.create(Card.prototype);
    Ctor.prototype.constructor = Ctor;

    Ctor.prototype.render = function() {
      var myHtml = '<img class="cardImage" src="images/SVG-cards-1.3/' + this.imgName() + '.svg">';
      document.body.innerHTML += myHtml;
      console.log("Hello, I'm card number " + this.id + " and I'm the " + this.name());
    
    }

    var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

  
    var rankNames2 = ['','Ace','2','3','4','5','6','7',
                    '8','9','10','Jack','Queen','King'];

    //Class methods:
    Ctor.isCard = Card.isCard

    Ctor.numCards = function() {
        return 52;
    }
    
    Ctor.rankNames2 = function() {
        return rankNames2.slice();
    }

    Ctor.suitNames = function() {
        return suitNames.slice();
    }

    Ctor.prototype.imgName = function() {
        var rankVal = this.rank();
        var suitVal = this.suit();
        return rankVal && suitVal &&
            (this.constructor.rankNames2()[rankVal].toLowerCase() + '_of_' + this.constructor.suitNames()[suitVal].toLowerCase());
    }


    return Ctor; //== ImageCard
})(); // end subclass IIFE


function testImage() {
    // Sample code for displaying an image:
    var myHtml = '<img class="cardImage" src="images/SVG-cards-1.3/red_joker.svg">';
    document.body.innerHTML += myHtml;
}

window.onload = testImage;