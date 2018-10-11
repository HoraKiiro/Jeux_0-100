let random = Math.floor(Math.random() * (100 - 1)) + 1;

let number = document.querySelector("#number");

const button = document.querySelector("#button");

const reset = document.querySelector("#reset");

let test = document.querySelector("#test");

var compteur = document.querySelector("#compteur");

var vie = 10;

let regex = /^(?:[1-9]|[1-9][0-9]|)$/;




button.addEventListener("click", function () {
    
    
    if (regex.test(number.value)) {

        if (number.value == "") {
            window.alert("Champs incorrect");

        } else if (vie === 0) {
                document.getElementById("button").disabled = true;
                let paragraphe = document.createElement("p");                       
                let textParagraphe = document.createTextNode(`Perdu ! c'était le nombre ${random} `);      
                paragraphe.appendChild(textParagraphe);                                         
                document.getElementById("parent").appendChild(paragraphe);
                paragraphe.classList.add("styleParagraphe");
        } else {

            if (number.value < random) {
                let paragraphe = document.createElement("p");                       
                let textParagraphe = document.createTextNode(`Le nombre ${number.value} est trop bas ! `);      
                paragraphe.appendChild(textParagraphe);                                         
                document.getElementById("parent").appendChild(paragraphe);
                paragraphe.classList.add("styleParagraphe");
                vie--;

            } else if (number.value > random) {
                let paragraphe = document.createElement("p");                       
                let textParagraphe = document.createTextNode(`Le nombre ${number.value} est trop haut ! `);      
                paragraphe.appendChild(textParagraphe);                                         
                document.getElementById("parent").appendChild(paragraphe); 
                paragraphe.classList.add("styleParagraphe");
                vie--;

            } else {
                document.getElementById("button").disabled = true;
                let paragraphe = document.createElement("p");                       
                let textParagraphe = document.createTextNode(`Gagné c'était le nombre ${number.value} il vous restais ${vie} vie !`);      
                paragraphe.appendChild(textParagraphe);                                         
                document.getElementById("parent").appendChild(paragraphe); 
                paragraphe.classList.add("styleParagraphe");
            }
        }
    } 
    else{
        window.alert("Champs incorrect");
    }
    
    document.getElementById("number").value = "";
    compteur.innerHTML = vie;
})



number.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});

reset.addEventListener("click", function () {
    
    random = Math.floor(Math.random() * (100 - 1)) + 1;
    
    for (var i = vie; i < 11; i++) {
        var supprText = document.querySelector(".styleParagraphe");
        supprText.parentNode.removeChild(supprText);
    }
    document.getElementById("button").disabled = false;
    vie =  10;
    compteur.innerHTML = vie;
})

console.log(compteur);
console.log(number);
console.log(random);