const arr1 = [2, 54, 93, 66, 42, 96, 43];
const arr2 = [3, 5, 89, 10, 11, 13, 42];
const arr3 = [90, 8, 1, 1, 43, 27, 63, 33];
const arr4 = [1, 8, 3, 13, 13, 99, 202];

/* Write a function that takes in an array and console.logs the sum of
all the numbers in the array. Then call the function 4 times, passing in
one array above each time. */

const arraySum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr[i];
    } 
    console.log(sum);
}

arraySum(arr1);
arraySum(arr2);
arraySum(arr3);
arraySum(arr4);

//////////////////////////




/* Write a function that takes in numberOfTimes and nameList as paramaters and returns
the number of students entered in the prompt. For example if I type 2 into the prompt
the function will return `sally, sarah`. Then console.log the function to see 
the return. */

// const numReturn = function() {
//     let numberOfTimes = prompt('How many students do you want to see?')
//     let nameList = ['sally', 'sarah', 'betsy', 'sam', 'aretha', 'sun'];

//       for (let i = 0; i < nameList.length; i++) {
//           nameList.push(numberofTimes[i]);
//     }
    
// }
// console.log(numReturn);




/* Create a loop inside a function that sums the number from 1 to 172, inclusively.
Save the sum in a global variable called total. Call the function.
Console.log the total. */

const numberSum = function () {
    let total = 0;
        for (let i = 1; i < 172; i++) {
            total = total + i;
    }
            
            console.log(total);     
}
numberSum();