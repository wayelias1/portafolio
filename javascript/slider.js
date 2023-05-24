const slider = document.querySelector("#slider");
let sliderCaja = document.querySelectorAll(".slider-box");
let sliderCajaLast = sliderCaja[sliderCaja.length -1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderCajaLast);

function moverDer(){
    let sliderCajaFirst = document.querySelectorAll(".slider-box")[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderCajaFirst);
        slider.style.marginLeft = "-50%";
    }, 500);
}

btnright.addEventListener('click', function(){
    moverDer();
});

function moverIzq(){
    let sliderCaja = document.querySelectorAll(".slider-box");
    let sliderCajaLast = sliderCaja[sliderCaja.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderCajaLast);
        slider.style.marginLeft = "-50%";
    }, 500);
}
btnleft.addEventListener('click', function(){
    moverIzq();
});