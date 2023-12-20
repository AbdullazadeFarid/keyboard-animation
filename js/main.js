var conteiner = document.querySelector(".conteiner");
var small_conteiner = document.querySelector(".small_conteiner");

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        small_conteiner.style.left = "23.4%";
    }

    if (event.key === "ArrowLeft") {
        small_conteiner.style.left = "7px";
    }

    if (event.key === "ArrowDown") {
        small_conteiner.style.top =  "56%";
    }



    if (event.key === "ArrowUp") {

        small_conteiner.style.top =  "20.8%";

    }

    if (event.key === "Escape") {
        small_conteiner.style.background = prompt("");
    }
});



