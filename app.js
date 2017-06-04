//REFACTOR THIS Entire file, with questions that return results based on the
//content of the opening page. Add doc write methods as well as Loops!
// var user = prompt('');
//
//
//
'use strict';
var question1 = "(Y/N)Are I a Washington Native?";
var question2 = "(Y/N)Do I know how to read and right?";
var question3 = "(Y/N)Have I ever ridden a subway in Tokyo?";
var question4 = "(Y/N)Have I been to Ireland?";
var question5 = "(Y/N)Did i live in Toronto?";
var question6 = "(0-10)How many lizards do i own?";
var question7 = "What is my cats name? (Odin, Fat Bastard, Bad Mother Fucker)";
var userQuestion = [question1, question2, question3, question4, question5, question6, question7];
var correctAnswers = ["N","PUBLIC SCHOOL","Y","Y","N",0,"BAD MOTHER FUCKER",];

userGame();
function userGame(){
  for (var i = 0; i <= 6; i++){
    var answers = prompt(userQuestion[i]).toUpperCase();
    console.log("Question " + i + " User answered: " + answers);

    while(i === 5){
      if (answers === 0){
        alert("Correct");
        i++;
      }else if (answers < correctAnswers[i]){
        alert("How can i have negative lizards?")
        var answers = prompt(userQuestion[i]);
      } else {
        alert("Too high try again")
        var answers = prompt(userQuestion[i]);
      }
    }
    if (answers === correctAnswers[i]){
      alert("Alert you are not a complete idiot!")
    }else {
      alert("Wrong, Adjust your meds!")
    }
  }
};
