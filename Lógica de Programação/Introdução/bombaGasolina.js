//Declaração das variáveis
const dinheiro = 5;
let dinheiroCliente;
let bomba = 500;
var litrosEmReal = 0;

//Solicita o dinheiro do(a) usuário(a) enquanto o valor não for informado
do {
  dinheiroCliente = prompt("Quantos reais você tem?");
} while (dinheiroCliente === "" || dinheiroCliente === null || dinheiroCliente > 0);

/*Pede quantos litros o(a) usuário(a) deseja adicionar. Enquanto o valor não for informado
e os litros que deseja adicionar forem menores ou iguais a zero, o código continuará solicitando*/
let litrosParaAdd = prompt("Quantos litros você deseja adicionar?");
while (litrosParaAdd === "" || litrosParaAdd === null || litrosParaAdd <= 0) {
  litrosParaAdd = prompt("Opção inválida! Favor inserir quantos litros deseja adicionar");
}

/*Para 'i' sendo 0, enquanto 'i' for menor que os litros para adicionar, soma-se 1 ao valor de 'i'
e se os litros para adicionar forem menores que o limite da bomba, printe no console 'Enchendo..' até que
*/
for (let i = 0; i < litrosParaAdd; i++) {
  if (litrosParaAdd < bomba) {
    console.log("Enchendo....");
    litrosEmReal += dinheiro;
    bomba -= 1 //remove os litros abastecidos da bomba 
  }
}

/*Após encher o tanque, printa no console:
"Completo! R$(valor dos litros para real)"
"Bomba agora em (quantidade de L na bomba)"*/
console.log(`Completo! R$`+litrosEmReal+`\nBomba agora em ${bomba}L`)

/*Se o dinheiro do(a) usuário(a) for maior que o valor total da gasolina, o usuário paga o frentista
e vai embora, caso contrário, fica no posto varrendo o chão*/
if (dinheiroCliente >= litrosEmReal) {
  alert(`O valor da gasolina foi de R$${litrosEmReal}. Você pagou com seus ${dinheiroCliente} reais, ficando com R$${dinheiroCliente - litrosEmReal} de troco\nA bomba agora possui ${bomba}L`);
} else {
  alert(`O valor da gasolina foi de R$${litrosEmReal}. Você possui apenas R$${dinheiroCliente} reais e não pode pagar a gasolina...\nVai ter que varrer o estabelecimento 🧹`);
}
