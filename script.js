function calcular(){

  let valorA = parseFloat(document.querySelector('#valorA').value);
  let valorB = parseFloat(document.querySelector('#valorB').value);
  let valorC = parseFloat(document.querySelector('#valorC').value);


  let delta = ((valorB * valorB) - (4 * valorA * valorC));
  console.log("delta: " + delta);


  if (delta < 0) {
    console.log("Delta negativo, não existem raízes reais.");
    return;
  }


  let resultadoUm = ((-valorB + Math.sqrt(delta)) / (2 * valorA));
  let resultadoDois = ((-valorB - Math.sqrt(delta)) / (2 * valorA));

if(delta > 0){
  let resultado = document.createElement("h2")
  resultado.textContent = `A raiz¹ é ${resultadoUm} e a raiz² é ${resultadoDois}`
  document.body.appendChild(resultado);
  let divMain = document.querySelector('#main')
  divMain.appendChild(resultado);
  divMain.style.color = "white"
}

}
