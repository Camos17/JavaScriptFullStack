// -- Correct Answers
var correct = 0;
var numberQ = 0;

// -- Quiz Questions
var answer1 = prompt('Question #1?');
var correctRes1 = 'correct1'; 
var answer2 = prompt('Question #2?');
var correctRes2 = 'correct2';
var answer3 = prompt('Question #3?');
var correctRes3 = 'correct3';
var answer4 = prompt('Question #4?');
var correctRes4 = 'correct4';
var answer5 = prompt('Question #5?');
var correctRes5 = 'correct5';

if (answer1.toUpperCase() === correctRes1.toUpperCase()) {
	numberQ =  numberQ  + 1;
	document.write('<p>You have answered '+ numberQ +' out of 5 questions</p>');
	correct += 1;
}

if (answer2.toUpperCase() === correctRes2.toUpperCase()) {
	numberQ += 1;
	document.write('<p>You have answered '+ numberQ +' out of 5 questions</p>');
	correct += 1;
}

if (answer3.toUpperCase() === correctRes3.toUpperCase()) {
	numberQ += 1;
	document.write('<p>You have answered '+ numberQ +' out of 5 questions</p>');	
	correct += 1;
}

if (answer4.toUpperCase() === correctRes4.toUpperCase()) {
	numberQ += 1;
	document.write('<p>You have answered '+ numberQ +' out of 5 questions</p>');	
	correct += 1;
}

if (answer5.toUpperCase() === correctRes5.toUpperCase()) {
	numberQ += 1;
	document.write('<p>You have answered '+ numberQ +' out of 5 questions</p>');	
	correct += 1;
}

document.write('<p>You have answered ' + correct + ' correct question(s)</p>');

// -- Prizes
if ( correct === 5) {
	document.write('<p>You have earned a GOLD crown</p>');
} else if ( correct >= 3 ) {
	document.write('<p>You have earned a SILVER crown</p>');
} else if ( correct >= 1) {
	document.write('<p>You have earned a BRONZE crown</p>');
} else {
	document.write('<p>Sorry, you have failed the quiz</p>')
}



