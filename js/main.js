var conteiner = document.querySelector(".conteiner");
var small_conteiner = document.querySelector(".small_conteiner");

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        small_conteiner.style.left = "500.8px";
    }

    if (event.key === "ArrowLeft") {
        small_conteiner.style.left = "7px";
    }

    if (event.key === "ArrowDown") {
        small_conteiner.style.top =  "550px";
    }
    if (event.key === "ArrowUp") {
        small_conteiner.style.top =  "190px";
    }

    if (event.key === "Escape") {
        small_conteiner.style.background = prompt("Enter Color: ");
    }
});



