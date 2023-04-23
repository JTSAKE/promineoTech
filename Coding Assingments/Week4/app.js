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
