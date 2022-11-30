function Baloto_revancha() {
  let s1 = document.querySelector(".seleccion1");
  let s2 = document.querySelector(".seleccion2");
  let s3 = document.querySelector(".seleccion3");
  let s4 = document.querySelector(".seleccion4");
  let s5 = document.querySelector(".seleccion5");
  let s6 = document.querySelector(".seleccion6");

  let seleccion1 = parseInt(s1.value);
  let seleccion2 = s2.value;
  let seleccion3 = s3.value;
  let seleccion4 = s4.value;
  let seleccion5 = s5.value;
  let seleccion6 = s6.value;

  console.log(seleccion1);
  console.log(seleccion2);
  console.log(seleccion3);
  console.log(seleccion4);
  console.log(seleccion5);
  console.log(seleccion6);

  let random1 = Math.floor(Math.random() * 42);
  let random2 = Math.floor(Math.random() * 42);
  let random3 = Math.floor(Math.random() * 42);
  let random4 = Math.floor(Math.random() * 42);
  let random5 = Math.floor(Math.random() * 42);
  let random6 = Math.floor(Math.random() * 16);

  setTimeout(() => {
    document.querySelector(".ball1").innerHTML = `<b>${random1}</b>`;
  });
  setTimeout(() => {
    document.querySelector(".ball2").innerHTML = `<b>${random2}</b>`;
  }, 1010);
  setTimeout(() => {
    document.querySelector(".ball3").innerHTML = `<b>${random3}</b>`;
  }, 2010);
  setTimeout(() => {
    document.querySelector(".ball4").innerHTML = `<b>${random4}</b>`;
  }, 3010);
  setTimeout(() => {
    document.querySelector(".ball5").innerHTML = `<b>${random5}</b>`;
  }, 4010);
  setTimeout(() => {
    document.querySelector(".ball6").innerHTML = `<b>${random6}</b>`;
  }, 5010);

  setTimeout(() => {
    if (
      seleccion1 == random1 ||
      seleccion2 == random2 ||
      seleccion3 == random3 ||
      seleccion4 == random4 ||
      seleccion5 == random5 ||
      seleccion6 == random6
    ) {
      Swal.fire({
        html: `
        <p>El resultado de las balotas es: <strong>${random1}-${random2}-${random3}-${random4}-${random5}-${random6}<br>:)</strong></p>
        <h1>¡Genial! Eres nuestro ganador, felicidades</h1>
        `,
      });
      setTimeout(() => {
        location.reload();
      }, 6000);
    } else {
      Swal.fire({
        html: `
        <p>El resultado de las balotas es: <strong>${random1}-${random2}-${random3}-${random4}-${random5}-${random6}<br>:(</strong></p>
        <h1>¡Ohhhh has perdidio, vuelvelo a intentar, no te rindas!</h1>
        `,
      });
      setTimeout(() => {
        location.reload();
      }, 6000);
    }
  }, 5030);
}

let boton_baloto = document.querySelector(".boton");

boton_baloto.addEventListener(`click`, Baloto_revancha);
