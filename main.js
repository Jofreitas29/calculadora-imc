document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateIMC();
    });

    function calculateIMC() {
        var peso = parseFloat(document.getElementById('peso').value);
        var altura = parseFloat(document.getElementById('altura').value);

        if (isNaN(peso) || isNaN(altura)) {
        showError("Preencha corretamente os campos de peso e altura.");
        return;
        }

        var imc = peso / (altura * altura);
        var categoria = '';

        if (imc < 18.5) {
        categoria = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
        categoria = 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
        categoria = 'Sobrepeso';
        } else {
        categoria = 'Obesidade';
        }

        showResult(imc.toFixed(2), categoria);
    }

    function showError(message) {
        document.getElementById('result').innerHTML = '<div class="alert alert-danger">' + message + '</div>';
    }

    function showResult(imc, categoria) {
        document.getElementById('result').innerHTML = '<div class="alert alert-success">Seu IMC é ' + imc + ' (' + categoria + ').</div>';
}
    
    
    
    
    