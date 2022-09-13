var readlineSync = require("readline-sync");

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
welcome();