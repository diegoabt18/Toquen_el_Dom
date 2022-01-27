

const c3= new Audio("sonidos2/40.mp3");
const c3s= new Audio("sonidos2/41.mp3");
const d3= new Audio("sonidos2/42.mp3");
const d3s= new Audio("sonidos2/43.mp3");
const e3= new Audio("sonidos2/44.mp3");
const f3= new Audio("sonidos2/45.mp3");
const f3s= new Audio("sonidos2/46.mp3");
const g3= new Audio("sonidos2/47.mp3");
const g3s= new Audio("sonidos2/48.mp3");
const a3= new Audio("sonidos2/49.mp3");
const a3s= new Audio("sonidos2/50.mp3");
const b3= new Audio("sonidos2/51.mp3");

const c4= new Audio("sonidos2/52.mp3");
const c4s= new Audio("sonidos2/53.mp3");
const d4= new Audio("sonidos2/54.mp3");
const d4s= new Audio("sonidos2/55.mp3");
const e4= new Audio("sonidos2/56.mp3");
const f4= new Audio("sonidos2/57.mp3");
const f4s= new Audio("sonidos2/58.mp3");
const g4= new Audio("sonidos2/59.mp3");
const g4s= new Audio("sonidos2/60.mp3");
const a4= new Audio("sonidos2/61.mp3");
const a4s= new Audio("sonidos2/62.mp3");
const b4= new Audio("sonidos2/63.mp3");

const c5= new Audio("sonidos2/64.mp3");
const c5s= new Audio("sonidos2/65.mp3");
const d5= new Audio("sonidos2/66.mp3");
const d5s= new Audio("sonidos2/67.mp3");
const e5= new Audio("sonidos2/68.mp3");
const f5= new Audio("sonidos2/69.mp3");
const f5s= new Audio("sonidos2/70.mp3");
const g5= new Audio("sonidos2/71.mp3");
const g5s= new Audio("sonidos2/72.mp3");
const a5= new Audio("sonidos2/73.mp3");
const a5s= new Audio("sonidos2/74.mp3");
const b5= new Audio("sonidos2/75.mp3");


const reproducirNota = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0), 2000);
};

const tocarTecla = (idTecla, nota) => {
    const tecla = document.querySelector(idTecla);
    reproducirNota(nota);
    tecla.classList.add("active");
    setTimeout(() => tecla.classList.remove("active"), 100);
};

const teclas = [
    { id: ".c3", nota: c3, key: 97 },
    { id: ".c3s", nota: c3s, key: 100 },
    { id: ".d3", nota: d3, key: 98 },
    { id: ".d3s", nota: d3s, key: 101 },
    { id: ".e3", nota: e3, key: 99 },
    { id: ".f3", nota: f3, key: 102 },
    { id: ".f3s", nota: f3s, key: 103 },
    { id: ".g3", nota: g3, key: 107 },
    { id: ".g3s", nota: g3s, key: 104 },
    { id: ".a3", nota: a3, key: 10 },
    { id: ".a3s", nota: a3s, key: 105 },
    { id: ".b3", nota: b3, key: 111 },
    
    { id: ".c4", nota: c4, key: 81 },
    { id: ".c4s", nota: c4s, key: 50 },
    { id: ".d4", nota: d4, key: 87 },
    { id: ".d4s", nota: d4s, key: 51 },
    { id: ".e4", nota: e4, key: 69 },
    { id: ".f4", nota: f4, key: 82 },
    { id: ".f4s", nota: f4s, key: 53 },
    { id: ".g4", nota: g4, key: 84 },
    { id: ".g4s", nota: g4s, key: 54 },
    { id: ".a4", nota: a4, key: 89 },
    { id: ".a4s", nota: a4s, key: 55 },
    { id: ".b4", nota: b4, key: 85 },

    { id: ".c5", nota: c5, key: 73 },
    { id: ".c5s", nota: c5s, key: 83 },
    { id: ".d5", nota: d5, key: 79 },
    { id: ".d5s", nota: d5s, key: 70 },
    { id: ".e5", nota: e5, key: 91 },
    { id: ".f5", nota: f5, key: 72 },
    { id: ".f5s", nota: f5s, key: 90 },
    { id: ".g5", nota: g5, key: 75 },
    { id: ".g5s", nota: g5s, key: 88 },
    { id: ".a5", nota: a5, key: 76 },
    { id: ".a5s", nota: a5s, key: 67 },
    { id: ".b5", nota: b5, key: 59 },

   
];



teclas.forEach(({ id, nota }) => {
    const tecla = document.querySelector(id);
    tecla.addEventListener("click", () => tocarTecla(id, nota));
});

window.addEventListener("keydown", ({ keyCode }) => {
    const teclaPresionada = teclas.filter(({ key }) => key === keyCode);
    if (teclaPresionada[0]) {
    const { id, nota } = teclaPresionada[0];
    tocarTecla(id, nota);
    }
});


/*   JAVASCRIPT PIANO   */

function myfuncion(){
    let seccion2=document.getElementById("s2");
    let seccion3=document.getElementById("s3");
    let seccion4=document.getElementById("s4");
    let seccion5=document.getElementById("s5");

    seccion2.className="seccion2";
    seccion3.className="inhabilitado";
    seccion4.className="seccion2 inhabilitado";
    seccion5.className="seccion2 inhabilitado";
}
function myfuncion2(){
    let seccion2=document.getElementById("s2");
    let seccion3=document.getElementById("s3");
    let seccion4=document.getElementById("s4");
    let seccion5=document.getElementById("s5");

    seccion2.className="seccion2 inhabilitado";
    seccion3.className=" ";
    seccion4.className="seccion2 inhabilitado";
    seccion5.className="seccion2 inhabilitado";
}

function myfuncion3(){
    let seccion2=document.getElementById("s2");
    let seccion3=document.getElementById("s3");
    let seccion4=document.getElementById("s4");
    let seccion5=document.getElementById("s5");

    seccion2.className="seccion2 inhabilitado";
    seccion3.className="inhabilitado";
    seccion4.className="seccion2";
    seccion5.className="seccion2 inhabilitado";
}

function myfuncion4(){
    let seccion2=document.getElementById("s2");
    let seccion3=document.getElementById("s3");
    let seccion4=document.getElementById("s4");
    let seccion5=document.getElementById("s5");

    seccion2.className="seccion2 inhabilitado";
    seccion3.className="inhabilitado";
    seccion4.className="seccion2 inhabilitado";
    seccion5.className="seccion2";
}


function cambiarpista(e){
    comprobar(e.target.id);
}

function comprobar(boton){
    let video1=document.getElementById("v2");
    let video2=document.getElementById("v3");
    let video3=document.getElementById("v4");
    console.log(boton.id);
    switch (boton) {
        case "b1":
            video1.className="video"
            video2.className="video inhabilitado"
            video3.className="video inhabilitado"
            break;
        case "b2":
            video1.className="video inhabilitado"
            video2.className="video"
            video3.className="video inhabilitado"
            break;
        case "b3":
            video1.className="video inhabilitado"
            video2.className="video inhabilitado"
            video3.className="video"
        break;
    }
}
