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

const c5= new Audio("sonidos/lomographicmusic__piano-26-c5.wav");
const c5s= new Audio("sonidos/lomographicmusic__piano-31-c-5.wav");
const d5= new Audio("sonidos/lomographicmusic__piano-36-d5.wav");
const d5s= new Audio("sonidos/lomographicmusic__piano-40-d-5.wav");
const e5= new Audio("sonidos/lomographicmusic__piano-41-e5.wav");
const f5= new Audio("sonidos/lomographicmusic__piano-42-f5.wav");
const f5s= new Audio("sonidos/lomographicmusic__piano-43-f-5.wav");
const g5= new Audio("sonidos/lomographicmusic__piano-44-g5.wav");
const g5s= new Audio("sonidos/lomographicmusic__piano-45-g-5.wav");
const a5= new Audio("sonidos/lomographicmusic__piano-46-a5.wav");
const a5s= new Audio("sonidos/lomographicmusic__piano-47-a-5.wav");
const b5= new Audio("sonidos/lomographicmusic__piano-50-b5.wav");

const c6= new Audio("sonidos/lomographicmusic__piano-51-c6.wav");
const c6s= new Audio("sonidos/lomographicmusic__piano-52-c-6.wav");
const d6= new Audio("sonidos/lomographicmusic__piano-53-d6.wav");
const d6s= new Audio("sonidos/lomographicmusic__piano-54-d-6.wav");
const e6= new Audio("sonidos/lomographicmusic__piano-55-d-6.wav");
const f6= new Audio("sonidos/lomographicmusic__piano-56-g-6.wav");
const f6s= new Audio("sonidos/lomographicmusic__piano-57-g-6.wav");
const g6= new Audio("sonidos/lomographicmusic__piano-58-a6.wav");
const g6s= new Audio("sonidos/lomographicmusic__piano-59-a6.wav");
const a6= new Audio("sonidos/lomographicmusic__piano-60-a6.wav");
const a6s= new Audio("sonidos/lomographicmusic__piano-61-a-6.wav");
const b6= new Audio("sonidos/lomographicmusic__piano-62-a-6.wav");

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

    { id: ".c6", nota: c6, key: 97 },
    { id: ".c6s", nota: c6s, key: 100 },
    { id: ".d6", nota: d6, key: 98 },
    { id: ".d6s", nota: d6s, key: 101 },
    { id: ".e6", nota: e6, key: 99 },
    { id: ".f6", nota: f6, key: 102 },
    { id: ".f6s", nota: f6s, key: 103 },
    { id: ".g6", nota: g6, key: 107 },
    { id: ".g6s", nota: g6s, key: 104 },
    { id: ".a6", nota: a6, key: 10 },
    { id: ".a6s", nota: a6s, key: 105 },
    { id: ".b6", nota: b6, key: 111 },
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