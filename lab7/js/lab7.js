// index.js - purpose and description here
// Author: Maya Anderson
// Created: 1 November

function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can change it!");
    console.log("userName =", userName);
  
    // Convert the user's name to lowercase and split it into an array of characters
    var nameArray = userName.toLowerCase().split('');
    console.log("nameArray =", nameArray);
  
    // Sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
  
    // Join the sorted array back into a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
  
    return nameSorted;
}
  //output
  document.writeln("Here is your New and Improved name!: ",
    sortUserName(), "</br>");