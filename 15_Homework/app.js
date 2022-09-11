
function validation() {
    let form = document.getElementById("form");

    document.getElementById("submit").addEventListener("click", function () {
        if (
            document.querySelector(
                ".name",
                ".lastname",
                ".address",
                ".gender",
                ".email"
            ).value == ""
        ) {
            alert("Empty field");
        } else {
            alert("OK");
        }
        form.submit();
    });
}
validation();

function blured() {
    if (document.querySelector(".name").value == "") {
        document.querySelector(".errorName").innerHTML = "Please Fill";
    }
    if (document.querySelector(".lastname").value == "") {
        document.querySelector(".errorLastname").innerHTML = "Please Fill";
    }
    if (document.querySelector(".address").value == "") {
        document.querySelector(".errorAddress").innerHTML = "Please Fill";
    }
    if (document.querySelector(".gender").value == "") {
        document.querySelector(".errorGender").innerHTML = "Please Fill";
    }
    if (document.querySelector(".email").value == "") {
        document.querySelector(".errorEmail").innerHTML = "Please Fill";
    }
}

document.querySelector(".name").addEventListener("focus", function () {
    document.querySelector(".errorName").innerHTML = "";
});
document.querySelector(".lastname").addEventListener("focus", function () {
    document.querySelector(".errorLastname").innerHTML = "";
});
document.querySelector(".address").addEventListener("focus", function () {
    document.querySelector(".errorAddress").innerHTML = "";
});
document.querySelector(".gender").addEventListener("focus", function () {
    document.querySelector(".errorGender").innerHTML = "";
});
document.querySelector(".email").addEventListener("focus", function () {
    document.querySelector(".errorEmail").innerHTML = "";
});


function key() {
    document.querySelector(".errorName").innerHTML = "";
    document.querySelector(".errorLastname").innerHTML = "";
    document.querySelector(".errorAddress").innerHTML = "";
    document.querySelector(".errorGender").innerHTML = "";
    document.querySelector(".errorEmail").innerHTML = "";
}

let count = 0;

document.querySelector(".name").addEventListener("click", function () {
    count++;
    console.log(count);
});

document.querySelector("#reset").addEventListener("click", function () {
    count = 0;
});
console.log(count);