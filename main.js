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

// Jokes array for String#2
const jokesArray = [
	'“My father drank so heavily, when he blew on the birthday cake he lit the candles.” – Les Dawson',
	'“I was in my car driving back from work. A police officer pulled me over and knocked on my window. I said, ‘One minute I’m on the phone.’” – Alan Carr',
	'“I worry about ridiculous things, you know, how does a guy who drives a snowplough get to work in the morning… that can keep me awake for days.” – Billy Connolly',
	'“I used to go out with a giraffe. Used to take it to the pictures and that. You’d always get some bloke complaining that he couldn’t see the screen. It’s a giraffe, mate. What do you expect? ‘Well he can take his hat off for a start!’” – Paul Merton',
	'“Here’s a picture of me with REM. That’s me in the corner.” – Milton Jones',
	'“People say ‘Bill, are you an optimist?’ And I say, ‘I hope so.’” – Bill Bailey',
	'“I rang up British Telecom and said: ‘I want to report a nuisance caller.’ He said: ‘Not you again.’” – Tim Vine',
	'“Life is like a box of chocolates. It doesn’t last long if you’re fat.” – Joe Lycett',
	'“We weren’t very religious. On Hanukkah, my mother had our menorah on a dimmer.” – Richard Lewis',
	'“My girlfriend is absolutely beautiful. Body like a Greek statue – completely pale, no arms.” – Phil Wang',
	'“If God had written the Bible, the first line should have been ‘It’s round.’” – Eddie Izzard',
	'“Two fish in a tank. One says: ‘How do you drive this thing?’” – Peter Kay',
];

// function that selects greetings based on time of the day - creates String#1
const getString1 = (msgArr) => {
	const hour = new Date().getHours();

	// *itarate over array objects to find a time slot
	let selectedObj = msgArr.find((obj) => {
		return hour >= obj['start'] && hour <= obj['end'];
	});

	let string1 = selectedObj.message;
	return string1;
};

/*
// Test of selelectGreetings function
console.log(getString1(greetingsArr));
*/

// function to select random string from array
const getStringFromArray = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

/*
// Test getStringFromArray function
console.log(getStringFromArray(didKnowArr));
console.log(getStringFromArray(jokesArray));
*/


// function to create a random message based on 3 string
const generateMessage = () => {
    const string1 = getString1(greetingsArr);
    const string2 = getStringFromArray(didKnowArr);
    const string3 = getStringFromArray(jokesArray);

    let msg = string1 + "\n\n"; 
    msg += "Did you know? \n";
    msg += string2 + "\n\n";
    msg += "Let me tell you a joke now :) \n";
    msg += string3 + "\n\n";
    msg += "Bye....";

    return msg;
};