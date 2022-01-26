function myfuncion(){
    /*alert("si funciona");*/
    const cp4= new Audio("sonidos/lomographicmusic__piano-07-c4.wav");
    cp4.play();
    const t=document.querySelector(".c4");
     console.log("que hay aqui"+ t);
}

const c4= new Audio("sonidos/tesabob2001__c4-middle-c.mp3");
const c4s= new Audio("sonidos/tesabob2001__c-4.mp3");
const d4= new Audio("sonidos/tesabob2001__d4.mp3");
const d4s= new Audio("sonidos/tesabob2001__d-4.mp3");
const e4= new Audio("sonidos/tesabob2001__e4.mp3");
const f4= new Audio("sonidos/tesabob2001__f4.mp3");
const f4s= new Audio("sonidos/tesabob2001__f-4.mp3");
const g4= new Audio("sonidos/tesabob2001__g4.mp3");
const g4s= new Audio("sonidos/tesabob2001__g-4.mp3");
const a4= new Audio("sonidos/tesabob2001__a4.mp3");
const a4s= new Audio("sonidos/tesabob2001__a-4.mp3");
const b4= new Audio("sonidos/tesabob2001__b4.mp3");

const c5= new Audio("sonidos/tesabob2001__c5.mp3");
const c5s= new Audio("sonidos/tesabob2001__c-5.mp3");
const d5= new Audio("sonidos/tesabob2001__d5.mp3");
const d5s= new Audio("ssonidos/tesabob2001__d-5.mp3");
const e5= new Audio("sonidos/tesabob2001__e5.mp3");
const f5= new Audio("sonidos/tesabob2001__f5.mp3");
const f5s= new Audio("sonidos/tesabob2001__f-5.mp3");
const g5= new Audio("sonidos/tesabob2001__g5.mp3");
const g5s= new Audio("sonidos/tesabob2001__g-5.mp3");
const a5= new Audio("sonidos/tesabob2001__a5.mp3");
const a5s= new Audio("sonidos/tesabob2001__a-5.mp3");
const b5= new Audio("sonidos/tesabob2001__b5.mp3");

const c3= new Audio("sonidos/tesabob2001__c3.mp3");
const c3s= new Audio("sonidos/tesabob2001__c-3.mp3");
const d3= new Audio("sonidos/tesabob2001__d3.mp3");
const d3s= new Audio("sonidos/tesabob2001__d-3.mp3");
const e3= new Audio("sonidos/tesabob2001__e3.mp3");
const f3= new Audio("sonidos/tesabob2001__f3.mp3");
const f3s= new Audio("sonidos/tesabob2001__f-3.mp3");
const g3= new Audio("sonidos/tesabob2001__g3.mp3");
const g3s= new Audio("sonidos/tesabob2001__g-3.mp3");
const a3= new Audio("sonidos/tesabob2001__a3.mp3");
const a3s= new Audio("sonidos/tesabob2001__a-3.mp3");
const b3= new Audio("sonidos/tesabob2001__b3.mp3");

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