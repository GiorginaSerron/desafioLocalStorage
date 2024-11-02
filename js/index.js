document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById("inputText")
    const boton = document.getElementById("buttonText")

    boton.addEventListener ('click', function (){
    let dato = input.value  
    if (dato){
        localStorage.setItem ('datoGuardado', dato);
        input.value = '';
        
    }
    })

    localStorage.setItem ('example', 'exampleValue');
    localStorage.removeItem('example')
    console.log(localStorage.getItem('example'))

})
