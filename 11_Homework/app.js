let a = 1;
let b = 2;
let c = 1;
console.log(checkThree(a, b, c));
let d = "2";
console.log(checkThree(a, b, d));

function checkThree(a, b, c){
    if (a == b || a == c || b == c) {
       return true;
    } else
       return false;
}

console.log(daysInMonth(2));

function daysInMonth(inputMonth) {
    const months31 = [1, 3, 5, 7, 8, 10, 12];
    const months30 = [4, 6, 8, 11];
    if (months31.includes(inputMonth)) {
        return "The month you entered has 31 days!";
    } else if (months30.includes(inputMonth)) {
        return "The month you entered has 30 days!";
    } else {
        let year = prompt("You've entered the month February. To check how many days it has, you have to enter the year as well.");
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            return "February has 29 days in " + year;
        } else {
            return "February has 29 days in " + year;
        }
    }
};
