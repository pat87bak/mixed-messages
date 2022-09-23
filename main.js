/* 
// Test if runs in Node env. 
console.log("Hello from Node");
*/

// greeting array for String#1
const greetingsArr = [
	{
		start: 5,
		end: 7,
		message: "OMG, it's so early. Not time to be awake yet",
	},
	{
		start: 8,
		end: 11,
		message: 'Good Morning, hope you slept well?!',
	},
	{
		start: 12,
		end: 17,
		message: 'Hi! Have you already had a luch?',
	},
	{
		start: 18,
		end: 20,
		message: 'Maybe time to turn off your laptop?',
	},
	{
		start: 21,
		end: 22,
		message: 'Time to relax!',
	},
	{
		start: 23,
		end: 4,
		message: 'Time to relax!',
	},
];

// "?" array for String#2
const didKnowArr = [
	'sponges hold more cold water than hot',
	'lightning strikes the Earth 6,000 times every minute',
	'fire usually moves faster uphill than downhill',
	'cats have over 100 vocal chords',
	"camel's milk doesn't curdle",
	'elephants sleep between 4 - 5 hours in 24 period',
	"it's possible to lead a cow up stairs but not down",
	"frogs can't swallow with their eyes open",
	"elephants are the only mammal that can't jump",
	'a 1/4 of your bones are in your feet',
	'your tongue is the fastest healing part of your body',
	'on your birthday you share it with 9 million others',
	'1 googol is the number 1 followed by 100 zeros',
	'a 1 minute kiss burns 26 calories',
	'you burn more calories sleeping than watching TV',
	"frogs don't usually swallow water (they absorb most of the moisture they need through their skin)",
	'at birth dalmations are always white',
	'hummingbirds are the only bird that can fly backwards',
	"a duck can't walk without bobbing its head",
];

// function that selects greetings based on time of the day - creates String#1
const getString1 = (msgArr) => {
	const hour = new Date().getHours();

	// *itarate over array objects to find a time slot
	let selectedObj = msgArr.find((obj) => {
		return hour >= obj['start'] && hour <= obj['end'];
	});

	let string1 =  selectedObj.message;
    return string1;
};

/*
// Test of selelectGreetings function
console.log(getString1(greetingsArr));
*/

// function to select random string from "Did you know array" - String#2
const getString2 = arr => {
    let string2 = arr[Math.floor(Math.random() * arr.length)];
    return string2;
};

/*
// Test getString2 function
console.log(getString2(didKnowArr));
*/