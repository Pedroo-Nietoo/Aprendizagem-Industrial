alert("Calculadora de horas\nVamos começar")

var horaInicial = prompt("Digite a hora inicial");
var minutoInicial = prompt("Digite o minuto inicial");
var horaFinal = prompt("Digite a hora final");
var minutoFinal = prompt("Digite o minuto final");
var resultadoHora;
var resultadoMinuto;

while (horaInicial == "") {
    horaInicial = prompt("Favor preencher os campos\nDigite a hora inicial");
}

while (horaFinal == "") {
    horaFinal = prompt("Favor preencher os campos\nDigite a hora final");
}

while (minutoInicial == "") {
    minutoInicial = prompt("Favor preencher os campos\nDigite o minuto inicial");
}

while (minutoFinal == "") {
    minutoFinal = prompt("Favor preencher os campos\nDigite o minuto final");
}

var opcao = prompt(`As horas digitadas são:\nHora e minutos iniciais: ${horaInicial}:${minutoInicial}\nHora e minutos finais: ${horaFinal}:${minutoFinal}\n\nVocê deseja somar ou subtrair as horas?`)

while (opcao == "") {
    opcao = prompt(`As horas digitadas são:\nHora e minutos iniciais: ${horaInicial}:${minutoInicial}\nHora e minutos finais: ${horaFinal}:${minutoFinal}\n\nVocê deseja somar ou subtrair as horas?`)
}

switch (opcao) {
    case "Soma":
    case "soma":
    case "Somar":
    case "somar":
    case "Add":
    case "add":
        somarHoras();
        break;
    case "Subtração":
    case "Subtracao":
    case "Subtrair":
    case "subtrair":
    case "Sub":
    case "sub":
        subtrairHoras();
        break;
    default:
        alert("Favor selecionar uma opção correta");
        opcao = prompt(`As horas digitadas são:\nHora e minutos iniciais: ${horaInicial}:${minutoInicial}\nHora e minutos finais: ${horaFinal}:${minutoFinal}\n\nVocê deseja somar ou subtrair as horas?`)
}

function somarHoras() {
    resultadoHora = parseInt(horaFinal) + parseInt(horaInicial);
    resultadoMinuto = parseInt(minutoFinal) + parseInt(minutoInicial);

    while (resultadoMinuto > 59) {
        resultadoMinuto -= 60;
        resultadoHora++;
    }

    alert(`O resultado da soma de ${horaInicial}:${minutoInicial} mais ${horaFinal}:${minutoFinal} é:\n${resultadoHora}:${resultadoMinuto}`);
}

function subtrairHoras() {
    var horaInicialNum = parseInt(horaInicial);
    var horaFinalNum = parseInt(horaFinal);
    var minutoInicialNum = parseInt(minutoInicial);
    var minutoFinalNum = parseInt(minutoFinal);

    if (horaInicialNum > horaFinalNum || (horaInicialNum == horaFinalNum && minutoInicialNum > minutoFinalNum)) {
        resultadoHora = horaInicialNum - horaFinalNum;
        resultadoMinuto = minutoInicialNum - minutoFinalNum;
    } else {
        resultadoHora = horaFinalNum - horaInicialNum;
        resultadoMinuto = minutoFinalNum - minutoInicialNum;
    }

    while (resultadoMinuto < 0) {
        resultadoMinuto += 60;
        resultadoHora--;
    }

    alert(`O resultado da subtração de ${horaInicial}:${minutoInicial} e ${horaFinal}:${minutoFinal} é\n${resultadoHora}:${resultadoMinuto}`);
}