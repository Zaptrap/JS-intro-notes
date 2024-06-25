console.log('js:loaded')
//console.log() -> function - print to the browser developer tools

//storing data for a game

// define a variable -> what is required?
// declaration keyword -> (let or const)
// identifier-> name of data
// assignment operator -> (=)
// value -> the data stored

let playerName = 'John Doe'

console.log('testing player name', playerName)

let highScore = 3000.5 //foat refers to irrational number
let score = 100 // interger = whole rational number

//boolean -> condition of the game -> comparison?

//hasNewHighScore = false
isGameRunning = true
//continueGame = true

// Container / reference / complex data structure
// array -> a list of related values

const inventoryOfItems ["sword" , "shield" , "hat"] 

const messageLog = `The Current Score: ${score}`

const messageWelcome = ` Welcome back, ${playerName}`

console.log(messageWelcome)

let favSnack;

favSnack = "coffee"

console.log(favSnack)

//Distinction between "let" and "const" variables
//let x = 25;
//x = 100; // no problem (can change let variables)
//const z = 25;
//z = 100; // Uncaught TypeError: Assignment to constant variable (can't change "const" variables)

let myString = 'Hello World';
let myOtherString = "Hello World again";
console.log(typeof myString);
// Prints: string

let myNumber = 15;
console.log(typeof myNumber);
// Prints: number


//Booleans are true or false indicators
myBoolean = false;

console.log(typeof null);
// Prints: object 
// null is adata type a void value, meaning its givien a value that means "0"

let cohort;
console.log(cohort);
// Prints: undefined
// undefined is a data type with no assigned value (automatically read as 'undefinded')


let username = 'friend';
let greeting = 'Hello,';

let newGreeting = `the new greeting will be ${greeting} ${username}`
// use `, not '

console.log(newGreeting);