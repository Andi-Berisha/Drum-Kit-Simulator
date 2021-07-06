// -- Event Listeners --

numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);
  });
}

// this adds an event listener to the whole document
document.addEventListener('keydown', function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);

  //same thing as above except the sound is placed depending on the button that is clicked
});

// -- Functions --

function makeSound(button) {
  switch (button) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}

function buttonAnimation(currentKey) {
  //here we are pointing toward the class the the button exists in
  //by concatinating a class selector "." with the key that was pressed

  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  
  //when adding a class the .pressed selector notation is not neseccary
}
