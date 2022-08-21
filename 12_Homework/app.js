let array = [1, 2, 3, 4, 5, 6];
let n = 3;
console.log(spliceAndDice(array, n));

function spliceAndDice(array, n) {
    let regex = array.indexOf(n);
    array.splice(regex, 1);
    return array;
}

console.log(countTheDigits(123456));

function countTheDigits(n) {
    let numOfDigits = 0;
    while(parseInt(n) > 0) {
        numOfDigits++;
        parseInt(n/=10);
    }
    return numOfDigits;
}

console.log(findLargest(array));

function findLargest(array) {
    let biggest = array[0];
    for(let i = 1; i < array.length; i++) {
         if(biggest < array[i]) {
            biggest = array[i];
         }
    }
    return biggest;
}