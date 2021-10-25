const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const days_strings = ['Domingo', 'Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']

let today = new Date(Date.now()),
hora = today.getHours(),
minutos = today.getMinutes(),
segundos = today.getSeconds(),
dia = today.getDate(),
mes = meses[today.getMonth()],
año = today.getFullYear()
const info = document.getElementById('info').innerHTML = `${dia}, ${mes}, ${año}`

const muestraDia = document.getElementById('dia').innerHTML = `Hoy es ${days_strings[today.getDay()]}`

minutos = checkTime(minutos)
segundos = checkTime(segundos)
setInterval(() => {
    // let hoy = new Date(Date.now())
    // let hora = hoy.getHours(),
    // minutos = hoy.getMinutes(),
    // segundos = hoy.getSeconds()
    segundos += 01
    if (segundos == 60){
        minutos += 01
        segundos = 00
        
        if (minutos > 59){
            hora += 01
            minutos = 00
        }
    }
    
    const pantalla = document.getElementById('pantalla').innerHTML = `${hora} : ${minutos} : ${segundos}`
}, 1000);



// Funcion que cambia a dos cifras los minutos y segundos < 10
function checkTime (i){
    if (i < 10){
        i = "0" + i;
    }
    return i;
}