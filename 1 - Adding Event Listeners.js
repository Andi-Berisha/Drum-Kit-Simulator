// exmple of anonymous function
let anonymous = function () {
  alert('I got clicked');
};

document.querySelector('button').addEventListener('click', function () {
  alert('I got clicked');
});

// we can use the ".drum" to point to every button with the word drum in its class name
//and then we can use 'querySelectorAll(".drum").length()' to find the length of all the buttons of that type
// then we make sure that when we iterate using the forloop thats the amount of buttons we iterate through

for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    alert('I got clicked');
  });
}

// we can also append the drum length to a variable like so

numberOfDrumButtons = document.querySelectorAll('.drum').length;

// and then use it in our for loop

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    alert('I got clicked');
  });
}
