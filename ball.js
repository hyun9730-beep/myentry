// 몬스터볼 클릭 → 위 컨테이너 표시
const pokemons = document.querySelectorAll(".pokemon");
const infos = document.querySelectorAll(".pokemon-info");

pokemons.forEach(function(pokemon){

    pokemon.addEventListener("click", function(){

        const target = pokemon.dataset.target;

        infos.forEach(function(info){
            info.classList.remove("active");
        });

        document.querySelector("#" + target).classList.add("active");

    });

});


const popBtns = document.querySelectorAll(".pop-btn");
const popBoxes = document.querySelectorAll(".pop-box");

popBtns.forEach(function(btn){

    btn.addEventListener("click", function(event){

        event.stopPropagation();

        const targetId = btn.dataset.pop;
        const popup = document.querySelector("#" + targetId);
        const position = btn.getBoundingClientRect();

        popBoxes.forEach(function(box){
            box.style.display = "none";
        });

        popup.style.display = "block";

        popup.style.left =
    position.left +
    window.scrollX +
    position.width / 2 -
    popup.offsetWidth / 2
    + "px";


popup.style.top =
    position.bottom +
    window.scrollY +
    5
    + "px";
    
    });
});

const closeBtns = document.querySelectorAll(".pop-close");

closeBtns.forEach(function(close){
    close.addEventListener("click", function(event){
        event.stopPropagation();
        close.parentElement.style.display = "none";
    });
});