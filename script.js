document.getElementById('inverter').addEventListener('click', function() {
  
    let entrada = document.getElementById('entrada').value;


    let palavras = entrada.split(' ');

   
    let palavrasInvertidas = palavras.reverse();

    let saida = palavrasInvertidas.join(' ');

    document.getElementById('saida').value = saida;
});