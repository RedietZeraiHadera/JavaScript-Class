//Write a function that takes a string as input and returns the shortest word in the string.
 
    function short(str){
    const words = str.split(' ');
    let shortestWord = words[0];
    for(let i=1;i<words.length;i++){
        if(words[i].length<shortestWord.length){
            shortestWord = words[i];
        }
    }
    return shortestWord
}
const str = "the girl is fat";
const shortest = short(str);
console.log(shortest);


//Write a function that takes a string as input and returns the first word in the string.

function first(str1){
    const word = str1.split(' ');
    let firstWord = word[0];
    return(firstWord)
}
const str1 = "Love is Light";
const fir = first(str1);
console.log(fir);

//Write a function that takes a string as input and 
//returns a new string with all the consonants removed.
// function removeConsonant(str2){
//     const vowels  ="aeiouAEIOU";
//     return str2.split("").filter(char => vowels.includes(char)).join("");
// }
//   console.log(removeConsonant( "I love Chocolate"));
function chooseVowel(str2){
    const vowel = "aeiouAEIOU";
    return str2.splt("").filter(Char=>vowel.includes(Char)).join("");
}
console.log(chooseVowel("I love you"));
  //Write a function that takes a string as input and 
  //returns a new string with all the vowels removed.
function removeVowels(str3){
    let vowel = "aeiouAEIOU";
    return str3.split("").filter(char=>!vowel.includes(char)).join("");
}
console.log(removeVowels("I love chocolate"));
















