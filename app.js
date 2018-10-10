let random = Math.floor(Math.random() * (100 - 1)) + 1;

let number;

const button = document.querySelector("#button");

const reset = document.querySelector("#reset");

let test = document.querySelector("#test");

let compteur = document.querySelector("#compteur");

let vie = 10;

let regex = /^(?:[1-9]|[1-9][0-9]|)$/;

test.innerHML = random;




button.addEventListener("click", function () {
    number = document.querySelector("#number");
    
    if (regex.test(number.value)) {

        if (number.value == "") {
            window.alert("Champs incorrect");

        } else if (vie === 0) {
            window.alert("Youpi tralala jsuis nul")
        } else {

            if (number.value < random) {
                window.alert("Trop bas");
                let paragraphe = document.createElement("p");                       
                let textParagraphe = document.createTextNode(`Le nombre ${number.value} est trop bas ! `);      
                paragraphe.appendChild(textParagraphe);                                         
                document.getElementById("parent").appendChild(paragraphe);  
                vie--;

            } else if (number.value > random) {
                window.alert("Trop haut");
                vie = vie - 1;

            } else {
                window.alert("GG");
                vie = "";
            }
        }
    } 
    else{
        window.alert("Champs incorrect");
    }
    compteur.innerHTML = vie;
})

reset.addEventListener("click", function () {
    vie =  10;
    random = Math.floor(Math.random() * (100 - 1)) + 1;
    compteur.innerHTML = vie;
})

console.log(compteur);
console.log(number);
console.log(random);