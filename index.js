var readlineSync = require("readline-sync");
const ch = require("chalk");
var score = 0;
var wrongAns = 0;
console.log(ch.bgRed(ch.white("How Well Do You Know")+" " + ch.underline.bold.black("DARK"+" !!")+" \n"))

var userName = readlineSync.question(ch.bgYellow("What's your name!!" + " \n") +"\n");

console.log(ch.bgYellow("\nWelcome!!" + " "+userName+ "\n"));

//About game section
console.log(ch.bgYellow("About the quiz:"))

console.log(ch.bgBlue("\n1.There are total 10 question \n 2.Each question is based on the famous netflix series"+" "+ "DARK"+"\n 3.Each question is of 1 mark"))

console.log(ch.bgBlue("\n\nSo let the game begin!!!\n\n"));

var highscore=[
  {
    name: "jane",
    score: 10
  },
   {
    name:"John",
    score: 10
  },
  {
    name: "minki",
    score: 9
  },
 
]



function quiz(ques,ans){
  var userAns = readlineSync.question(ch.cyanBright(ques))
  if( userAns === ans){
    score = score+1;
  }else{
   wrongAns = wrongAns+1
  }
}


questions = [
  {
   ques: "Who's father founded the Winden Power Plant?\n\n1.Claudia Tiedemann\n2.Helge Doppler.\n3.Regina Tiedemann.\n",
   ans:"2"
  },
  {
   ques: "How does Adam claim to have gotten those terrible scars?\n\n1.In the explosion at the end of season 2.\n2.Claudia threw acid at his face.\n3.Too much time travel.\n",
   ans:"3"
  },{
     ques:" What is the meaning of 'Sic Mundus Creatus Est'\n\n1.Thus the world ended.\n2.Thus the world is created.\n3.Create the world anew.\n",
     ans:"2"
   },{
    ques: "How many years into the past or future can one travel in a wormhole?\n\n1.30 years\n2.33 years\n3.11 years\n",
    ans:"2"
   },{

    ques:"Why did Ulrich decide to become a police officer?\n\n1.He looked up to Egon Tiedemann and wanted to be like him.\n2.He liked to feel power over people.\n3.He thought he could do a better job than Egon Tiedemann.\n",
    ans:"3"
  },{
    ques:" What is Aleksander Tiedemann's original last name?\n\n1.Kohler.\n2.Nielsen.\n3.Klaus.\n",
    ans:"1"
  },{
     ques:"What is the name of the book written by H.G. Tannhaus that discusses black holes and spacetime?\n\n1.A Journey Through Space\n2.A Journey Through Space & Time.\n3.A Journey Through Time & Space.\n",
     ans:"2"
  },{
    ques:"What is Adam's endgame?\n\n1.To destroy the world.\n2.To travel through time indefinitely.\n3.To create a world without time.\n",
    ans:"3"
  },{
   ques: " How is Jonas related to Martha?\n\n1.He's her nephew.\n2.He's her cousin.\n3.She's his niece.\n",
   ans:"1"
  },{
    ques:" How is the apocalypse finally brought about?\n\n1.Young Jonas and Claudia turn on the time machine in the caves.\n2.Elisabeth Doppler turns on the machine in 2053.\n3.All of the above.\n",
    ans:"3"
  },
]
for(var i=0;i<questions.length;i++){
  CurrentQues=questions[i]
  quiz(CurrentQues.ques,CurrentQues.ans);
  console.log("-----------------------")

}

console.log(ch.cyanBright("Your Total Score is: ")+ch.cyan(score));
if(score === 10){
  console.log(ch.red("Congrtaulations!!!")+"you have scored the"+ch.red(" highest!"))
}else{
  console.log(ch.red("Nice Try!!"))
}
console.log(ch.blue("You gave ") +ch.red(wrongAns) +ch.blue(" wrong answer" ))

console.log("\n*************************\n")




console.log(ch.magentaBright("\n*****The ScoreBoard!*****\n"))
for(var i=0;i<highscore.length;i++)
{

 var CurrentHigh=highscore[i];
 
  console.log(CurrentHigh.name,CurrentHigh.score);

  

}
console.log(ch.yellowBright("Send Me the screenshot if you beat the highest score!!"))

