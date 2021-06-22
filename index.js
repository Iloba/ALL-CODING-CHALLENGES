//Coding Challenge 1

//Mark Details
// const markHeight = 1.69;
// const markWeight = 78;

// //Johns Details
// const johnHeight = 1.95;
//  const johnWeight = 92;


// let markBMI =  markWeight / (markHeight**2);
// let johnBMI = johnWeight / (johnHeight**2);


// //Check if Mark BMI is Greater than John's
// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// console.log(markBMI);
// console.log(johnBMI);



//Coding Challeenge 2 😁
// if(markBMI > johnBMI){
//     console.log(`Mark has a BMI of ${markBMI} while John has a BMI of ${johnBMI}, So Mark's is greater`);
// }



//Template Literals

// console.log(`Awa
// December
// Lo
// Lomego`);

// const myname = 'Emeka';
// const age = '18';
// const job = 'Developer';

// console.log(`I'm ${myname}, an ${age} year old ${job} 🤦‍♀️` );
// console.log(`I'm ${age} years old`);
// console.log(`I'm a website ${job}`);


// const Age = prompt('How Old are you');

// if(Age === null){
//     prompt(`Please Enter Age`);
// }

//Learn Prompt Validation 
// const is17 = prompt(`Wow you're  ${Age} years Old can you Please Confirm By Entering your Age Again??`);

// if(is17 === Age ){
//     alert(`Thats Good Man`);
// }else{
//     alert(`Why are you Lying`);


// }

//Coding Challenge Three
//Store Their Scores
// const dolphinsScore = 96 + 108 + 89;
// const koalasScore = 88 + 91 + 110;
// //Get Their Average Scores
// const dolphinsAverageScore = dolphinsScore / 3;
// const koalasAverageScore = koalasScore / 3;



// console.log(` The Dolphins Average Score is ${dolphinsAverageScore}`);
// console.log(` The Koalas Average Score is ${koalasAverageScore}`);


// //Check for the winner
// if(dolphinsAverageScore > koalasAverageScore){
//     console.log(`The Dolphins Won the Competition with an Average Score of ${dolphinsAverageScore}`);
// }

// //Check if Their was a draw
// if(dolphinsAverageScore === koalasAverageScore){
//     console.log(`There was a tie Between the Two Teams`);
// }else{
//     console.log(`There was no Tie`);
// }


// //Coding Challenge Three

// let bill = 275;

// let tip;

// Bill <= 300 ? (tip * 15 ) / 100 : 'Tip is Greater than 300';

// console.log(tip);


// function Emeka(){
//     return 'my name is Emeka Iloba';
// }


//Coding Challenge 3
// function CalAverage(score1, score2, score3){

//     //Calculate Average of Each Team

//    return (score1 + score2 + score3) / 3;

// }

//     let avgk = CalAverage(44, 23, 71);
//     let avgd = CalAverage(65, 54, 49);

// console.log(`The Average Score of the Koalas is ${avgk}`);
// console.log(`The Average Score of the Dolphins is ${avgd}`);

// //Check winner
// function checkWinner(avgDolphins, avgKoalas){
//     if((avgKoalas * 2) >= avgDolphins ){
//         return `The Dolphins are the winners with ${avgDolphins} Points`;
//     }
//     if(avgKoalas >= 2 * avgDolphins){
//         return `The Koalas are the winners with ${avgKoalas} Points`;
//     }
// }

// console.log(checkWinner(56, 46));

// console.log(checkWinner(180, 84));


//Coding Challenge 4
// function calcTip(bill){

//     //Calculate Tip
//     if(bill > 50){
//         bill * 15 / 100;
//     }

// }

// console.log(calcTip(100));


//Friday Coding Challenge
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },

// }

// console.log(john.calcBMI());

//Mark's Object
// const mark = {
//     fullname: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         //create a new propoerty and assign it the calculated bmi
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }

// }


// console.log(mark.calcBMI());

// //Who has Higher BMI
// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
// }


//For Loop
// for (let age = 1; age <= 18; age++) {
//     console.log(`Emeka is ${age} Years Old`);
// }

//For Loop 
// for (let sib = 3; sib <= 20; sib++) {
//     console.log(`Hello ${sib}`);
// }

//infinite Loopf
// for (; ;) {
//     console.log('run');
// }

// function emeka() {
//     // let button = document.querySelector('button');
//     // button.innerHTML = 'Loading';
//    for(let i = 0; i <= 20; i++){
//     let newel = document.createElement('h1');
//     newel.innerText = 'Hello How may i help you';

//     document.body.appendChild(newel);

//    }

// }


//prevent page from loading
// function stop(Event){
//     Event.preventDefault();
// }


// function prev(){
//     //Select Input
//     let input = document.querySelector('#form');


//     //Get the Input Value
//      let inputValue = input.value;


//     //Create a for loop  (Use the Dom to add New Inputs Based on the input Value)
//     for(i = 1; i <= inputValue; i++){
//         //Create Element
//         let newDiv = document.createElement('div');
//         let newInput = document.createElement('input');
//         newDiv.appendChild(newInput);
//         document.body.appendChild(newDiv);
        
//     }


//         //Empty Input Value
//       input.value = '';
// }


//While Loop
// function prev(){
//     //Select Input
//     let input = document.querySelector('#form');


//     //Get the Input Value
//      let inputValue = input.value;

//     let i = 1;

//     //Create a for loop  (Use the Dom to add New Inputs Based on the input Value)
//     while( i <= inputValue){
//         //Create Element
//         let newDiv = document.createElement('div');
//         let newInput = document.createElement('input');
//         newDiv.appendChild(newInput);
//         document.body.appendChild(newDiv);
        
//     }

//       input.value = '';
// }





// //While loop
// let a = 6;
// while (a === 6){
//     console.log('Wahala');
// }


//Code Wars
// function revstring(word){

    
//     //Split the String
//     let SplitString = word.split("");

//     //Reverse the String
//     let reverseString = SplitString.reverse();

//     //Join the String
//     let JoinString = reverseString.join("");

//     return JoinString;
// }



// console.log(`${revstring('Emeka Timothy Iloba')}`);



//Write a function that accepts random numbers from 0-9 and returns numbers in a phone number
// function PhoneNumber(numbers){

//   //convert Array to String
//   let ArrToString = numbers.toString();

//   //Remove all Commas from String
//   let ClearedString = ArrToString.replace(/,/g," ");

//   //Split the String
//   let SplitString = ClearedString.split("");


//   //Insert the String at A Specified Index Position
//   let insert = SplitString.splice(5, 0,'(');

//   let newstring = insert.join("");


//   return newstring;
    
// }


// console.log(PhoneNumber([1,2,3,4,5,6,7,8,9,0]))





//Write a Function that Calculates SLO and CRM
// function calcoff(slo, crm){
//     let total = slo + crm;
//     return `The Total offering for today is ${total}`;
// }

// console.log(calcoff(100, 111));



//SundayChallenge
// function calculateOffering(){

//     //Get all input Fields
//     let SLO = document.querySelector('#slo');
//     let CRM = document.querySelector('#crm');
//     let TOTAL = document.querySelector('#total');

//     //Get all input Values
//     let valSLO = Number(SLO.value);
//     let valCRM = Number(CRM.value);
    

//     //Calculate
//     let valTOTAL = valSLO + valCRM;

//    TOTAL.value = valTOTAL;
   
    
//     //Clear Input Fields
//      SLO.value = '';
//      CRM.value = '';
     
 
   
// }

