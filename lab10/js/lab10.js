/*
   lab.js 
   This simple JavaScript/jQuery script uses buttons to modify some elements on the page
   Requirements: jQuery must be loaded for this script to work.
   Author: Maya Anderson
   Date: 2023
*/

function generateRandomText() {
  const text = "In a world of boys he's a, gentleman.";
  const min = 3;
  const max = 200;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});