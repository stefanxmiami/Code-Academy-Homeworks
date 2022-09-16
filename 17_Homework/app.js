function validateForm() {

    // Bootstrap seems to have this built in?

    /*let inputs = document.getElementsByTagName("input");
    let spans = document.getElementsByTagName("span");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checkValidity() == true) {
            // spans[i].innerHTML = "valid";
        } else {
            // spans[i].innerHTML = "invalid";
        }
    }*/
}

function submit() {
    validateForm();
}

function storeMe() {
    let x = prompt("Please enter your name");
    let y = prompt("Please enter your age");
    sessionStorage.setItem("name", x);
    localStorage.setItem("age", y);
}

loadWikis();
async function loadWikis() {
    let text1 = await fetch("wiki.txt").then((getText) => getText.text());
    let text2 = await fetch("wiki2.txt").then((getAText) => getAText.text());
    if (text2.length > text1.length) {
        console.log(text2);
    } else {
        console.log(text1);
    }
}
