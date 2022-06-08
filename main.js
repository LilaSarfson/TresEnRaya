let cuadricula = document.querySelector(".main");
let win = false;
let cruces = [];
let circulo = "";
let turno = 0;
cuadricula.addEventListener("click", function (e) {

    let currentTarget = e.target.getAttribute("id");
    let changeImg = document.getElementById(currentTarget);
    if (changeImg.style.backgroundImage == "") {
        if (!isPair(turno)) {
            changeImg.style.backgroundImage = "url('src/cerrar.png')";
            cruces.push(currentTarget);
            console.log(cruces);
            turno++;
        }

        else if (isPair(turno)) {
            changeImg.style.backgroundImage = "url('src/circulo.png')";
            circulo = currentTarget + circulo;
            console.log(circulo);
            turno++;
            checkwin(circulo);
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

    if (array == (312) || array == (123) || array == (132) || array == (321) || array == (741) || array == (147) || array == (714) || array == (174) || array == (471) || array == (417)) {

        return console.log("gane con la primera fila");
        win = true;
    }
}