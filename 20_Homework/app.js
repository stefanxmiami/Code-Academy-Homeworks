const successMessage = "Successful Post";
const failMessage = "Oopsies";

// I get an oopsies always :(

function getFile() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(successMessage);
            document.getElementById("success").innerHTML = `<h1>${successMessage}</h1>`;
        } else {
            console.log(failMessage);
            document.getElementById("success").innerHTML = `<h1>${failMessage}</h1>`;
        }
    };
    xhr.send(JSON.stringify({name: "Stefan", age: "22"}));
}

const getTable = document.getElementById("getTable");
const postTable = document.getElementById("postTable");

fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
    .then(function (xhr) {
        if (xhr.ok) {
            return xhr.json();
        }
    })
    .then(function (el) {
        for (let i = 0; i < 10; i++) {
            let row = document.createElement("tr");
            row.innerHTML = JSON.stringify(el[i]);
            getTable.appendChild(row);
        }
    })
    .catch(function (err) {
        console.warn("Oopsies", err);
    });

function getTableElements() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.onload = function () {
        if (this.status === 200) {
            displayLastTen(xhr.responseText);
        } else console.log(failMessage);
    };
    xhr.send();
}

function displayLastTen(el) {
    let objects = JSON.parse(el);
    console.log(objects[1].id);
    for (let i = objects.length - 1; i >= objects.length - 10; i--) {
        let row = document.createElement("tr");
        row.innerHTML = objects[i].id;
        postTable.appendChild(row);
    }
}