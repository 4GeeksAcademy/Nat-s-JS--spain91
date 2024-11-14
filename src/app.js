/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/excusas.jpg";



function generarExcusa() {

  let quien = ["el perro", "el gato", "un dinisaurio", "un alien"];
  let accion = ["se comio", "se llevo", "hizo pedazos", "destruyo"];
  let objeto = ["mis deberes", "mi telefono", "el coche", "mi dinero"];
  let lugar = ["antes de clase", "mientras dormia", "cundo fui a la compra", "mientras comia"];


  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let objetoIndex = Math.floor(Math.random() * objeto.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);

  document.querySelector("#excuse").innerHTML = quien[quienIndex] + " "
    + accion[accionIndex] + " " + objeto[objetoIndex] + " " + lugar[lugarIndex];
};


window.onload = function () {
  generarExcusa();
}



