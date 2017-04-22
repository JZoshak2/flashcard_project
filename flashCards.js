// Basic Card

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}
var cardOne = new BasicCard("What is the capital of Spain?", "Madrid");

console.log(cardOne.front);
console.log(cardOne.back);


// Cloze Card

function ClozeCard(front, cloze) {
  this.front = front;
  this.cloze = cloze;
  this.partial = function() {
    var frontMaterial = this.front;
    var partial = frontMaterial.replace(cloze, "...");
    if(partial.indexOf("...") === -1) {
      console.log("Hmm couldn't do the cloze right, check if you messed up!");
    }
    else {
      return partial;
    }
  };
}

var cardTwo = new ClozeCard("Paris is the Capital of France", "Paris");
console.log(cardTwo.partial());
