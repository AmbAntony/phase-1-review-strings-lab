// Write your code in this file!
const CurrentUser = ' Antony Waweru ';
const welcomeMessage = 'Welcome to Moringa' + CurrentUser
console.log(CurrentUser)
console.log(welcomeMessage)

//using template literals


const myString = 'template literal';
const myNumber = 10;
const myBoolean = false;

console.log(`Saying that interpolation with ${myString}s is better than concatenation ${90+ myNumber}% of the time is simply ${myBoolean}.`)

//rewriting the welcomeMessage using template literals

const welcomeMessage2 = `Welcome to Moringa,${CurrentUser}!`
console.log(welcomeMessage2)

//Practise

const excitedWelcomeMessage = welcomeMessage2.toUpperCase();
console.log(excitedWelcomeMessage)

//Practise 2

const shortGreeting = `Welcome, ${CurrentUser}`
console.log(shortGreeting)

//practise slice
const shortGreeting2 = `Welcome,${CurrentUser.slice(0, 3)}!`;
console.log(shortGreeting2)