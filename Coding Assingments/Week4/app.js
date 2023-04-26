console.log('---------Start of Step 1-------------') // Separating Info in Console

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // Create Array called 'ages'
console.log(`Starting "ages" Array: ${ages}`); // logging array 'ages'

// Functions that declares the first and last element of an array then returns the difference between them. 
function subtractArray(arr1) {
    let firstElement = arr1[0]; // Assigning first element in the array to a variable
    console.log(`First Element: ${firstElement}`) // For debugging, confirming correct element

    let lastElement = arr1[arr1.length - 1]; // Assinging the last element in the array to a variable
    console.log(`Last Element: ${lastElement}`) // For debugging, confirming correct element

    return `Difference: ${firstElement - lastElement}`; //Returning the difference between the two variable.
}
console.log(subtractArray(ages)) // Logging output of the function 'subtractArray'

ages.push(50); // Adding new element to array 'ages'

console.log(`New "ages" Array: ${ages}`)

console.log(subtractArray(ages)) // Logging output of the function 'subtractArray' with new element added

//function that calculates the average value of an array. 
function calculateAverage(arr1) {
    let total = 0; // Variable to store total of an array
    for (let i = 0; i < arr1.length; i++) {
        total += arr1[i];
    } // Loop to iterate through an array adding all values to variable 'total'
    return Math.floor(total / arr1.length); //Returning the total of value of an array and dividing by the total length rounded to the smaller integer. 
}

console.log(`The average of "ages" is: ${calculateAverage(ages)}`) // Calculating the average of array 'ages'

console.log('---------End of Step 1-------------') // Separating Info in Console
console.log('---------Start of Step 2-------------') // Separating Info in Console

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // Creating array of 'names'
console.log(`Starting "names" array: ${names}`)

//function that calculates the average letters in an array
function averageLetters(arr1) {
    let totalLetters = 0; // Variable to store total of an array
    for (let i = 0; i < arr1.length; i++) {
        totalLetters += arr1[i].length;
    } // Loop to iterate through an array adding all values to variable 'totalLetters'
    return Math.floor(totalLetters / arr1.length); //Returning the total of value of an array and dividing by the total length rounded to the smaller integer. 
}

console.log(`The average amount of letters in the array is: ${averageLetters(names)}`) // Logging the result of the function 'averageLetters'

//function that takes an array and returns the strings concatinated 
function concatNames(arr1) {
    result = ''; // Empty variable to store modified array elements.
    for (let i = 0; i < arr1.length; i++) {
        result += arr1[i] + ' '
    } //For loop that concats elements to variable 'result' with a space.
    return result;
}

console.log(`Concatenated: ${concatNames(names)}`) //Logging the results of the function 'concatNames'

console.log('---------End of Step 2-------------') // Separating Info in Console
console.log('---------Question 3-------------') // Separating Info in Console

console.log('How do you access the lat element of any array?') // Question 3
console.log('You can use the ".length" method to find the length then subtract 1 and that will be the last element. Since arrays have the starting index of 0 the are always one less than the length.')

console.log('---------Question 4-------------') // Separating Info in Console

console.log('How do you access the first element of any array?')
console.log('You can use select the starting element of an array by accessing the element of "0" using bracket notation, for example "arrayName[0]". The first element of an array is always at the index of 0.')

console.log('---------Start of Step 5-------------') // Separating Info in Console
let arrayLengths = []; //Creating an empty array to store values in

//for loop that iterates through 'names' array and adds the length of each element to the array of 'arrayLengths'
for (let i = 0; i < names.length; i++) {
    arrayLengths.push(names[i].length)
}

console.log(arrayLengths) // logs new array
console.log('---------End of Step 5-------------') // Separating Info in Console
console.log('---------Start of step 6-------------') // Separating Info in Console

let totalNames = 0; //Variable to hold total of arrayLengths

for (let i = 0; i < arrayLengths.length; i++) {
    totalNames += arrayLengths[i]
} // Loop to itterate over array and add values to totalNames

console.log(`Total: ${totalNames}`) //Logging total to console
console.log('---------End of Step 6-------------') // Separating Info in Console
console.log('---------Start of step 7-------------') // Separating Info in Console

function concatWord(word, n) {
    let newWord = '';
    for (let i = 0; i < n; i++) {
        newWord += word
    } //function that takes in a word and number value and returns the word concatinated 'n' times
    return newWord;
}

console.log(concatWord('hello', 3)) // Logging results to the console

console.log('---------End of Step 7-------------') // Separating Info in Console
console.log('---------Start of step 8-------------') // Separating Info in Console

let fullName = (firstName, lastName) => `${firstName} ${lastName}` // Arrow funciton with implicit return

console.log(fullName('Santa', 'Claus')) //Logging result to the console
console.log('---------End of Step 8-------------') // Separating Info in Console
console.log('---------Start of step 9-------------') // Separating Info in Console

let testArray = [5, 2, 1, 8, 4, 99]; //Starting array to pass through funciton

function arrayTotal(arr1) {
    totalValue = 0;
    for (element of arr1) {
        totalValue += element
    }
    if (totalValue > 100) {
        return true;
    } else {
        return false;
    }
} //function that iterates over an array then checks if totalValue is great than 100.

console.log(arrayTotal(testArray)) //logging test to the console
console.log('---------End of Step 9-------------') // Separating Info in Console
console.log('---------Start of step 10-------------') // Separating Info in Console

// let testArray = [5, 2, 1, 8, 4, 99]; //Starting array to pass through funciton

function averageOfArray(arr1) {
    let totalValue = 0;
    for (number of arr1) {
        totalValue += number
    }
    return totalValue / arr1.length
} //function that adds all values of testArray and devices by the length of the array.

console.log(averageOfArray(testArray)) //logging results to console
console.log('---------End of Step 10-------------') // Separating Info in Console
console.log('---------Start of step 11-------------') // Separating Info in Console

let testArray1 = [1, 8, 2, 9, 7, 3,] //starting array 1. average = 5
let testArray2 = [5, 5, 4, 6, 3,] // starting array 2. average = 4.6

function averageOfTwoArray(arr1, arr2) {
    let averageArray1 = 0;
    let averageArray2 = 0;
    for (number of arr1) {
        averageArray1 += number
    }

    averageArray1 = averageArray1 / arr1.length

    for (number of arr2) {
        averageArray2 += number
    }

    averageArray2 = averageArray2 / arr2.length

    if (averageArray1 > averageArray2) {
        return true;
    } else {
        return false;
    }
}

console.log(averageOfTwoArray(testArray1, testArray2)) // logging results to console
console.log('---------End of Step 11-------------') // Separating Info in Console
console.log('---------Start of step 12-------------') // Separating Info in Console

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 10.50)) //logging output to console
console.log('---------End of Step 12-------------') // Separating Info in Console
console.log('---------Start of step 13-------------') // Separating Info in Console

let fate = Math.floor(Math.random() * 8 + 1) // 'fate' is a random number generator

function letFateDecide(param1) {
    switch (param1) {
        case 1:
            console.log('Team 1 has been chosen!')
            break;
        case 2:
            console.log('Team 2 has been chosen!')
            break;
        case 3:
            console.log('Team 3 has been chosen!')
            break;
        case 4:
            console.log('Team 4 has been chosen!')
            break;
        case 5:
            console.log('Team 5 has been chosen!')
            break;
        case 6:
            console.log('Team 6 has been chosen!')
            break;
        case 7:
            console.log('Team 7 has been chosen!')
            break;
        case 8:
            console.log('Team 8 has been chosen!')
            break;
    }
} // function that takes in an argument and tells a different team they have been chosen. 

letFateDecide(fate); //executing my function

//I use a similar function to this at work when I need get get one of my teams to do something and I tell them I will let 'fate' decide. 