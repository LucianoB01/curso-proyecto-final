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

const fotos = document.getElementsByClassName("slider-foto");
const botones = document.querySelectorAll(".material-symbols-outlined");


const headerSlider = (event) => {

    //console.log(event.target.parentElement);

    //console.log(fotos);

    //const elementIndex = event.path[1];

    //fotos[elementIndex].style.display = "block";

    for(let foto of fotos){
        //console.log(foto.getAttribute("id"));
        //console.log(event.target.parentElement.getAttribute("id"));
        if(foto.getAttribute("id") == event.target.parentElement.getAttribute("id")){
            foto.style.display = "block"; 
        } else {
            foto.style.display = "none"; 
        }
    }

    /*for(let foto of fotos){
        if(fotos.indexOf(foto) === elementIndex){
            continue;
        }

        foto.style.display = "none"; 
    }*/
    
}

botones.forEach( boton => {
    boton.addEventListener("click", headerSlider);
});