/* 
// Test if runs in Node env. 
console.log("Hello from Node");
*/


const greetingsArr = [
    {   
        start: 5,
        end: 7,
        message: "OMG, it's so early. Not time to be awake yet",
    },
    {   
        start: 8,
        end: 11,
        message: "Good Morning, hope you slept well?!",
    },
    {   
        start: 12,
        end: 17,
        message: "Hi! Have you already had a luch?",
    },
    {   
        start: 18,
        end: 20,
        message: "Maybe time to turn off your laptop?",
    },
    {   
        start: 21,
        end: 22,
        message: "Time to relax!",
    },
    {   
        start: 23,
        end: 4,
        message: "Time to relax!",
    }
];

// function that selects greetings based on time of the day - creates String#1
const selelectGreetings = (msgArr) => {

    const hour  = new Date().getHours();
    
    // *itarate over array objects to find a time slot 
    let selectedObj = msgArr.find(obj => {
        return hour >= obj["start"] && hour <= obj["end"];
    });

    return selectedObj.message;
};


/*
// Test of selelectGreetings function
console.log(selelectGreetings(greetingsArr));
*/