const divHora = document.getElementById("horario");
const divHora2 = document.getElementById("horario2");

const divOver = document.getElementById("over");

//la forma más fácil:
const hora = () => (divHora.innerHTML = Date());

//ahora a darle formato a la fecha! https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript

const dOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const hora2 = () => {
  const d = new Date();
  console.log(d);
  divHora2.innerHTML = d.toLocaleDateString("es", dOptions);
};

const over = () => {
  divOver.innerHTML = "eh, qué pasás por acá";
  divOver.style.color = "red";
};

const chau = () => {
  divOver.innerHTML = "eso, andate";
  divOver.style.color = "black";
  //ahora quiero que vuelva a la normalidad a los 3 segundos!
  //https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(() => {
    divOver.innerHTML = "no pases arriba mío";
    divOver.style.color = "black";
  }, 3000);
};
