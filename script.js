function actualizarReloj() {
    const ahora = new Date();
  
    // Obtener horas, minutos y segundos
    const segundos = ahora.getSeconds();
    const minutos = ahora.getMinutes();
    const horas = ahora.getHours() % 12;
  
    // Calcular ángulos de rotación
    const anguloSegundos = (360 / 60) * segundos;
    const anguloMinutos = (360 / 60) * minutos + (6 / 60) * segundos;
    const anguloHoras = (360 / 12) * horas + (30 / 60) * minutos;
  
    // Actualizar rotación de las manecillas
    document.querySelector('.segundo').style.transform = `rotate(${anguloSegundos}deg)`;
    document.querySelector('.minuto').style.transform = `rotate(${anguloMinutos}deg)`;
    document.querySelector('.hora').style.transform = `rotate(${anguloHoras}deg)`;
  }
  
  // Actualizar cada segundo
  setInterval(actualizarReloj, 1000);
  actualizarReloj();
  