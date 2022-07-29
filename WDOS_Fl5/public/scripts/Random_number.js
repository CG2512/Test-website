let Guess_count=0;
//Generate random number
let Real_number=Math.floor(Math.random() * 100 + 1)

//Reset everything
function Restart()
//Reset guess count
{    Guess_count=0;
   //Make new random number
   Real_number=Math.floor(Math.random() * 100 + 1);
   //Make result box disappear again
   document.getElementById("result_box").style.display='none'
   //  reset the result box and input field
    document.getElementById("guess_count").innerHTML=`You have guessed ${Guess_count} time`;
    document.getElementById("result_box").style.backgroundColor='white';
    document.getElementById("guessField").disabled = false;
   document.getElementById("EMCA_button1").disabled = false;
}

//main function for the game
function game(){
   //Get user input
   let Guess = document.getElementById("guessField").value;
   //Empty guess field
   document.getElementById("guessField").value='';
   //Check if user input is valid or not
   input_validation(Guess);

}
function input_validation(guess){
   //if input is not a number
   if (isNaN(guess)){
      alert("Input must be a number");

   }
   //if input is out of bound
   else if ((guess<1) || (guess>100)){
      alert("Input must be between 1 and 100");
   }
   //Valid input
   else{
      Random_number_guess(guess);
   }
}
//Main function for game comparison
function Random_number_guess(Guess) {
   
   


//When guessing, make the result box appear
    if(Guess_count==0)
    {
       document.getElementById("result_box").style.display='block';
    }
   
   // Measure the difference amount between user guess and number
   //to check how close guess is to the number

   //Check if the number of guesses count is 2 or lower for correct grammar when display result
   Guess_count++;
   if(Guess_count <2){
   document.getElementById("guess_count").innerHTML=`You have guessed ${Guess_count} time`;
   }

   else{
      document.getElementById("guess_count").innerHTML=`You have guessed ${Guess_count} times`;
   }
   

   //Distance number for checking how close is input to real number
   let distance= Guess-Real_number;
    
   // if guess is about 10 number or less away from real number
    if ((0<distance && distance<=10 ) || (-10<=distance && distance <0)) 
    {
       document.getElementById("result_box").style.backgroundColor='red';
    }
   // If guess is 30 number away from real number
    else if ( ( distance>30) || (distance<-30) ) 
    {
       document.getElementById("result_box").style.backgroundColor='blue';
    }
    //Guess is more than 10 number away but less than 30 number away
    else 
    {
      document.getElementById("result_box").style.backgroundColor='white';
    }
    // COrrect guess
   if (Guess == Real_number)
   {
    document.getElementById("result").innerHTML="  YOU ARE CORRECT";
    document.getElementById("result_box").style.backgroundColor='green';
    Game_over();
    
   }
   // Guess is higher than real num
   else if (Guess > Real_number)
   {
    document.getElementById("result").innerHTML=" NUMBER IS LOWER";
   //Guess is lower 
   }
   else if (Guess < Real_number)
   {
    document.getElementById("result").innerHTML="NUMBER IS HIGHER";
    
   }

   
   
   
}
// Disable the input field and guess button when game is done 
//Prevent weird error if user input more after game over
function Game_over()
{  
   document.getElementById("guessField").disabled = true;
   document.getElementById("EMCA_button1").disabled = true;
}
