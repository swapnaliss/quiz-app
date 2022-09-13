var readlineSync = require("readline-sync");

var chalk = require("chalk");

var score = 0;

var highScores = [
  {
    name: "Swapnali",
    score: 3,
  },
  {
    name: "Vijay",
    score: 2,
  },
];

var questions = [
  {
    question: "Who is invented Javascript ?",
    answer: "Brendan Eich",
  },
  {
    question: "when it is invented ?",
    answer: "1995",
  },
  {
    question: "where was javascript invented ?",
    answer: "Netscape Communications Corporation",
  },
  {
    question: "What is the first name of JavaScript ?",
    answer: "Mocha",
  },
  {
    question: "Which came first Java or JavaScript?",
    answer: "Java",
  },
];

function welcome() {
  var userName = readlineSync.question("what's your name ?");

  console.log("Welcome " + userName + " to do you know about JAVASCRIPT ?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    // branching
     console.log(chalk.green("right!"));
    score = score + 1;
   
  } else {
    console.log(chalk.red("wrong!"));
    
  }

  console.log("current score : ", score);
  console.log("----------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}
function showScores() {
  console.log("YAY! your score is: ", score);

  console.log(
    "check out the high scores , if you should be there ping me and i'll update it"
  );

  highScores.map((score) => console.log(score.name, " : ", score.score));
}
welcome();
game();
showScores();