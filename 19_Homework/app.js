let user = {
    firstName: "Stefan",
    lastname: "Ivanov",
    yearOfBirth: 1999,
    age: 0
};

const user2 = {
    firstName: "Petar",
    lastname: "Ivanov",
    yearOfBirth: 2005,
    age: 17
};

function calculateAge(user) {
    user.age = 2022 - user.yearOfBirth;
    const users = Object.entries(user);
    console.log(users);
}

const cars = ["honda", "nissan", "mazda"];
console.log(Object.assign({ ...cars }));

const isEqual = (user, user2) => {
    return user === user;
};
console.log(isEqual(user, user2));