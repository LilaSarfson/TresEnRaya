let cuadricula = document.querySelector(".main");
let win = false;
let turno = 0;
let cuadrados = document.querySelectorAll(".cuadrado");
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
    }
    else {
        return;
    }
    // if (turno >= 3) {
    //     checkwin(cuadrados);
    // }
})

function isPair(num) {
    return num % 2 == 0;
}

function checkwin(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }
}

const addChecked = (id, boleano) => cuadrados.forEach(c => c.id == id && (c.boleano = boleano));

addChecked(1, false);
addChecked(2, false);
addChecked(3, false);
addChecked(4, false);
addChecked(5, false);
addChecked(6, false);
addChecked(7, false);
addChecked(8, false);
addChecked(9, false);

console.log(cuadrados);

// const agrega_apellido = (id, apellido) => obj.forEach(e=> e.id === id && (e.apellido = apellido));

// agrega_apellido(1, "Perez");