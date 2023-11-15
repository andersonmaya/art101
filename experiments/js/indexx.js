// indexx.js
// 15 November 2023
//Author: Maya Anderson

$("#my-button").click(function(){
    console.log("Button clicked");
    var name = prompt("What is your name?:");
    console.log("Prompt Returned: " + name);
    newText = "Hi " + name + "!";
    $("#title").html(newText);
});