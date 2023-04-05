programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		inteiro altura, base
		cadeia opcaoEscolha, opcaoCalculo
		escreva("Selecione o que deseja calcular:\n1 - Quadrado\n2 - Triângulo\n\nR: ")
		leia(opcaoEscolha)

		se(opcaoEscolha == "1"){
			escreva("O que deseja calcular do quadrado?\n1 - Área\n2 - Perímetro\n\nR: ")
			leia(opcaoCalculo)
			escreva("Digite o lado do quadrado: ")
			leia(altura)
		
			se(opcaoCalculo == "1"){
				escreva("A área do quadrado é: " + calcularAreaQuadrado(altura))
			} senao {
				escreva("O perímetro do quadrado é: " + calcularPerimetroQuadrado(altura))
			}
		} senao {
			escreva("O que deseja calcular do triângulo?\n1 - Área\n2 - Perímetro\n\nR: ")
			leia(opcaoCalculo)
			
			escreva("Digite a base do triângulo: ")
			leia(base)
			escreva("Digite a altura do triângulo: ")
				leia(altura)
			se(opcaoCalculo == "1"){
				escreva("A área do triângulo é: " + calcularAreaTriangulo(base, altura))
			} senao {
				escreva("O perímetro do triângulo é: " + calcularPerimetroTriangulo(base))
			}
		}
	}

	funcao inteiro calcularAreaQuadrado(inteiro lado){
		inteiro potencia
		retorne mat.potencia(lado, 2)
	}
	
	funcao inteiro calcularPerimetroQuadrado(inteiro lado){
		retorne lado*4
	}

	funcao inteiro calcularAreaTriangulo(inteiro base, inteiro altura){
		retorne (base * altura)/2
	}

	funcao inteiro calcularPerimetroTriangulo(inteiro base){
		retorne base * 3
	}
}
