// Write a piece of code that upon receiving string input from the user can 
// 1. count the letters in the string. //Done
// 2. record how many times each character in the string shows up
// 3. convert all the letters to lowercase and remove any character within the string that isn't an alphabet.
// (Remember to output the results of each of the above to the console/shell)

//FUnction
// function RandomString(stringinput){

// 	//Count the letters in the String
// 	let StringCount = stringinput.length;


	//How many times each character in the string shows up

		// //Get how many Times a character Shows Up in a String
		// let CharCount = stringinput.split('b').length;
	
	

	// //Get all Charcters in the string and Show How many Times They Showw Up
	// let str = stringinput;
	// for(let i=0; i < str.length; i++){
	// 	console.log(str.charAt(i));
	// }	




	// //Convert all letters to lowercase
	// let AllLower = stringinput.toLowerCase();


	// //Remove any Character that is'nt an alphabet
	// let NonNumber = AllLower.replace(/[^0-9a-z]/gi, "");


	
	


// 	//return the string
// 	return CharCount;



// }

// console.log(RandomString('Emeka'));

//Challenge Two
// Write a simple program to find the base 
// of a right-angle triangle when the area and height are given by 
// theBase(){

 // 	//Get user input (area)
 // 	let area = document.getElementById('area').value;

 // 	//Get user input (Height)
 // 	let height = document.getElementById('height').value;

 // 	//Calculate Base
 // 	let base = area * height;

 // 	let el = document.createElement('span').innerText(base);


 // 	answer = document.getElementById('answer').appendChild(el);

 // 	document.body.appendChild(answer);



 // }

// Create a random password generator that allows the user specify the 
// number of passwords to be generated and also to specify the length of 
// strings of the passwords they want to generate. The resulting password
//  should include letters, integers and special characters. 
// NOTE: Whatever letters the resulting password(s) will include 
// should be only vowels. This means a password like "34hefd/d$#$" is wrong.

// function generatePassword(){

// //Get User Input
//  let number = document.querySelector('#number').value;

//  let length = document.querySelector('#length').value;


	
//  //Display number of passwords based on userinput
//  for (i = 0; i < number; i++) {
 	 


//   	 //create random passwords 
//  	 let finalPassword = [];


//  	 //Characters to create Password From
//  	 let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+}{|';


//  	 //Password Length
//  	 let passwordLength = characters.length;

//  	 for( let z=0; z<length; z++){
//  	 	//generate password
//  	 	finalPassword.push(characters.charAt(Math.floor(Math.random() * passwordLength)));

//  	 }
//  	  console.log (finalPassword.join(''));
 	 
//  }

// }


	// Write a program that allows the user input a string of 5 
	// characters maximum, and obtain every possible anagram from
	//  the string while keeping the first character constant. 
	// E.g if the string is "girly"; a possible anagram 
	// will be glryi, gyilr, gyrli etc.


	// function generateWord(){

	// 	//Get word from use
	// 	let word = document.querySelector('#word').value;

	// 	 // return console.log(word);

	// 	 //validate string
	// 	 if(word.length > 5){
	// 	 	return console.log('Please Maximum numbe of  Characters allowed is 5 ');
	// 	 }

	// 	 //Generate Anagram
	// 	 function FindAllPermutations(word, index, buffer){
	// 	 	if(typeof word == 'string'){
	// 	 		word = word.split("");
	// 	 	}
	// 	 	if(typeof index == 'undefined'){
	// 	 		index = 0;
	// 	 	}
	// 	 	if(typeof buffer == 'undefined'){
	// 	 		buffer = [];
	// 	 	}
	// 	 	if(index >= word.length){
	// 	 		return buffer;
	// 	 	}

	// 	 	for(var i = index; i < word.length; i++){
	// 	 		buffer.push(Toggleletters(word,index, i));
	// 	 	}

	// 	 	return FindAllPermutations(str, index + 1, buffer);
	// 	 }


	// 	 function ToggleLetters(word, index1, index2){
	// 	 	if(index1 != index2){
	// 	 		var temp = word[index1];
	// 	 		word[index1] = str[index2];
	// 	 		word[index2] = temp;
	// 	 	}

	// 	 	return str.join("");
	// 	 }

	// 	 FindAllPermutations('the');





		




	// }




	// if ( string.length == 1 ) {
 //        return [ start + string ];
 //    } else {

 //        var returnResult = [];
 //        for (var i=0; i < string.length; i++) {
 //            var result = permutation (string[i], string.substr(0, i) + string.substr(i+1));
 //            for (var j=0; j<result.length; j++) {
 //                returnResult.push(start + result[j]);
 //            }
 //        }

 //        return returnResult;
 //    }
// }


// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. 

// Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ...
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]


//Solved
// let data1 = [17, 21, 23];
// let data2 = [12, 5, -5, 0, 4];

// function printForecast(arr){
// 	let str = '';
// 	for(let i=0; i < arr.length; i++){
		
// 		str  += `${arr[i]}°C in ${i + 1} days ... `;
		
// 	}

// 	console.log ('...' + str);
	
	
// }

// printForecast(data2);