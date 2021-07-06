numberOfDrumButtons = document.querySelectorAll('.drum').length;

// here we iterate through every button which has the class .drum
// then we add the function to change the color of the font on the button when we click on each individual button
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    this.style.color = 'white'; // 'this' here represents the identity of the button that triggered the event
  });
}

const audio = new Audio('sounds/tom-1.mp3');
audio.play();
