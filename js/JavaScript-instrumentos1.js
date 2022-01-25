function myfuncion(){
    /*alert("si funciona");*/
    const cp4= new Audio("sonidos/lomographicmusic__piano-07-c4.wav");
    cp4.play();
    const t=document.querySelector(".c4");
     console.log("que hay aqui"+ t);
}

const c4= new Audio("sonidos/lomographicmusic__piano-07-c4.wav");
const c4s= new Audio("sonidos/lomographicmusic__piano-08-c-4.wav");
const d4= new Audio("sonidos/lomographicmusic__piano-09-d4.wav");
const d4s= new Audio("sonidos/lomographicmusic__piano-11-d-4.wav");
const e4= new Audio("sonidos/lomographicmusic__piano-13-e4.wav");
const f4= new Audio("sonidos/lomographicmusic__piano-15-f4.wav");
const f4s= new Audio("sonidos/lomographicmusic__piano-18-f-4.wav");
const g4= new Audio("sonidos/lomographicmusic__piano-19-g4.wav");
const g4s= new Audio("sonidos/lomographicmusic__piano-22-g-4.wav");
const a4= new Audio("sonidos/lomographicmusic__piano-23-a4.wav");
const a4s= new Audio("sonidos/lomographicmusic__piano-24-a-4.wav");
const b4= new Audio("sonidos/lomographicmusic__piano-25-b4.wav");


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