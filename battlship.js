
var location1 = 3;
var location2 = 4;
var location3 = 5;
 
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
 
while (isSunk == false) {
            guess = prompt("ready, aim, fire! (enter a number 1-6):");
}
 
if (guess > 0 || guess > 6) {
alert ("please enter a valid cell number");
}
else {
guesses = guesses + 1;
}
 
if (guess == location1 || guess == location2 || guess ==
location3) {
hits = hits + 1;
}
 
if (hits == 3) {
isSunk = true;
alert("you sank my battleship!");
}
 
var stats = "you took " + guesses + " guesses to sink the ship!" +
"which means you are shooting accuracy was " + (3/guesses);
alert(stats);

  