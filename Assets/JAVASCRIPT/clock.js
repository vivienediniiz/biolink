function atualizarRelogio() {
    const agora = new Date();


    //Formata com 2 digitos
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    document.getElementById('hours').textContent = horaFormatada;
}

//Atualiza relogio a cada segundo
setInterval(atualizarRelogio, 1000);

//Atualiza imediatamente ao carregar
atualizarRelogio();