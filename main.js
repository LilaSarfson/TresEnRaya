let cuadricula = document.querySelector(".main");
let win = false;
let turno = 0;
let modalOpen=false;
let cuadrados = document.querySelectorAll(".cuadrado");
let closeModal = document.querySelector(".close-modal");
cuadricula.addEventListener("click", function (e) {
    let currentTarget = e.target.getAttribute("id");
    let changeImg = document.getElementById(currentTarget);
    if(!win){
        if (changeImg.style.backgroundImage == "") {
            if (!isPair(turno)) {
                changeImg.style.backgroundImage = "url('./src/assets/cruz2.png')";
                cuadrados[currentTarget].boleano = 1;
                turno++;
            }
            else if (isPair(turno)) {
                changeImg.style.backgroundImage = "url('./src/assets/circulo.png')";
                cuadrados[currentTarget].boleano = 2;
                turno++;
            }
        }
        else {
            return;
        }
        if (turno >= 3 && !win) {
            checkwin(cuadrados, 1);
            checkwin(cuadrados,2);
        }
        if(win){
           modalOpen=true;
        }
        if(modalOpen){
            document.querySelector(".modal").style.display = "block" ;}
            else{
            closeModal.addEventListener("click", function (e){
                document.querySelector(".modal").style.display = "none" ;
                win=false;
                
            })
        }
    }
    else{
        return;
    }
    
})

function isPair(num) {
    return num % 2 == 0;
}

function checkwin(array, num) {
        if (array[0].boleano == num && array[1].boleano == num && array[2].boleano ==num){
            win = true;
        }
        if(array[0].boleano == num && array[3].boleano == num && array[6].boleano == num){
            win = true;
        }
        if(array[0].boleano == num && array[4].boleano == num && array[8].boleano == num){
            win = true;
        }
        if(array[2].boleano == num && array[5].boleano == num && array[8].boleano == num){
            win = true;
               }
        if(array[2].boleano == num && array[4].boleano == num && array[6].boleano == num){
            win = true;
        }
        if(array[6].boleano == num && array[7].boleano == num && array[8].boleano == num){
            win = true;
        }
        if(array[3].boleano == num && array[4].boleano == num && array[5].boleano == num){
            win = true;
        }
        if(array[1].boleano == num && array[4].boleano == num && array[7].boleano == num){
            win = true;
        }
}

const addChecked = (id, boleano) => cuadrados.forEach(c => c.id == id && (c.boleano = boleano));

addChecked(0,0);
addChecked(1,0);
addChecked(2,0);
addChecked(3,0);
addChecked(4,0);
addChecked(5,0);
addChecked(6,0);
addChecked(7,0);
addChecked(8,0);

