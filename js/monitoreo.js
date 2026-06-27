const formulario = document.getElementById('formMonitoreo');
const arrayPlantasEvaluadas = []; // Array para almacenar los objetos de plantas evaluadas
// funcion capturar datos
function capturarDatosFormulario(){
    const plantaEvaluada = {
        // Card Turno
        turno : document.getElementById('turno').value,
        lote : document.getElementById('lote').value,
        parada : Number(document.getElementById('paradaDisplay').textContent),
        estadofenologico : document.getElementById('estadoFenologico').value,
        // Card Fenologia
        brotes : Number(document.getElementById('brotes').value),
        terminales : Number(document.getElementById('terminales').value),
        ramasnuevas : Number(document.getElementById('ramas-nuevas').value),
        flores : Number(document.getElementById('flores').value),
        frutos : Number(document.getElementById('frutos').value),
        // card chloridea 
        posturas : Number(document.getElementById('posturas').value),
        larvas : Number(document.getElementById('larvas').value),
        brotesdanados : Number(document.getElementById('brotes-danados').value),
        terminalesdanados : Number(document.getElementById('terminales-danados').value),
        ramasnuevasdanados : Number(document.getElementById('ramas-nuevas-danados').value),
        racimofloralposturas : Number(document.getElementById('racimo-floral-posturas').value),
        racimoflorallarvas : Number(document.getElementById('racimo-floral-larvas').value),
        frutosposturas : Number(document.getElementById('frutos-posturas').value),
        frutoslarvas : Number(document.getElementById('frutos-larvas').value),
        // card Mosca blanca
        adultosplanta : Number(document.getElementById('adultos-planta').value),
        ninfashoja : Number(document.getElementById('ninfas-hoja').value),
        huevoshoja : Number(document.getElementById('huevos-hoja').value),        
    }
    return plantaEvaluada;
}
function incrementarParada(){
    const paradaDisplay = document.getElementById('paradaDisplay');
    paradaDisplay.textContent = Number(paradaDisplay.textContent) + 1;
}
function guardarEvaluacion(evaluacion){
    arrayPlantasEvaluadas.push(evaluacion);
    console.log(arrayPlantasEvaluadas);
}
formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    const evaluacion = capturarDatosFormulario(); 
    guardarEvaluacion(evaluacion); 
    incrementarParada();
});