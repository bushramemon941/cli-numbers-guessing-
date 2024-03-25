#! /usr/bin/env node



import inquirer from "inquirer";


// computer will genrate a random number /done
//  user input for guessing number/done
//  computer user input with compiter generated number an show result/done

// const randomNumber = 13;
const randomNumber = Math.floor (Math.random() * 10 + 1);
// console.log(randomNumber)


const answers = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number", 
    message: "Please guess a number between 1-10"

}]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulation! you  guessed right number.")

}
else{
    console.log("you guessed wrong number.")
}
