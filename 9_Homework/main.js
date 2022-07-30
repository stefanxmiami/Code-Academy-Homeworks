const fName = "Stefan";
const lName = "Ivanov";
const age = 22;
const job = "Back-end Developer";
const gender = "male";
const fromSkopje = false;

const user = {
    fName,
    lName,
    age,
    job,
    gender,
    fromSkopje
};

console.log(user);

const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    alert(fName);
});