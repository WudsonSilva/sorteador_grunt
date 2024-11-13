document.addEventListener('DOMContentLoaded', function(){
    document.ElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById9('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').computedStyleMap.display='block';
    })
})