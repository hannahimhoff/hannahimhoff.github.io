function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	//var correct = 0;
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	let e = 0;

// Q1
	if (question1 == "avocado toast") {
		a++;
}
	if (question1 == "pancakes") {
		b++;
}
	if (question1 == "omelette") {
		c++;
}
	if (question1 == "bacon & eggs") {
		d++;
}
	if (question1 == "oatmeal") {
		e++;
}

// Q2
	if (question2 == "santorini") {
			a++;
}
	if (question2 == "waikato") {
			b++;
}
	if (question2 == "tokyo") {
			c++;
}
	if (question2 == "hanoi") {
			d++;
}
	if (question2 == "rome") {
			e++;
}

// Q3
	if (question3 == "brunch") {
					a++;
}
	if (question3 == "comedy") {
					b++;
}
	if (question3 == "trendy") {
					c++;
}
	if (question3 == "wine") {
					d++;
}
	if (question3 == "dinner") {
					e++;
}

// Q4
	if (question4 == "entrepreneur") {
					a++;
}
	if (question4 == "musician") {
					b++;
}
	if (question4 == "athlete") {
					c++;
}
	if (question4 == "lawyer") {
					d++;
}
	if (question4 == "writer") {
					e++;
}

// Q5
	if (question5 == "monkey") {
					a++;
}
	if (question5 == "dog") {
					b++;
}
	if (question5 == "dolphin") {
					c++;
}
	if (question5 == "fox") {
					d++;
}
	if (question5 == "cat") {
					e++;
}

//image
var pictures = ["../img/sfruit-01.png", "../img/sfruit-02.png", "../img/sfruit-03.png", "../img/sfruit-04.png", "../img/sfruit-05.png"];
var messages = ["strawberry", "banana", "watermelon", "lemon", "pear"];
var description = ["you are sweet, caring, & extroverted!", "you are friendly, quirky, & cool!",
 "you are chill, trendy, and people love to be around you!", "you are strong-willed, clever, and tough", "you are deep, thoughtful, and appreciative!"]
var score;

// guidelines
let max = a;
if (b>max) {
	max = b;
}
if (c>max) {
	max = c;
}
if (d>max) {
	max = d;
}
if (e>max) {
	max = e;
}

// score
if (max == a) {
	score = 0;
}

if (max == b) {
	score = 1;
}

if (max == c) {
	score = 2;
}

if (max == d) {
	score = 3;
}

if (max == e) {
	score = 4;
}

//results
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "you are a " + messages[score] + "! " + description[score];
document.getElementById("picture").src = pictures[score];

	}
