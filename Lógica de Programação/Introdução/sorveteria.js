let opcao;
var quantidadeDeBolas;
let sabores;
var precoPorBola = 5.5;
var precoPorPote = 12;
var precoTotal;
let formaPagamento;
let estoqueSorvete = 1000;
let opcaoCartao;
let quantidadeDePotes;

do {
    opcao = prompt("Seja bem-vindo(a)! Selecione o que deseja fazer na sorveteria:\nBuffet\nComprar sorvete\nSair")

    if (opcao == "Buffet" || opcao == "buffet") {

        quantidadeDeBolas = prompt("Quantas bolas de sorvete você deseja pôr? (Máximo de 5)")
        while (quantidadeDeBolas > 5 || quantidadeDeBolas <= 0) {
            quantidadeDeBolas = prompt("Favor respeitar a quantidade de bolas de sorvete.\nQuantas deseja pôr? (Máximo de 5)")
        }

        precoTotal = precoPorBola * quantidadeDeBolas
        estoqueSorvete = estoqueSorvete - quantidadeDeBolas

        sabores = []
        for (quantidadeDeBolas; quantidadeDeBolas > 0; quantidadeDeBolas--) {
            sabor = prompt(`Selecione o sabor que deseja: (Restam ${quantidadeDeBolas})`)
            sabores.push(sabor)
        }

        pedirFormaPagamento();


    } else if (opcao == "Comprar sorvete" || opcao == "comprar sorvete") {
        quantidadeDePotes = prompt("Quantos potes de sorvete deseja comprar? (Máximo de 6)")
        while (quantidadeDePotes > 6 || quantidadeDePotes <= 0) {
            quantidadeDePotes = prompt("Favor respeitar a quantidade de compra de potes.\nQuantos deseja comprar? (Máximo de 6)")
        }

        precoTotal = precoPorPote * quantidadeDePotes
        estoqueSorvete = estoqueSorvete - quantidadeDePotes

        sabores = []
        for (quantidadeDePotes; quantidadeDePotes > 0; quantidadeDePotes--) {
            sabor = prompt(`Selecione o sabor que deseja: (Restam ${quantidadeDePotes})`)
            sabores.push(sabor)
        }

        pedirFormaPagamento();
    }
} while (opcao != "Sair" && opcao != "sair")



function pedirFormaPagamento() {
    formaPagamento = prompt(`Seus sabores são: ` + sabores.join(", ") +
        `\n\nO valor total foi de R$${precoTotal}\nQual é a forma de pagamento?\nDinheiro\nCartão\nPix`)

    switch (formaPagamento) {
        case "Dinheiro":
            dinheiroCliente = prompt("Quantos reais você tem?")
            if (dinheiroCliente >= precoTotal) {
                alert(`Você pagou a conta, ficando com R$${dinheiroCliente - precoTotal} de troco. O estoque agora é de ${estoqueSorvete} sorvetes.\nAgradecemos pela escolha e volte sempre!`)
            } else {
                alert("Você não possui dinheiro suficiente...sinto muito ;(")
            }
            break;

        case "dinheiro":
            dinheiroCliente = prompt("Quantos reais você tem?")
            if (dinheiroCliente >= precoTotal) {
                alert(`Você pagou a conta, ficando com R$${dinheiroCliente - precoTotal} de troco. O estoque agora é de ${estoqueSorvete} sorvetes.\nAgradecemos pela escolha e volte sempre!`)
            } else {
                alert("Você não possui dinheiro suficiente...sinto muito ;(")
            }
            break;

        case "Cartão":
            dinheiroCliente = prompt("Quantos reais você tem?")

            if (dinheiroCliente >= precoTotal) {
                do {
                    opcaoCartao = prompt("Débito ou crédito?")
                } while (opcaoCartao != "Débito" && opcaoCartao != "débito" && opcaoCartao != "Debito" && opcaoCartao != "debito" && opcaoCartao != "Crédito" && opcaoCartao != "crédito" && opcaoCartao != "Credito" && opcaoCartao != "credito")
                if (opcaoCartao == "Débito" && opcaoCartao == "débito" && opcaoCartao == "Debito" && opcaoCartao == "debito") {
                    alert(`Você pagou a conta, ficando com R$${dinheiroCliente - precoTotal} de troco. O estoque agora é de ${estoqueSorvete} sorvetes.\nAgradecemos pela escolha e volte sempre!`)
                } else {
                    alert(`Você pagou a conta!\nAgradecemos pela escolha e volte sempre!`)

                }
            } else {
                alert("Você não possui dinheiro suficiente...sinto muito ;(")
            }
            break;

        case "Cartao":
            dinheiroCliente = prompt("Quantos reais você tem?")

            if (dinheiroCliente >= precoTotal) {
                do {
                    opcaoCartao = prompt("Débito ou crédito?")
                } while (opcaoCartao != "Débito" && opcaoCartao != "débito" && opcaoCartao != "Debito" && opcaoCartao != "debito" && opcaoCartao != "Crédito" && opcaoCartao != "crédito" && opcaoCartao != "Credito" && opcaoCartao != "credito")
                if (opcaoCartao == "Débito" && opcaoCartao == "débito" && opcaoCartao == "Debito" && opcaoCartao == "debito") {
                    alert(`Você pagou a conta, ficando com R$${dinheiroCliente - precoTotal} de troco. O estoque agora é de ${estoqueSorvete} sorvetes.\nAgradecemos pela escolha e volte sempre!`)
                } else {
                    alert(`Você pagou a conta!\nAgradecemos pela escolha e volte sempre!`)

                }
            } else {
                alert("Você não possui dinheiro suficiente...sinto muito ;(")
            }
            break;

        case "cartão":
            dinheiroCliente = prompt("Quantos reais você tem?")

            if (dinheiroCliente >= precoTotal) {
                do {
                    opcaoCartao = prompt("Débito ou crédito?")
                } while (opcaoCartao != "Débito" && opcaoCartao != "débito" && opcaoCartao != "Debito" && opcaoCartao != "debito" && opcaoCartao != "Crédito" && opcaoCartao != "crédito" && opcaoCartao != "Credito" && opcaoCartao != "credito")
                if (opcaoCartao == "Débito" && opcaoCartao == "débito" && opcaoCartao == "Debito" && opcaoCartao == "debito") {
                    alert(`Você pagou a conta, ficando com R$${dinheiroCliente - precoTotal} de troco. O estoque agora é de ${estoqueSorvete} sorvetes.\nAgradecemos pela escolha e volte sempre!`)
                } else {
                    alert(`Você pagou a conta!\nAgradecemos pela escolha e volte sempre!`)

                }
            } else {
                alert("Você não possui dinheiro suficiente...sinto muito ;(")
            }
            break;

        case "cartao":
            dinheiroCliente = prompt("Quantos reais você tem?")

            if (dinheiroCliente >= precoTotal) {
                do {
                    opcaoCartao = prompt("Débito ou crédito?")
                } while (opcaoCartao != "Débito" && opcaoCartao != "débito" && opcaoCartao != "Debito" && opcaoCartao != "debito" && opcaoCartao != "Crédito" && opcaoCartao != "crédito" && opcaoCartao != "Credito" && opcaoCartao != "credito")
                if (opcaoCartao == "Débito" && opcaoCartao == "débito" && opcaoCartao == "Debito" && opcaoCartao == "debito") {
                    alert(`Você pagou a conta, ficando com R$${dinheiroCliente - precoTotal} de troco. O estoque agora é de ${estoqueSorvete} sorvetes.\nAgradecemos pela escolha e volte sempre!`)
                } else {
                    alert(`Você pagou a conta!\nAgradecemos pela escolha e volte sempre!`)

                }
            } else {
                alert("Você não possui dinheiro suficiente...sinto muito ;(")
            }
            break;

        case "Pix":
            dinheiroCliente = prompt("Quantos reais você tem?")
            if (dinheiroCliente >= precoTotal) {
                alert(`Você pagou a conta!. O estoque agora é de ${estoqueSorvete} sorvetes.\nAgradecemos pela escolha e volte sempre!`)
            } else {
                alert("Você não possui dinheiro suficiente...sinto muito ;(")
            }
            break;

        case "pix":
            dinheiroCliente = prompt("Quantos reais você tem?")
            if (dinheiroCliente >= precoTotal) {
                alert(`Você pagou a conta!. O estoque agora é de ${estoqueSorvete} sorvetes.\nAgradecemos pela escolha e volte sempre!`)
            } else {
                alert("Você não possui dinheiro suficiente...sinto muito ;(")
            }
            break;
        default: alert("Favor selecione uma opção correta")
    }
}
