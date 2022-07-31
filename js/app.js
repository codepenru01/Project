var elMode = document.querySelector(".btn__other");
var elBody = document.querySelector("body");

elMode.addEventListener("click", function() {
    elBody.classList.toggle("dark");
})