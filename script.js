let menuVisibile = false;

//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisibile) {
    document.getElementById("nav").classList = "";
    menuVisibile = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisibile = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono la opcion
  document.getElementById("nav").classList = "";
  menuVisibile = false;
}

document.addEventListener("DOMContentLoaded", function () {
  // Espera a que el documento HTML se cargue completamente

  // Busca el elemento con la clase "arrow-icon"
  const arrowIcon = document.querySelector(".arrow-icon");

  // Agrega un evento de clic al icono de flecha
  arrowIcon.addEventListener("click", function () {
    // Cambia la posición vertical de la flecha (ajusta según tus necesidades)
    const currentPosition = window.scrollY;
    const targetPosition = 900; // Posición a la que deseas desplazar

    // Realiza un desplazamiento suave
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
