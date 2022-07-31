//JSON DE PARTICLES
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
particlesJS(
    {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 500
            }
          },
          "color": {
            "value": "#EF5B0C"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 4,
              "color": "#816797"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#457b9d",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);

//FUNCION PARA DEJAR FIJO EL NAVBAR
const nav= document.querySelector("nav");
window.addEventListener('scroll',function(){
  nav.classList.toggle('nav_fixed', window.scrollY>650)
})

//FUNCION APARECER HABILIDADES LADO DERECHO
let imagenes = document.querySelectorAll(".aparecerDE");
function aparecerDer(){
  let scrollTop=document.documentElement.scrollTop;
  for(var i=0;i<imagenes.length;i++){
    let altura=imagenes[i].offsetTop;
    if(altura-500<scrollTop){
      imagenes[i].classList.add("aparecerDer");
      imagenes[i].style.opacity=1;
    }
  }
}
window.addEventListener('scroll',aparecerDer);

//FUNCION APARECER DE ABAJO DE LA PANTALLA
let aparecerAB=document.querySelectorAll(".aparecerAB");
function aparecerABAJO(){
  let scrollTop=document.documentElement.scrollTop;
  for(let i=0;i<aparecerAB.length;i++){
    let altura= aparecerAB[i].offsetTop;
    if(altura-500<scrollTop){
      aparecerAB[i].style.opacity=1;
      aparecerAB[i].classList.add("aparecerAbajo");
    }
  }
}
window.addEventListener('scroll',aparecerABAJO);

//FUNCION APARECER DE ARRIBA DE LA PANTALLA
let aparecerAR=document.querySelectorAll(".aparecerAR");
function aparecerARRIBA(){
  let scrollTop=document.documentElement.scrollTop;
  for(let i=0;i<aparecerAR.length;i++){
    let altura= aparecerAR[i].offsetTop;
    if(altura-500<scrollTop){
      aparecerAR[i].style.opacity=1;
      aparecerAR[i].classList.add("aparecerArriba");
    }
  }
}
window.addEventListener('scroll',aparecerARRIBA);

//FUNCION APARECER POR LA IZQUIERDA
let titulos = document.querySelectorAll(".aparecerIZ");
function aparecerIzq(){
  let scroll= document.documentElement.scrollTop;
  for(let i=0; i<titulos.length; i++){
    let alto=titulos[i].offsetTop;
    if(alto-500 < scroll){
      titulos[i].style.opacity=1;
      titulos[i].classList.add("aparecerIzq")
    }
  }
}
window.addEventListener('scroll',aparecerIzq);



//FORMULARIO DE CONTACTO
//escalar

let escala= document.querySelectorAll(".formPop");
function escalar(){
  let scroll= document.documentElement.scrollTop;
  for(let i=0; i<escala.length; i++){
    let alto=escala[i].offsetTop;
    if(alto-350 < scroll){
      escala[i].style.opacity=1;
      escala[i].classList.add("escala")
    }
  }
}
window.addEventListener('scroll',escalar);


//form
const $form=document.querySelector('#form');
$form.addEventListener('submit',enviarEmail);
let mensaje=document.querySelector(".CardMensaje")
function enviarEmail(event){
  event.preventDefault();
  const form =new FormData(this)
  swal({
    text:"Su mensaje fue enviado con exito. Pronto recibira una respuesta",
    icon:"success"  
  });
  this.reset();

}
