document.addEventListener('DOMContentLoaded', function() {
  const calcularBtn = document.querySelector('#calcularBtn');
  calcularBtn.addEventListener('click', calcular);
});

function calcular() {
  let valorA = parseFloat(document.querySelector('#valorA').value);
  let valorB = parseFloat(document.querySelector('#valorB').value);
  let valorC = parseFloat(document.querySelector('#valorC').value);

  if (isNaN(valorA) || isNaN(valorB) || isNaN(valorC)) {
      alert('Por favor, insira valores válidos nos três campos.');
      return;
  }

  if (valorA === 0) {
      alert('O valor de A deve ser diferente de zero.');
      return;
  }


  let delta = (valorB * valorB) - (4 * valorA * valorC);
  console.log("delta: " + delta);

  let resultadoAnterior = document.querySelector('#resultado');
  if (resultadoAnterior) {
      resultadoAnterior.remove(); 
  }

  // Criar um novo elemento de resultado
  let resultado = document.createElement("h2");
  resultado.id = "resultado"; 

  if (delta < 0) {
      resultado.textContent = "Delta negativo, não existem raízes reais.";
      resultado.style.color = "red"; 
      console.log("Delta negativo, não existem raízes reais.");
  } else {
      let resultadoUm = ((-valorB + Math.sqrt(delta)) / (2 * valorA));
      let resultadoDois = ((-valorB - Math.sqrt(delta)) / (2 * valorA));
      if (delta === 0) {
          resultado.textContent = `A raiz é ${resultadoUm}`;
      } else { 
          resultado.textContent = `A raiz¹ é ${resultadoUm} e a raiz² é ${resultadoDois}`;
      }
      resultado.style.color = "white";
  }


  document.querySelector('#main').appendChild(resultado);
}
