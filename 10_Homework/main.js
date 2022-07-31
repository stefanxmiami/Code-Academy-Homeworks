let birthday = 3;
let sumOfFullName = "StefanIvanov".length;
let subYear = 99 - 19;
let sumOfYear = "1999"
    .split("")
    .map((x) => x * 1)
    .reduce((x, y) => x + y);

let fifth = birthday > sumOfFullName;
let sixth = subYear % sumOfYear;
let seventh = "I am the ";
console.info(fifth, sixth);
seventh += fifth && sixth < 3 ? "the light" : "the darkness";
console.info(seventh);