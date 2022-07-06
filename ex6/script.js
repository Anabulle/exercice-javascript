let a = document.querySelector("a");
a.addEventListener("click", function() {
    a.remove();
})

let input = document.querySelector("input");
input.addEventListener("mouseenter", function() {
    document.body.style.background = "indianred";
})

input.addEventListener("mouseout", function() {
    document.body.style.background = "white";
    setTimeout(function() {
        document.body.style.background = 'rgb(143, 63, 63)';
    }, 5000);

})

let h1 = document.querySelector("h1");

let section = document.querySelector("section");
h1.addEventListener("click", function() {
    alert("vous cliquez sur le titre");
})
section.addEventListener("click", function() {
    alert("vous cliquez sur la section");
})

let inter;

function disco() {
    if (!inter) {
        inter = setInterval(function() {
            input.style.backgroundColor = 'rgb(' + changeColor() + ',' + changeColor() + ',' + changeColor() + ')';
        }, 400);
    }
}
disco();

function changeColor() {
    let randomColor = Math.round(Math.random() * 255);
    return randomColor
}

function changecolor2() {
    let randomColor = Math.floor(Math.random() * 255).toString(3)
    return randomColor
}
let button = document.querySelector('button');
button.addEventListener("click", function() {
    clearInterval(inter);
    inter = null;
})
let start = document.getElementById('start');
start.addEventListener("click", function() {
    disco();
})