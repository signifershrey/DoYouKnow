var readlineSync = require("readline-sync");

var chalk = require('chalk');

var score =0;
//Data of Highscore


var highscore = [
  {
  name :"Shrey",
  score:"5"
  },
  {
  name :"XYz",
  score:"4"
  }]
  


console.log(chalk.bgCyan("Welcome to a Quiz on Do You Know About Shrey! "))


var userName = readlineSync.question("What is your name? ");


console.log("Welcome "+chalk.redBright(userName.toUpperCase())+"!");

console.log("Let's Start");

//play function

function play(question ,answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer){
    console.log(chalk.bgGreenBright("Right!"));
    score+=1;
    }
  else{
    console.log(chalk.bgRedBright("Wrong!"));
    //score-=1;
  }

  console.log("Current Score: ",score)
  console.log("-------------")
  
}

//play("Where Do i Live?" ,"Banglore")

//play("Who is your Favourite Superhero?" ,"Superman")

var questions =[{
  question: "Where Do Shrey Live ?",
  answer :"lucknow"
}, {
  question:"What is Shrey's favourite superhero?",
  answer : "superman"
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
   question:"Is Shrey is married?",
  answer : "no"
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


console.log(chalk.bold("Thank You for Playing this Quiz!"));

