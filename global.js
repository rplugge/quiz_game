var question1 = "When was the battle of 1942?";
var question1_answer = "a";

var question2 = "Who was the author of The Lord of The Rings series"
var question2_answer = "c"

var question3 = "Who was the first person to orbit the earth?"
var question3_answer = "b"

var question4 = "Who was the first person to kill Goku?"
var question4_answer = "d"

var questions = [question1, question2, question3, question4];

alert(question1);

var user_answer = prompt(" Choose the letter \n A: 1345 \n B: 1950 \n C: 2030 \n D: 1942");
var user_answer = user_answer.toLowerCase();

var score = 0;

if (user_answer == question1_answer) {
  alert("You guessed correctly!")
  score += 1
} else if (user_answer != question1_answer) {
  alert("Sorry, that was incorrect :(")
}

alert(question2);

var user_answer = prompt(" Choose the letter \n A: Samwise Gamgee \n B: Tracy Hickman \n C: J.R.R. Tolkien \n D: Harry Potter");
var user_answer = user_answer.toLowerCase();

if (user_answer == question2_answer) {
  alert("You guessed correctly!")
  score += 1
} else if (user_answer != question2_answer) {
  alert("Sorry, that was incorrect :(")
}

alert(question3);

var user_answer = prompt(" Choose the letter \n A: Buzz Aldrin \n B: Yuri Gagarin \n C: Jim Lovell \n D: Xenu");
var user_answer = user_answer.toLowerCase();

if (user_answer == question3_answer) {
  alert("You guessed correctly!")
  score += 1
} else if (user_answer != question3_answer) {
  alert("Sorry, that was incorrect :(")
}

alert(question4);

var user_answer = prompt(" Choose the letter \n A: Cell \n B: Raditz \n C: Vegeta \n D: Piccolo");
var user_answer = user_answer.toLowerCase();

if (user_answer == question4_answer) {
  alert("You guessed correctly!")
  score += 1
} else if (user_answer != question4_answer) {
  alert("Sorry, that was incorrect :(")
}

alert("You have a score of " + score + " ! You got " + score + " out of " + questions.length + " correct!" )