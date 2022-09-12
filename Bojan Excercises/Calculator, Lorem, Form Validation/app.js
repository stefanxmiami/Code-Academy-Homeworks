function numberPrompt() {
    let a = prompt("Enter the first number:");
    let b = prompt("Enter the second number:");
    document.getElementById("calc").textContent = a * 1 + b * 1;
}

function paragraphs() {
    setInterval(() => {
        const p = document.createElement("p");
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci cupiditate dolor, ducimus facilis id illo in iste itaque, molestiae nobis nostrum nulla odio quam sequi totam voluptas voluptates?";
        document.body.appendChild(p);
    }, 1000);
}

function preventNumber(e) {
    let keycode = e.keycode ? e.keycode : e.which;
    if ((keycode > 47 && keycode < 58) || (keycode > 95 && keycode < 107)) {
        e.preventDefault();
    }
}

//the validation
function validation(event) {
    event.preventDefault();
    let f = document.getElementById("firstName");
    let l = document.getElementById("lastName");
    let a = document.getElementById("address");
    let e = document.getElementById("email");
    let m = document.getElementById("mobile");

    if (e.value.includes("@") && e.value.includes(".com")) {
        alert("Fields are OK!");
        console.log(f.value, l.value, a.value, e.value, m.value);
    } else {
        alert("Invalid email format!");
    }
}