
const DO4 = new Audio("src","sonidos2/DO4.mp3");


const reproducirNota(audio) => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0), 2000);
}
  
  const tocarTecla(idTecla, nota) => {
    const tecla = document.querySelector(idTecla);
    reproducirNota(nota);
    tecla.classList.add("active");
    setTimeout(() => tecla.classList.remove("active"), 100);
}
  
  const teclas = [
    { id: ".DO4", nota: DO4, key: 81 },
    { id: ".REb4", nota: REb4, key: 50 },
    { id: ".RE4", nota: RE4, key: 87 },
    { id: ".MIb4", nota: MIb4, key: 51 },
    { id: ".MI4", nota: MI4, key: 69 },
    { id: ".FA4", nota: FA4, key: 82 },
    { id: ".SOLb4", nota: SOLb4, key: 53 },
    { id: ".SOL4", nota: SOL4, key: 84 },
    { id: ".LAb4", nota: LAb4, key: 54 },
    { id: ".LA4", nota: LA4, key: 89 },
    { id: ".SIb4", nota: SIb4, key: 55 },
    { id: ".SI4", nota: SI4, key: 85 },
    { id: ".DO5", nota: DO5, key: 73 },
    { id: ".REb5", nota: REb5, key: 57 },
    { id: ".RE5", nota: RE5, key: 79 },
    { id: ".MIb5", nota: MIb5, key: 48 },
    { id: ".MI5", nota: MI5, key: 80 }
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
  });;