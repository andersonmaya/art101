//Author: Maya Anderosn
//Created: 23 November 2023
// attach click handler to submit button

console.log("Let us ascertain your seasonal aura")

//Return Summer, Spring, Fall, Winter

function seasonSort(str){
    var len = str.length;
    var mod= len % 4;

    if (mod == 0) {
        return "FALL"
    }
    else if (mod == 1) {
        return "WINTER"
    }
    else if (mod == 2) {
        return "SPRING"
    }
    else if (mod == 3) {
        return "SUMMER"
    }
    return season;
}



$("#button").click(function(){
    var str = $("#input").val()

    var urSzn = seasonSort(str);

    newText = "Your aura dictates your season is " + urSzn + "!";
    $("#title").html(newText);
})

