// This IIFE should create a subclass (constructor TarotCard)
//  of a superclass (constructor Card)
var TarotCard = (function() {

  function Ctor(id) {
    var establish = Card.call(this, id);
    this.cardUp = true;
  }
  Ctor.isCard = Card.isCard;
  Ctor.prototype.constructor = Ctor;
  var methodProto = (Ctor.prototype = Object.create(Card.prototype));
  methodProto.constructor = Ctor;
  var suitNames = ['', "Cups", "Pentacles", "Swords", "Wands"];
  var rankNames = Card.rankNames();
  rankNames.splice(11, 1, "Page", "Knight");

  //done like solution above

  // Disable one superclass instance method:
  methodProto.color = undefined;

  Ctor.isCard = function(thing) {
    return (thing.constructor === this) && thing.isValid();
  };

  Ctor.rankNames = function() {
    return rankNames.slice();
  };

  Ctor.suitNames = function() {
    return suitNames.slice();
  };

  Ctor.numCards = function() {
    return 56; //56 cards in a deck
  };

  return Ctor;
})(); // end subclass IIFE
