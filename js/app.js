const btnTop = document.getElementById("btnTop");

// Mostrar botão ao rolar
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

// Voltar ao topo ao clicar
btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});

