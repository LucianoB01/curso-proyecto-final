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

// ---------- HEADER SLIDER ----------

const fotos = document.getElementsByClassName("slider-foto");
const botones = document.querySelectorAll(".radio-btn");

const headerSlider = (event) => {

    const slider = document.getElementById("slider-foto-1");

    for(let foto of fotos){
        if(foto.getAttribute("id") == event.target.parentElement.getAttribute("id")){

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

