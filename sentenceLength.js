/*
This is a program that will display a prompt window asking the user to enter a sentence to test the program and ensure that it is working properly. After the user enters a sentence, the program will display an alert window that tells the user what the longest word is, how many letters are in that word, and the length of the sentence.
*/



//This is a variable that has been assigned the users input from a prompt window.
var strTest = window.prompt("Please enter your sentence below to test the program and ensure that it works properly.");
//This is a function that determines the length of a sentence, the longest word in the sentence, and how long the sentence is. 
var strLength = function(str){
    var long = 0;
    var word = null
    //This will split the string/sentence everytime it finds an empty space and store them in an array of strings. Each item being one word.
    var strSplit = str.split(" ");
    //This loop will loop through the array and find the longest word
     for(var i = 0 ; i < strSplit.length ; i++){
        if(long < strSplit[i].length){
            long = strSplit[i].length;
            word = strSplit[i];
        }
    }
    return[word, long, strSplit.length];
}

//An alert window pops up displaying the result - the longest word, how long the word is, and how long the sentence itself is. 
window.alert("The longest word in the sentence is "+strLength(strTest)[0]+" with a length of "+strLength(strTest)[1]+" letters. The length of the sentence itself is "+strLength(strTest)[2]+" words");




