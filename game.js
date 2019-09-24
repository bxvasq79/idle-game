var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('Button', btnPress);
var whatever = new Button("click", btn);
function btn() {
  whatever.edit(randomID())
}  // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 800);   // Set up a loop

function btnPress() {
  score++;
  scr.edit(score);
}
