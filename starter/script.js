'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 14;
console.log(document.querySelector('.guess').value);*/

// we will 1st call the check button on click:-
/*document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});

// 3.
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// 5th step changing the score: go n check in else if statement
let score = 20;

let highscore = 0;

// 1.
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //   2. and 4th point is if guess is excatly equal to secret number

  //   When there is no input:
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    //  when player wins:-
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('.number').textContent = secretNumber; //10th step is to drag this line from outside to inside his if else statement

    document.querySelector('body').style.backgroundColor = '#60b347'; //7th step
    document.querySelector('.number').style.width = '30rem'; //8th step

    // We will do for Highscore = score:- 11th step
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //  when guess is too high:-
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score = score - 1; //5th step
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lost The Game';
      document.querySelector('.score').textContent = 0;
    } //6th step📈

    //  when the guess is too low:-
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lost The Game';
      document.querySelector('.score').textContent = 0;
    } //6th step
  }
});

// challenge#1:-
// 9th step:-
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('message').textContent = 'Start guessing...🤔';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //set it to empty string

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


*/
// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct Number🎉';
// document.querySelector('.guess').value;
// document.querySelector('.number').value;
// document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const message = document.querySelector('.message');

// check event

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈Too High';
    } else {
      document.querySelector('.message').textContent = 'You lost the game💥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉Too Low';
    } else {
      document.querySelector('.message').textContent = 'You lost the game💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again button

const newFeature = function () {
  console.log('Welcome to the application');
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...🤔';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
newFeature();
