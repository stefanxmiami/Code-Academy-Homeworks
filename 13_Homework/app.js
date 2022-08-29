// 1 Sort By title
const library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  { author: "Suzanne Collins", title: "Mockingjay", libraryID: 3245 },
];

function compare(a, b) {
  if (a.title < b.title){
    return -1;
  }
  if (a.title > b.title){
    return 1;
  }
  return 0;
}

console.log(library.sort(compare));

// 2 Create new array with author names
const authors = library.map(
  function (author) {
    return author.author;
  }
);

console.log(authors);

// 3 find the 1254 id
const books = library.filter(
  (libraryID) => libraryID.libraryID == 1254
);
console.log(books);

// 4 Car class
class Car {
  constructor(brand, year, hp) {
    this.brand = brand;
    this.year = year;
    this.hp = hp;
  }

  carAge() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }

  userCanDrive() {
    for (let i = 0; i < this.year.length; i++) {
      if (this.year[i] > 25) {
        console.log(`${this.brand[i]} has no horsepower restrictions`);
      } else {
        console.log(`${this.brand[i]} is limited to 105hp`);
      }
    }
  }
}


let myCar = new Car("Honda", 1997);
console.log(myCar.carAge());


let users = [
  { name: "Stefan Ivanov", age: 22 },
  { name: "Ime Prezime", age: 17 },
  { name: "Name Surname", age: 48 }
];


const userAge = users.map(function (age) {
  return age.age;
});

const userName = users.map(function (name) {
  return name.name;
});

let b = new Car(userName, userAge);
b.userCanDrive();