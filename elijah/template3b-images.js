// part 3b
var ImageCard = (function(){
    function Ctor(id) {
        Card.call(this, id);
        // then add subclass-specific properties
        this.container = 'cardImage';
        this.render = function(container) {
            // XXX this works, but not exactly what is needed
            // add proper card image to DOM
            var html = '<img class="cardImage" src="images/SVG-cards-1.3/' + this.nameImage() + '.svg">';
            container.innerHTML += html;
        }
    }
    // subclass
    Ctor.prototype = Object.create(Card.prototype);
    Ctor.prototype.constructor = Ctor;

    // generate filename helper
    Ctor.prototype.nameImage = function() {
        // generate a proper filename for image
        var reg = /\s/g;
        return this.name().replace(reg, '_').toLowerCase();
    }

    // arrays, ranks are going to be changed to match filenames
    var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];
    var rankNames = ['','Ace','2','3','4','5','6','7',
                    '8','9','10','Jack','Queen','King'];

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

    // return contructor
    return Ctor;
})();
