// 1. Da se napravi funkcija koja kje presmetuva zbir od elementi vo niza

let firstArray = [1, 5, "7", 12, 10, ];

console.log(sumOfElements(firstArray));


function sumOfElements(firstArray) {
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
        sum += parseInt(firstArray[i]);
    }
    return sum;
}

// 2. Da se napravi funkcija koja kje ni dade koi broevi se duplikati vo niza

let arrayWithDuplicates = [1, 2, 3, 1, 5, 6, 2];
let duplicates = [];

console.log("Duplicates = " + findDuplicates(arrayWithDuplicates, duplicates));

function findDuplicates(arrayWithDuplicates, duplicates) {
    for (let i = 0; i < arrayWithDuplicates.length; i++) {
        for (let j = 0; j < arrayWithDuplicates.length; j++) {
            if ( i === j) {
                continue;
            } else if (arrayWithDuplicates[i] == arrayWithDuplicates[j] && !duplicates.includes(arrayWithDuplicates[i])) {
                duplicates[duplicates.length] = arrayWithDuplicates[i];
            }
        }
    }
    return duplicates;
}

// 3. Da se podredat po redosled elementite vo nizata, posle toa da se izbrisat duplikatite...

let unorderedArray = [5, 3, 3, 2, 1, 0];

console.log(orderArray(unorderedArray));

function orderArray(unorderedArray) {
    let orderedArray = unorderedArray.sort();
    let arrLen = orderedArray.length;
    for (let i = 0; i < orderedArray.length; i++) {
        for (let j = 0; j < orderedArray.length; j++) {
            if ( i === j) {
                continue;
            } else if (orderedArray[i] == orderedArray[j]) {
                orderedArray.splice(i, 1);
            }
        }
    }
    return orderedArray;
}