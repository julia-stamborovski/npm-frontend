let plugin = require('./plugin');
// requerimento de um módulo com "moment"
let moment = require('moment'); // quando colocamos assim direto sem o caminho
// + igual no de "./plugin o node já entende que é um pacote."

console.log(plugin.imc(70, 1.60));
console.log(plugin.quadrado(5, 5));

console.log(moment().format());