// ==========================================
// ESTADO LÓGICO DE LA APLICACIÓN (EN MEMORIA)
// ==========================================
const baseDatosMonitoreo = []; // Nuestro repositorio temporal [cite: 57]
let numeroParadaActual = 1;     // Variable de control secuencial del negocio [cite: 40]

// ==========================================
// REFERENCIAS ESTRUCTURALES DEL DOM
// ==========================================
const formMonitoreo = document.getElementById('formMonitoreo');
const badgeParada = document.getElementById('paradaDisplay');

// ==========================================
// CONTROLADOR TRANSACCIONAL (MANEJADOR DE EVENTOS)
// ==========================================
formMonitoreo.addEventListener('submit', function(event) {
    // 1. Bloquear recarga nativa para proteger el estado en memoria
    event.preventDefault();

    // 2. CAPTURA DE METADATOS Y CONTROL DE FLUJO (Fail-Fast)
    const turnoValor = document.getElementById('turno').value.trim();
    const estadoFenologicoValor = document.getElementById('estadoFenologico').value;

    // Validación de Negocio de primera línea
    if (!turnoValor) {
        alert("Error de Negocio: El campo 'Turno' es obligatorio para la auditoría de campo.");
        return;
    }

    // 3. COMPILACIÓN DE DATOS (Modelado de Sub-Objetos de Dominio)
    const registroTransaccional = {
        metadata: {
            turno: turnoValor,
            parada: numeroParadaActual, // Guardamos el valor real del estado lógico
            estadoFenologico: estadoFenologicoValor,
            timestamp: new Date().toISOString()
        },
        fenologiaEstructural: {
            brotes: parseInt(document.getElementById('brotes').value) || 0,
            terminales: parseInt(document.getElementById('terminales').value) || 0,
            ramasNuevas: parseInt(document.getElementById('ramas-nuevas').value) || 0,
            flores: parseInt(document.getElementById('flores').value) || 0,
            frutos: parseInt(document.getElementById('frutos').value) || 0
        },
        presionPlaga: {
            posturasPlanta: parseFloat(document.getElementById('posturas').value) || 0,
            larvasPlanta: parseFloat(document.getElementById('larvas').value) || 0,
            brotesDanados: parseInt(document.getElementById('brotes-danados').value) || 0,
            terminalesDanados: parseInt(document.getElementById('terminales-danados').value) || 0,
            ramasNuevasDanadas: parseInt(document.getElementById('ramas-nuevas-danados').value) || 0,
            racimoFloralPosturas: parseInt(document.getElementById('racimo-floral-posturas').value) || 0,
            racimoFloralLarvas: parseInt(document.getElementById('racimo-floral-larvas').value) || 0,
            frutosPosturas: parseInt(document.getElementById('frutos-posturas').value) || 0,
            frutosLarvas: parseInt(document.getElementById('frutos-larvas').value) || 0
        }
    };

    // 4. PERSISTENCIA EN EL ARRAY DE SESIÓN
    baseDatosMonitoreo.push(registroTransaccional);
    
    // Evidencia de ejecución para control de calidad técnica
    console.log(`Transacción Exitosa - Parada Nº ${numeroParadaActual} registrada.`, baseDatosMonitoreo);

    // 5. AUTOMATIZACIÓN DE PROCESO OPERATIVO ($n + 1$)
    numeroParadaActual = numeroParadaActual + 1; // Incrementamos el estado lógico interno
    
    // 6. SINCRONIZACIÓN DE LA INTERFAZ DE USUARIO (UI)
    formMonitoreo.reset(); // Limpia los inputs masivos a su estado inicial (0) [cite: 204]
    
    // Restaurar metadatos para optimizar el trabajo del usuario en campo
    document.getElementById('turno').value = turnoValor;
    document.getElementById('estadoFenologico').value = estadoFenologicoValor;
    
    // Actualizar el indicador visual de la pantalla con el nuevo número calculado
    badgeParada.innerText = numeroParadaActual;
});