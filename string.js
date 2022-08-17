var myStr="JAVA SCRIPT"
console.log(myStr)
console.log(typeof(myStr))
// to display double string
var myStr="JAVA SCRIPT is a \'scripting\'language"
console.log(myStr)
var myStr2="JAVA SCRIPT is a \"scripting\"language"
console.log(myStr2)

// to check the length of a string
var text="ASDFGHJKLPOIUYTREWQZXCVBNM";
console.log(text.length);

// to get the character at a given position
var str="Apple, Banana, Kiwi";

console.log(str.charAt(10));

// to get a part of string we use slice(start,end)
var str="Apple, Banana, Kiwi";
console.log(str.slice(7,13));

// to change to lowercase
var str="Apple, Banana, Kiwi";

console.log(str.toLowerCase());

// to change to uppercase
var str="Apple, Banana, Kiwi";

console.log(str.toUpperCase());

// concat-it merges two or more strings
var firstStr='java';
var secondStr='language';
console.log(firstStr.concat('',secondStr));

// we use trim() to remove extra spaces
var strExtraSpaces='   hello     ';
console.log(strExtraSpaces.trim());
console.log(str.split('')); //split() entire arguments passed