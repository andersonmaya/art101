// lab9.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page.
// Requirements: jQuery must be loaded for this script to work.
// Author: Maya Anderson
// Date: November 12, 2023


// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Peanut Butter?</button>");
// add a click listener to the challenge button
console.log("challenge button clicked")
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});


// add button to problems section
$("#problems").append("<button id='button-problems'>Push for Pookie</button>");
// add a click listener to the problems button
console.log("problems button clicked")
$("#button-problems").click(function(){
    // now add (or subtract) the "highlight" class to the section
    $("#problems").toggleClass("pookie");
});


// add button to reflection section
$("#reflection").append("<button id='button-reflection'>More Peanut Butter?</button>");
// add a click listener to the reflection button
console.log("reflection button clicked")
$("#button-reflection").click(function(){
    // now add (or subtract) the "highlight" class to the section
    $("#reflection").toggleClass("special");
});


// add button to results section
$("#results").append("<button id='button-results'>Push for Pookie</button>");
// add a click listener to the results button
console.log("results button clicked")
$("#button-results").click(function(){
    // now add (or subtract) the "highlight" class to the section
    $("#results").toggleClass("pookie");
});