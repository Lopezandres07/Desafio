// Imagge

let borderImage = document.querySelector("#Image");
let picture = document.querySelector(".photo");
document.getElementsByClassName("border");

function addBorder () {
    if (picture.classList.contains("border")) {
        picture.classList.remove("border");
    } else {
        picture.classList.add("border");
    }

}

borderImage.addEventListener("click", addBorder);

// Stickers

let resultButton = document.querySelector("#getResult");

function getStickers() {
    let num1 = document.querySelector("#band1").value;
    let num2 = document.querySelector("#band2").value;
    let num3 = document.querySelector("#band3").value;
    let num4 = document.querySelector("#band4").value;

    let total = Number(num1) + Number(num2) + Number(num3) + Number(num4);

    if (total <= 10) {
        document.querySelector("#result").innerHTML = "Llevas " + total + " stickers 🤘🏽";
    } else {
        document.querySelector("#result").innerHTML = "Llevas demasiados stickers ❌";
    }

}

resultButton.addEventListener("click", getStickers);

//Password

let getPassword = document.querySelector("#getPass");

function validPass() {

    let pass1 = document.getElementById("passNumber1").value;
    let pass2 = document.getElementById("passNumber2").value;
    let pass3 = document.getElementById("passNumber3").value;
    

    if ((pass1 == 9 && pass2 == 1 && pass3 == 1)){
        document.querySelector("#passResult").innerHTML = "Password 1 correcto";

    } else if ((pass1 == 7 && pass2 == 1 && pass3 == 4)) {
        document.querySelector("#passResult").innerHTML = "Password 2 correcto";

    } else {
        document.querySelector("#passResult").innerHTML = "Password incorrecto";

    }
}

getPassword.addEventListener("click", validPass);