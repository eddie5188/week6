// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY


var Card1 = React.createClass({
render: function() {
  return (
    <div className="details col-sm-2">
        <div>
          <h1><img className="poster img-responsive" src={"http://golearntocode.com/images/cards/"+this.props.card1+".png"} /></h1>
        </div>
    </div>
  )
}
})

var Card2 = React.createClass({
render: function() {
  return (
    <div className="details col-sm-2">
        <div>
          <h1><img className="poster img-responsive" src={"http://golearntocode.com/images/cards/"+this.props.card2+".png"} /></h1>
        </div>
    </div>
  )
}
})

var Card3 = React.createClass({
render: function() {
  return (
    <div className="details col-sm-2">
        <div>
          <h1><img className="poster img-responsive" src={"http://golearntocode.com/images/cards/"+this.props.card3+".png"} /></h1>
        </div>
    </div>
  )
}
})

var Card4 = React.createClass({
render: function() {
  return (
    <div className="details col-sm-2">
        <div>
          <h1><img className="poster img-responsive" src={"http://golearntocode.com/images/cards/"+this.props.card4+".png"} /></h1>
        </div>
    </div>
  )
}
})

var Card5 = React.createClass({
render: function() {
  return (
    <div className="details col-sm-2">
        <div>
          <h1><img className="poster img-responsive" src={"http://golearntocode.com/images/cards/"+this.props.card5+".png"} /></h1>
        </div>
    </div>
  )
}
})

var App = React.createClass({
  getInitialState: function(){
    return {
      card1: "ace_of_hearts",
      card2: "ace_of_hearts",
      card3: "ace_of_hearts",
      card4: "ace_of_hearts",
      card5: "ace_of_hearts"
    }
  },
  deal: function() {
  var deck = window.getDeck().shuffle()
  this.setState({
    card1: deck[0],
    card2: deck[1],
    card3: deck[2],
    card4: deck[3],
    card5: deck[4]
  })
},
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <Card1 card1={this.state.card1}/>
          <Card2 card2={this.state.card2}/>
          <Card3 card3={this.state.card3}/>
          <Card4 card4={this.state.card4}/>
          <Card5 card5={this.state.card5}/>
          <div className="col-sm-2">
            <h1><a href="#" className="btn btn-success" onClick={this.deal}>Deal!</a></h1>
          </div>

        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
