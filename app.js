let random = Math.floor(Math.random() * (100 - 1)) + 1;

let number = document.querySelector("#number");

const button = document.querySelector("#button");

const reset = document.querySelector("#reset");

let test = document.querySelector("#test");

let compteur = document.querySelector("#compteur");

let vie = 10;

let regex = /^(?:[1-9]|[1-9][0-9]|)$/;

test.innerHML = random;



button.addEventListener("click", function () {
    
    
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
                paragraphe.classList.add("styleParagraphe");
                vie--;

            } else if (number.value > random) {
                window.alert("Trop haut");
                let paragraphe = document.createElement("p");                       
                let textParagraphe = document.createTextNode(`Le nombre ${number.value} est trop haut ! `);      
                paragraphe.appendChild(textParagraphe);                                         
                document.getElementById("parent").appendChild(paragraphe); 
                vie--;

            } else {
                window.alert("GG");
                vie = "";
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
    
    for (var i = vie; i < 10; i++) {
        var supprText = document.querySelector(".styleParagraphe");
        supprText.parentNode.removeChild(supprText);
    }

    compteur.innerHTML = vie;
    vie =  10;
})

console.log(compteur);
console.log(number);
console.log(random);