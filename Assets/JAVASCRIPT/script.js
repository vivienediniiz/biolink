document.addEventListener("DOMContentLoaded", () => {
  const background = document.getElementById("background"); // Corrigido para o container visível
  const saudacao = document.getElementById("saudacao");
  const hoursEl = document.getElementById("hours");

  // Obter hora atual
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes().toString().padStart(2, "0");

  hoursEl.textContent = `${hora}:${minutos}`;

  if (hora >= 6 && hora < 12) {
    background.style.backgroundImage = "url('Assets/IMAGENS/dia.jpg')";
    saudacao.textContent = "Bom dia!🌅";
  } else if (hora >= 12 && hora < 18) {
    background.style.backgroundImage = "url('Assets/IMAGENS/tarde.jpg')";
    saudacao.textContent = "Boa tarde!☀️";
  } else {
    background.style.backgroundImage = "url('Assets/IMAGENS/noite.jpg')";
    saudacao.textContent = "Boa noite!🌙";
  }

  background.style.backgroundSize = "cover";
  background.style.backgroundPosition = "center";
});
