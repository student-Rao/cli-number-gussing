#! /usr/bin/env node
import inquirer from "inquirer";

const RandomNumber=Math.floor(Math.random()*6 + 1);

const answer= await inquirer.prompt([
     {
        message:"Enter Your Number: ",
        type:"number",
        name:"MyNumber"
     }
])

if(RandomNumber===answer.MyNumber){
    console.log("Congratulation! You select correct number");
}else{
    console.log("You guessed wrong number");
    
}