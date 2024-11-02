const datoGuardado = localStorage.getItem('datoGuardado')
const contenedorDato = document.getElementById('data')

if (datoGuardado){
contenedorDato.innerHTML = datoGuardado}
else {
contenedorDato.innerHTML = 'No hay datos guardados'
}


