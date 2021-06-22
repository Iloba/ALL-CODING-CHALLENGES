// // Write a program that fetches the number of a date (inputed by the user)
//  relative to the total number of days of the first 3 months of the year.
// // Hint: Jan is 31 days, February is 28 days, March is 31 days.
//  Total = 90 days.
// // Example: Feb 9 is the 40th day of the first 3 months. 
// // NOTE: Use the first three letters of the months i.e Jan, Feb and 
// Mar so that a user can for example input Jan 31, Feb 9, Mar 21 and get the desired result.
// // bonus: do it for the entire year (365 days) instead of only the
//  first 3 months.


///function
function getDate(month, Day){
	
	//Problem: get the specific day of a given date in a year


	//Breakdown Problem: First get the specific day in a month (January)
	let jan = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	let feb = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
	


	//Validate request
	// if(jan.includes(Day) && month === 'jan'){


	// 	//get specific date in january
	// 	let FinalDate = ` ${month} ${jan[Day-1]}, is the ${jan[Day-1]}th day in January`;


	// 	return FinalDate;


	// }else{	

	// 	return `Sorry, January has only  ${jan.length} Days`;
	// }


	//February
	if(feb.includes(Day) && month === 'feb'){
		//get specific date
		let FinalDate = `${month} ${feb[Day-1]} is the ${feb[Day-1]}th day in february`;

		return FinalDate;
	}else{
		return `Sorry, February has only ${feb.length} Days`;
	}



	



}

console.log(getDate('feb', 28));