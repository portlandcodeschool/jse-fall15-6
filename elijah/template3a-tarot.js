// tarot card constructor
var TarotCard = (function(){

    // Create subclass constructor:
    function Ctor(id) {
        Card.call(this,id);
        // add a boolean for card orientation
        this.rightSideUp = true;
    }
    Ctor.prototype = Object.create(Card.prototype);
    Ctor.prototype.constructor = Ctor;

    // Tarot cards have no color
    Ctor.prototype.color = null;

    // tarot rank and suit arrays
    var suitNames = ['', 'Cups', 'Pentacles', 'Swords', 'Wands'];
    var rankNames = ['', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
                    'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'];

    Ctor.isCard = function(thing) {
        return (thing.constructor === this) && thing.isValid();
    }

    Ctor.rankNames = function() {
        return rankNames.slice();
    }

    Ctor.suitNames = function() {
        return suitNames.slice();
    }
    // tarot has 56 cards
    Ctor.numCards = function() {
        return 56;
    }
    // return contructor
    return Ctor;
})();
