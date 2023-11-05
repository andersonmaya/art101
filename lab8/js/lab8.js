// index.js - We were tasked with creating a new file to link into VScode, linking javascript in a new way, and develop an array.map function, replicating what we did in class!
// Author = Maya Anderson
// Date: November 4, 2023

function subtract9(x) {
    var results = x - 9;
    return results;
}

//test function
console.log("What is 13 - 9? ", subtract9(13));
console.log("What is 1989 - 9? ", subtract9(1989));
console.log("What is 87 - 9? ", subtract9(87));

var array = [13, 87, 1989, 10]
console.log("My array", array);

var result = array.map(subtract9);
// should return [4, 78, 1980, 1]
console.log("Subtracting 9 from each number in the array", result);

var result = array.map(function(x){
    return x + 9;
})

// should return [22, 96, 1998, 19]
console.log("Array adding 9", result);