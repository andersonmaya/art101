/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Maya Anderson
   Date: 9 November 2023
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(.special){
    var toggleClass="btn btn-secondary-highlight-button"
    $("#challenge").toggleClass("special");
});

