Rock Paper Scissors

Understanding the problem:
To create a game of rock, paper, scissors in javascript in an html document.

Planning:
Made in script in an html document
Played from the console
Computer player is competitor
-Function called computerPlay that will randomly return rock, paper, or scissors
Single Round
-function takes two parameters - playerSelection and computerSelection
-returns a string that declares the winner and how
Function will return values and you will access it with console.log
Add another function called game() with the previous functions inside it
-have it play 5 rounds that keeps score and reports a winner and loser at the end
-don't have to use loops - just call your function playRound 5 times
-use console.log to display results of each round and information at the end
Use prompt() to get input from user

Pseudo Code:
Create random variable for computerPlay: 
Create user input using prompt()
Compare two arguments
-Rock beats Scissor
-Scissor beats Paper
-Paper beats Rock
Return winner
-
Then console.log winner
Return a counter
console.log counter
Rerun first function
Repeat for a total of 5 round

Outcome:
Ran into some issues with the console.log and defining the variables to return the information I was looking for. I didn't think it was working so piece by piece I made sure it was returning values. Started to understand functions a lot during that process. I got to a place where everything was returning variables so the console.log should be returning the correct results and that is when things clicked. Everything became super easy and I got it on a role quickly after that. The next part was understanding the loop but once I talked it over with my wife that was real easy! Then trying to get an outcome at the end took forever. I have it working but with an error with the button.