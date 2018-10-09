let random = Math.floor(Math.random() * (100 - 1 ) ) + 1;

let number;

const button = document.querySelector("#button");

const reset = document.querySelector("#reset");

let test = document.querySelector("#test");

let compteur = document.querySelector("#compteur");

let vie = 10;

test.innerHTML = random;




button.addEventListener("click", function () {
    number = document.querySelector("#number");
    if (number.value == "") {
        window.alert("vide");
    }
        else if (vie === 0){

        }

        else {

        if (number.value < random) {
            window.alert("Trop bas");
            vie = vie-1;

        } else if (number.value > random) {
            window.alert("Trop haut");
            vie = vie-1;

        } else{
            window.alert("GG");
            vie = "";
        }
    }
    compteur.innerHTML = vie;
})

reset.addEventListener("click", function() {
    vie = 10;
    random = Math.floor(Math.random() * (100 - 1 ) ) + 1;
    compteur.innerHTML = vie;
    test.innerHTML = random;
})



console.log(compteur);
console.log(number);
console.log(random);