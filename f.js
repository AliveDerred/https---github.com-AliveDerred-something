// let myh1 = document.getElementById("first")
// console.log(myh1);

// let myA = document.getElementById("second")
// console.log(myA);

// let myAka = document.getElementById("aka")
// console.log(myAka);

// let myh2 = document.getElementsByClassName()


let myInput = document.getElementsByTagName('input')[0];

console.log(myInput.innerHTML);

console.log(myInput.outerHTML);

myInput.outerHTML = "<h1 style='color:red; background-color:aqua;'>salom!</h1>";
