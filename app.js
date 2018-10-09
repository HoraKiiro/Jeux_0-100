let random = Math.floor(Math.random() * 101); 

let number;

const button = document.querySelector("#button");

let test = document.querySelector("#test");

test.innerHTML = random;

button.addEventListener("click" , function(){
    number = document.querySelector("#number");
    
    if (number.value == "") {
        window.alert("vide");

    } else if (number.value < random) {
        window.alert("Trop bas");

    } else if (number.value > random) {
        window.alert("Trop haut");

    } else if (number.value == random) {
        window.alert("GG");
    }
})