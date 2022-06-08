let cuadricula = document.querySelector(".main");
let win = false;
let divs = [];
let turno = 0;
cuadricula.addEventListener("click", function (e) {
    let currentTarget = e.target.getAttribute("id");
    let changeImg = document.getElementById(currentTarget);
    if (changeImg.style.backgroundImage == "") {
        if (!isPair(turno)) {
            changeImg.style.backgroundImage = "url('src/cerrar.png')";
            turno++;
        }

        else if (isPair(turno)) {
            changeImg.style.backgroundImage = "url('src/circulo.png')";
            turno++;
        }
        console.log(turno);

    }
    else {
        return;
    }
})

function isPair(num) {
    return num % 2 == 0;
}

function checkwin(array) {
}