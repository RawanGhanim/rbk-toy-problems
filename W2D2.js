// 1-using the console calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15].
// 2-using the console calculate your age in seconds.

// 3- Write a function identity that takes one parameter and returns that input value.
// Calling your function should result in:
// identity("hello world");  ==> "hello world"
// identity(500);  ==> 500

// 4- Write a function convertTo that takes  a string and a number as parameters.
// If the string input is "cm", then the function should convert the 2nd argument into centimeters by multiplying it to 2.54 and returning that value.
// If the string input is "in", then the function should convert the 2nd argument into inches by dividing it by 2.54.
// Calling your function should result in something like:
// convertTo('cm', 100);  ==> 254
// convertTo('in', 50.8); ==> 20

function convertTo(units, num) {
  // write your code here
}

//4- Write a function dogsIWouldPet that takes an item (string), 
//and returns a sentence stating dogs you would pet in comparison to the item (see sample call below).
// Calling your function should result in:
// dogsIWouldPet("ottoman"); //"I would pet dogs no bigger than an ottoman"
// dogsIWouldPet("small horse"); //"I would pet dogs no bigger than an small horse"
// dogsIWouldPet("Terrier"); //"I would pet dogs no bigger than an Terrier"
// Bonus (extra): If your function were passed in a string "I do not like dogs", 
//you can have your function return "I would not pet dogs".


// 5- Write a function convertToKilometers that takes a number of miles passed in as parameter, 
// and returns that number multiplied by 1.60934 (an accepted approximation of 1 mile in kilometers).
// Calling your function should result in:
// convertToKilometers(50);   ==> 80.467
// convertToKilometers(361);  ==> 580.973
//1 average of 13,14,13,15,16,17,19,13,16,15
function average(){

	var sum =13+14+13+15+16+17+19+13+16+15;
	return sum/10;
}
//2
function calcuateAge(years,months){
	var agey=years*31,536,000;
var agem=(months/12)*31,536,000;
var age=agey+agem;
return age;
}

//3
function identify(elemant){
	return elemant;
}
//4
function convertto(str,num){
	if(str==="cm"){
	num=num*2.54;
	}
	else{
	num=num/2.54;
	}
	return num;
}
//5
function dogsIWouldPet(string){
	if(string==="I do not like dogs")
	{
	return "I would not pet dogs";
	}
	else{
	return "I would pet dogs no bigger than an "+string+"";

	}

}
//6
function convertToKilometers(num){
	var Km=num*1.60934 ;
	return Km;
}