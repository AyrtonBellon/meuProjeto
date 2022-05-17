function latir (retorno de chamada) {
  ligar de volta();
}

function latirEmGrego() {
  console.log('Au em grego');
}

function latirEmInglês() {
  console.log('Au au Sir. (em inglês)');
}

latir(latirEmGrego);
latir(latirEmInglês);

//utilizando a função seta
latir(() => console.log('Au em função de seta'));

console.log('=================')

função imprime (valor) {
  console.log('O resultado é: ' + valor);
}

function imprimeSomenteValores (valor) {
  console.log(valor);
}

função soma (n1, n2, retorno de chamada) {
  retorno(n1 + n2);
}

soma(2, 2, imprime);
soma(2, 2, imprimeSomenteValores);


console.log('=============');

function calcular (a, b, operacao) {
  console.log(operacao(a,b));
}

função multiplicador (n1, n2) {
  retornar n1 * n2
}

função dividir (n1, n2) {
  retornar n1 / n2
}
// função param1, param2, callback  
calcular(2, 4, multiplicar);
calcular(4, 2, dividir);
calcular(2, 4, (a, b) => a + b);