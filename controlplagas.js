 function calcular() {
            var evaluadas = parseFloat(document.getElementById('evaluadas').value);
            var roya = parseFloat(document.getElementById('roya').value);
            if (isNaN(evaluadas) || evaluadas <= 0) 
            {
                alert('Por favor, ingresa un número válido de plantas evaluadas.');
                return;
            }
            if (isNaN(roya) || roya <= 0)
            {
                alert('Por favor, ingresa un número válido de plantas con roya.');
                return;
            }
            if (roya > evaluadas)
            {
                alert('El número de plantas con roya no puede ser mayor que el número de plantas evaluadas.');
                return;
            }
            
            var resultado = (roya/evaluadas)*100; // Puedes cambiar la operación aquí
            document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2) + '%';
        }