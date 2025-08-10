// INSTRUCTIONS
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//     Return your answer as a number.

//SOLUTION

function sumMix(array){
    let sum = 0
    for(let i = 0; i < array.length; i++) {
        sum = sum + Number(array[i])
    }
    return sum
}

