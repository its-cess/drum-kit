
//created var to make it easier to put into our for loop below.
var numberOfDrumButtons = document.querySelectorAll(".drum").length

//this for loop is used to cyle through all of the 7 drum classes, without
//having to write this entire code out for each drum.
for (var i = 0; i < numberOfDrumButtons; i++) {


//add evenlistener for mouse clicks. captures the inner html of that click (the letter)
//then passes it through the makeSound function and buttonAnimation function.
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

}

//add eventListenter for key presses. then captures that event and runs it through the
//makeSound and buttonAnimation functions.
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

//this is the function that uses a switch statement to decided with sound/image to animate.
//it receives the key strokes or innerHTML letter from the previous sections.
function makeSound(key) {

  switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;

    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      break;

    case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      break;

    case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
      break;

    case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
      break;

    case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
      break;

      default: console.log(buttonInnerHTML);

    }
}

//function to add the button animations when pressed.
function buttonAnimation(currentKey) {
    //creating a variable to store the selected element in
    var activeButton = document.querySelector("." + currentKey);

    //added a class to the selected element to apply the .pressed CSS styling
    activeButton.classList.add("pressed");

    //add the set time out function to remove the .pressed CSS styling after
    //a set amount of time. giving the illusion the button is being "pressed and released".
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
}
