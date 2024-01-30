document.addEventListener('DOMContentLoaded', function (){
const horas = document.getElementsByid('hora');
const minutos = document.getElementsByid('minutos');
const segundos = document.getElementsByid('segundos');

setInterval(function mostrarHora() {
    var data= new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    horas.textContent = beforeMinutos(hours);
    minutos.textContent = beforeMinutos(minutes);
    segundos.textContent = beforeMinutos(seconds);

},1000);
mostrarHora();

function beforeMinutos(tempo){
    if(horas<10){
        horas = '0' + tempo;
    }
    if(minutos<10){
        minutos = '0' + tempo;
    }
    if(segundos<10){
        segundos = '0' + tempo;
    }
}








});