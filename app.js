let random = getRndInteger (0, 100); 

var number = document.querySelector("#number.value");

let button = document.querySelector("#button");

let test = document.querySelector("#test");

test.innerHTML = random;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min ) ) + min;
}


button.addEventListener("click" , function(){

    if(number === random){
    window.alert("GG")
    }
        else if (number < random){
        window.alert("Trop haut")
        }
        else if(number > random){
            window.alert("Trop bas")
            }   
}
)

console.log(number)
console.log(random);