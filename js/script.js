//Funciones de la navbar
//capturamos botones
let btninicio = document.querySelector("#nav__btninicio");
let btnportfolio = document.querySelector("#nav__btnportfolio");
let btncv = document.querySelector("#nav__btncv");

//Capturamos sections
let inicio = document.querySelector("#home");
let portfolio = document.querySelector("#portfolio");
let cv = document.querySelector("#cv");

const fndisplay = (active, dn1, dn2) => {
  //Mostrar la section que queremos ver
  active.classList.remove("dn");
  active.classList.add("db");
  //Ocultar las otras
  dn1.classList.remove("db");
  dn1.classList.add("dn");
  dn2.classList.remove("db");
  dn2.classList.add("dn");
};

//Listeners para cada botón
btninicio.addEventListener("click", () => {
  fndisplay(inicio, portfolio, cv);
});
btnportfolio.addEventListener("click", () => {
  fndisplay(portfolio, inicio, cv);
});
btncv.addEventListener("click", () => {
  fndisplay(cv, portfolio, inicio);
});
