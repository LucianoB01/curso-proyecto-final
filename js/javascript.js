/*const headerSlider = () => {
    const header = document.getElementById("slider-foto-1");

    const fotoUno = document.getElementById("foto-1");
    const fotoDos = document.getElementById("foto-2");
    const fotoTres = document.getElementById("foto-3");
    const fotoCuatro = document.getElementById("foto-4");

    fotoDos.style.display = "block";

    fotoUno.style.display = "none";
    fotoTres.style.display = "none";
    fotoCuatro.style.display = "none";

    //header.style.transform="translatex(-100%)";
}

const btnSliderUno = document.getElementsByClassName("material-symbols-outlined")[0];

btnSliderUno.addEventListener("click", headerSlider);
*/

// ---------- MENU MOBILE ----------

const menuBtn = document.querySelector("#menu-btn"); 
const menuBtnClose = document.querySelector("#menu-close"); 
const menu = document.querySelector("#mobile-menu-js"); 

menuBtn.onclick = function(){
    menu.classList.toggle("show");
};

menuBtnClose.onclick = function(){
    menu.classList.remove("show");
};

/*

const menuMobile = () => {

}

menuBtn.addEventListener("click", menuMobile);

*/

// ---------- HEADER SLIDER ----------

const fotos = document.getElementsByClassName("slider-foto");
const botones = document.querySelectorAll(".radio-btn");

const headerSlider = (event) => {

    const slider = document.getElementById("slider-foto-1");

    for(let foto of fotos){
        if(foto.getAttribute("id") == event.target.parentElement.getAttribute("id")){
            //foto.style.display = "block"; 

            //console.log(foto.id);

            switch(foto.getAttribute("id")){
                case "foto-1":
                    botones[0].innerHTML = "radio_button_checked";
                    botones[1].innerHTML = "radio_button_unchecked";
                    botones[2].innerHTML = "radio_button_unchecked";
                    botones[3].innerHTML = "radio_button_unchecked";
                    slider.classList.add("slide-1");
                    slider.classList.remove("slide-2");
                    slider.classList.remove("slide-3"); 
                    slider.classList.remove("slide-4");
                    break;
                case "foto-2":
                    botones[0].innerHTML = "radio_button_unchecked";
                    botones[1].innerHTML = "radio_button_checked";
                    botones[2].innerHTML = "radio_button_unchecked";
                    botones[3].innerHTML = "radio_button_unchecked";
                    slider.classList.add("slide-2");
                    slider.classList.remove("slide-1");
                    slider.classList.remove("slide-3"); 
                    slider.classList.remove("slide-4");
                    break;
                case "foto-3":
                    botones[0].innerHTML = "radio_button_unchecked";
                    botones[1].innerHTML = "radio_button_unchecked";
                    botones[2].innerHTML = "radio_button_checked";
                    botones[3].innerHTML = "radio_button_unchecked";
                    slider.classList.add("slide-3");
                    slider.classList.remove("slide-1");
                    slider.classList.remove("slide-2"); 
                    slider.classList.remove("slide-4");
                    break;
                case "foto-4":
                    botones[0].innerHTML = "radio_button_unchecked";
                    botones[1].innerHTML = "radio_button_unchecked";
                    botones[2].innerHTML = "radio_button_unchecked";
                    botones[3].innerHTML = "radio_button_checked";
                    slider.classList.add("slide-4");
                    slider.classList.remove("slide-1");
                    slider.classList.remove("slide-2"); 
                    slider.classList.remove("slide-3");
                    break;
            }
        } else {
            //slider.classList.remove("slide-2");
            //foto.style.display = "none"; 
        }
    }

}

botones.forEach( boton => {
    boton.addEventListener("click", headerSlider);
});




// ---------- HABITACIONES ----------

const habitacionesBtns = document.querySelectorAll(".info-nav ul li");

const habitacionesMenu = (boton) => {
    const habitacionesInfo = document.querySelectorAll(".info"),
    habitacionesFotos = document.querySelectorAll(".fotos");
    let botonesOcultar = [], ocultar = [], ocultarFotos = []; 
    let botonesMostar, mostrar, mostrarFotos; 

    for(let i=0;i<habitacionesBtns.length;i++){
        if(habitacionesBtns[i] != boton.path[0]){
            ocultar.push(habitacionesInfo[i]);
            ocultarFotos.push(habitacionesFotos[i]);
            botonesOcultar.push(habitacionesBtns[i]);
        } else {
            mostrar = habitacionesInfo[i]; 
            mostrarFotos = habitacionesFotos[i];
            botonesMostar = habitacionesBtns[i];
        } 
    } 

    for(let i=0;i < ocultar.length;i++){
        ocultar[i].style.display = "none";
        ocultarFotos[i].style.display = "none"; 
        botonesOcultar[i].style.color = "grey";
    }

    mostrar.style.display = "block";
    mostrarFotos.style.display = "block";
    botonesMostar.style.color = "#000";
} 

habitacionesBtns.forEach( boton => {
    boton.addEventListener("click", habitacionesMenu);
});

