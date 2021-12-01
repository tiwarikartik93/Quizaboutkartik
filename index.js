readlineSync = require('readline-sync');

var list = 
[{ques: "Where was Kartik born?",
  correctAnswer: "Ajmer"},
  
 {ques: "Do Kartik had any favourite singer? (yes/no)",
  correctAnswer: "no"},
    
 {ques: "What are the hobbies of kartik other than running?",
 correctAnswer: "Investing"},
    
     
 {ques: "From which school Kartik completed his schooling? (Goverment/ Private)",
 correctAnswer: "Government"},
    
 {ques: "Is Kartik living in jaipur in 2020? (yes/no)",
 correctAnswer: "yes"}]

 var score = 0;

function check(correctAnswer, answer)
{
  if (answer.toUpperCase() === correctAnswer.toUpperCase())
  {
    console.log("You are correct");
    score++;
  }
  else
    console.log("You are wrong");
  
  console.log("\n");
}

var username = readlineSync.question("Please enter your username: ");
console.log("Welcome", username)
console.log("\n")

for(var i = 0; i < list.length; i++)
{
  console.log(list[i].ques);
  var answer = readlineSync.question("Please enter your answer: ");
  check(list[i].correctAnswer, answer);
}

var highestScore = 4;

console.log("Your score is", score)
console.log("Till now the highest score is " + highestScore + ", scored by Vidya. If you scored more than this, please share screenshot with us.");