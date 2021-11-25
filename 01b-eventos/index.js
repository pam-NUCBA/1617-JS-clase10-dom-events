const menu = document.getElementById("menu");
const span = document.getElementById("span");
//el alerta corta la carga hasta que lo aceptemos!

//const bienvenido = () => alert("te ganaste 1000000 de pesos!")

//*podemos crear hijos!
const bienvenido = () => {
  //los creo:
  let title = document.createElement("h1");
  let titleText = document.createTextNode(
    "bienvenido, te ganaste un millón de pesos"
  );

  //los aplico al documento! si no hago esto no los inserta
  document.body.appendChild(title);
  title.appendChild(titleText);
  //https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction
};

const showMenu = () => {
  //para ver si tiene o no los classlist:
  console.log(menu.classList);
  //contains es "lo tiene?"
  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
    span.innerHTML = "cerrar";
  } else {
    menu.classList.add("hide");
    span.innerHTML = "abrir";
  }
};
