var readlineSync = require("readline-sync");

var chalk = require('chalk');

var score =0;

//Data of Highscore

var highscore = [
  {
  name :"Shrey",
  score:"100"
  },
  {
  name :"Harsh",
  score:"90"
  }]
  


console.log(chalk.bgCyan("Welcome to a Quiz on Do You Know About Shrey! "))


var userName = readlineSync.question("What is your name? ");


console.log("Welcome "+chalk.redBright.underline(userName.toUpperCase())+"!");

console.log("OK, Let's Start\n");

//play function

function play(question ,answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLocaleUpperCase() ===answer.toLocaleUpperCase()){
    console.log(chalk.bgGreenBright("Right!"));
    score+=10;
    }
  else{
    console.log(chalk.bgRedBright("Wrong!"));
    //score-=1;
  }

  console.log("Current Score: ",score)
  console.log("----------------------")
  
}


var questions =[{
  question: "Where Do Shrey Live ?",
  answer :"lucknow"
}, {
  question:"What is Shrey's favourite superhero?",
  answer : "johnwick"
},
{
   question:"From Where did Shrey completed his class 12th?",
  answer : "cms"
},
{
   question:"What is Shrey's favourite color?",
  answer : "black"
},
{
   question:"Do Shrey have any Siblings?",
  answer : "yes"
},
{
  question:"Shrey spends his most of the time on which social media platform ?",
 answer : "instagram"
},
{
  question:"Shrey is Tea or a Coffee person?",
 answer : "coffee"
},
{
  question:"Shrey's favourite sports?",
 answer : "cricket"
},
{
  question:"Shrey's favourite IPL Team?",
 answer : "KKR"
},
{
  question:"Shrey was born in which year?",
 answer : "2002"
}

];

for(var i=0;i<questions.length;i++)
{
  var currentques = questions[i];
  play(currentques.question ,currentques.answer);
}

console.log(chalk.underline("Yay! your final  Score is :") + chalk.bgMagenta(score))

console.log("-----------------------------");

console.log(chalk.underline("TOP SCORERS"));

for(var i=0;i<highscore.length;i++)
{
  console.log(highscore[i]);
}

console.log("-----------------------------");

console.log("If your Score is Higher then the Top scorers then share the screenshot on shreymaurya2000@gmail.com")

console.log("-----------------------------");


console.log(chalk.bold.bgWhiteBright("Thank You for Playing this Quiz!"));

