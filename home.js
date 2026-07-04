const intro = document.querySelector("#intro");
const title = document.querySelector("#title");
const text = document.querySelector("#text");

const entry = document.querySelector("#entry");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#close");

intro.addEventListener("click", function () {
    title.classList.add("show");
    text.classList.add("show");
});

entry.addEventListener("click", function (event) {
    event.stopPropagation();

    const position = entry.getBoundingClientRect();

    popup.style.display = "block";

    popup.style.left =
        position.left + position.width / 2 - popup.offsetWidth / 2 + "px";

    popup.style.top =
        position.top - popup.offsetHeight - 20 + "px";
});

closeBtn.addEventListener("click", function (event) {
    event.stopPropagation();

    popup.style.display = "none";
});