/*var myTest = (function(){
	var myVar = 35;

	var myFun = function (params){
		return myVar + 5;
	}

	return {
		publicTest: function(p){
			console.log(myFun(p));
		}
	}

})();*/

/*****************************************************
* First Class Functions: Functions returning functions
*****************************************************/
/*function interviewQuestion(job){
	if (job == 'Designer') {
		return function(name){
			console.log(name + " , can you please expalin what UX design is?");
		}
	}else if (job == 'Teacher') {
		return function(name){
			console.log(name + " , which subject do you teach?");
		}
	}else{
		return function(name){
			console.log("Hello " + name + " , what do you do?");
		}
	}
}
var teacherQuestion = interviewQuestion("Teacher");
teacherQuestion("Kathy");
var designerQuestion = interviewQuestion("Teacher");
designerQuestion("Max");
// can call like this too.
interviewQuestion("engineer")('John'); */

/***********************************************************
* Code Challenge - Closure
***********************************************************/
/*function interviewQuestionByClosure(job){
	return function(name){
		if(job == 'Designer'){			
			console.log(name + " , can you please expalin what UX design is?");
		}else if(job == 'Teacher'){			
			console.log(name + " , which subject do you teach?");
		}else {			
			console.log("Hello " + name + " , what do you do?");
		}
	}
}

interviewQuestionByClosure('Designer')('Kathy');
interviewQuestionByClosure('Teacher')('Max');
interviewQuestionByClosure('engineer')('John');*/

/************************************************************
* Immediately Invoked Function Expresssions (IIFE)
* To create a new scope that is hidden from the outside scope.
* Data Privacy
**************************************************************/
/*function game(){
	var score = Math.random() * 10;
	console.log(score >= 5);
}

game();*/

// can do above code in a different way.
/*( function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
} ) ();*/

//console.log(score);

// Pass arguments into the function
/*( function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
} ) (5);

console.log(score);*/

/************************************************************
* Closure
* An inner function has always access to 
* the variables and params of its outer function,
* even after the outer function has returned.
**************************************************************/

/*function retirement(retirementAge){

	var str = " years left until retirement.";

	return function(yearOfBirth){
		var age = 2020 - yearOfBirth;
		console.log(retirementAge - age + str);
	} 
}
var retirementMM = retirement(60);
retirementMM(1996);

retirement(60)(1996);*/
/******************************************************
* Bind, Call & Apply
* Call - Method borrowing from other object
* Bind - Set variable explicitly. 
	   - Doesn't call the function immediately. 
	   - Instead, it generates a copy of the function.
	   - Useful : to create functions with preset arguments.
********************************************************/
var john = {
	name: 'John',
	age: 26,
	job: 'Doctor',
	presentation: function(style, timeOfDay){
		if(style === 'formal'){
			console.log('Good ' + timeOfDay + ', Ladies & gentlemen! I\'m ' + 
				this.name + ', I\'m a ' + 
				this.job + ' and I\'m ' + 
				this.age + ' years old.');
		}else if(style === 'friendly'){
			console.log('Hey, what\'s up? I\'m ' + 
				this.name + ', I\'m a ' + 
				this.job + ' and I\'m ' + 
				this.age + ' years old. Have a nice ' + timeOfDay + '!');
		}
	}
}
john.presentation('formal', 'morning');

var emily = {
	name: 'Emily',
	age: 35,
	job: 'teacher'
}

john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly', 'afternoon']); // use later as function does not accept array params