// indexx.js
// 15 November 2023
//Author: Maya Anderson

$("#my-button").click(function(){
    console.log("Button clicked");
    var name = $("input").val()
    console.log("input: " + name);
    newText = "Hi " + name + "!";
    $("#title").html(newText);
});

