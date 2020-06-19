/*********************************************
* Code Challeng-1
* BMI calculation of John and Mark
* Formula : mass/height^2 = mass/height*height
* Units : mass in kg and height in meters
*/

/*var massJohn, massMark;
var heightJohn, heightMark;
var bmiJohn, bmiMark;

massJohn = prompt("Enter John's mass in kg: ");
heightJohn = prompt("Enter John's height in meters: ");

bmiJohn = (massJohn/(heightJohn*heightJohn));
console.log("John's BMI is : " + bmiJohn);


massMark = prompt("Enter Mark's mass in kg: ");
heightMark = prompt("Enter Mark's height in meters: ");

bmiMark = (massMark/(heightMark*heightMark));
console.log("John's BMI is : " + bmiMark);

if (bmiMark > bmiJohn) {
	console.log("Mark's BMI is higher than John.");
} else{
	console.log("John's BMI is higher than Mark.");
}*/

/*****************************
* The Ternary operators
*/

/*var firstName = 'HAW';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age>= 18? 'beer' : 'juice';
console.log(drink);*/

/******************
* Switch Statements
*/
/*var firstName = 'HAW';
var job = 'teacher';
switch(job){
	case 'teacher':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		console.log(firstName + ' drives an uber.');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites.');
		break;
	default:
		console.log(firstName + ' does something.');
		break;
}*/

/*********************
* Function Constructor
*/
var Person = function(name, yearOfBirth, job)
{
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function(){
	console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var hnin = new Person("HninAyeWai", 1996, "programmer");
var chris = new Person("Chris", 2003, "student");
var wah = new Person("WintWah", 1995, "accountant");

hnin.calculateAge();
chris.calculateAge();
wah.calculateAge();

console.log(hnin.lastName);
console.log(chris.lastName);
console.log(wah.lastName);