let menuVisible = false;

//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList='';
        menuVisible=false;
    }else{
       document.getElementById('nav').classList='responsive';
       menuVisible=true;
    }
}

function seleccionar(){
    //ocultar el menu una vez que se seleccion una opcion
    document.getElementById('nav').classList = '';
    menuVisible= false;
}
//funcion que aplica las animaciones de las habilidades
    function efectoHabilidades(){
        var skills = document.getElementById('skills');
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if(distancia_skills >= 300){
            let habilidades = document.getElementsByName('progreso');
            habilidades[0].classList.add('javascript');
            habilidades[1].classList.add('html');
            habilidades[2].classList.add('css');
            habilidades[3].classList.add('comunicacion');
            habilidades[4].classList.add('creatividad');
            habilidades[5].classList.add('dedicacion');
            habilidades[6].classList.add('proyect');
        }
    }

//detecto el scrolling para aplciar animacion a barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}