const numbers = [12, 32, 54, 65];
console.log(numbers);

// for (const number of numbers) {
//     console.log(number);
// }

const fruits = ['apple', 'banana', 'mango', 'orange'];

for (const fruit of fruits) {
    console.log(fruit);
    console.log('I want to eat');
}


const mixedArray = [12, 'banana', true, 'orange', [3, 4, 5]];

for (const element of mixedArray) {
    console.log(element);
}

const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (const subArray of nestedArray) {   
    for (const number of subArray) {
        console.log(number);
    }
}


