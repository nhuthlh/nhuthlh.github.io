
var buttons = document.querySelectorAll(".drum");
var audiow = new Audio("sounds/crash.mp3");
var audioa = new Audio("sounds/kick-bass.mp3");
var audios = new Audio("sounds/snare.mp3");
var audiod = new Audio("sounds/tom-1.mp3");
var audioj = new Audio("sounds/tom-2.mp3");
var audiok = new Audio("sounds/tom-3.mp3");
var audiol = new Audio("sounds/tom-4.mp3");


for (var i=0; i<7; i++) {
    buttons[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
} 

document.addEventListener("keypress", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);    

})


function playSound(key) {
    switch (key) {
        case "w":
            audiow.play();
            break;

        case "a":
            audioa.play();
            break;

        case "s":
            audios.play();
            break;

        case "d":
            audiod.play();
            break;

        case "j":
            audioj.play();
            break;
        
        case "k":
            audiok.play();
            break;
        
        case "l":
            audiol.play();
            break;
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key)
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}