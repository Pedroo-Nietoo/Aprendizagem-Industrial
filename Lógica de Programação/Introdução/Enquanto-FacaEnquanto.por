programa
{
	
inclua biblioteca Matematica --> mat

	funcao inicio()
	{
		cadeia opcaoPoligono, opcaoCalculo
		real base, altura

		escreva("Olá! Selecione qual polígono deseja calcular:\n| Quadrado | Triângulo |\nR: ")
		leia(opcaoPoligono)
		
		enquanto (opcaoPoligono != "Quadrado" e opcaoPoligono != "quadrado" e opcaoPoligono != "Triângulo" e opcaoPoligono != "triângulo") {
		    limpa()
		    escreva("Favor selecionar qual polígono deseja calcular:\nR: ")
		    leia(opcaoPoligono)
		} 
		
		se(opcaoPoligono == "Quadrado" ou opcaoPoligono == "quadrado"){
		    faca{
			escreva("O que deseja calcular do quadrado?\n| Área | Perímetro |\nR: ")
		    	leia(opcaoCalculo)
		    } enquanto(opcaoCalculo != "Área" e opcaoCalculo != "área" e opcaoCalculo != "Perímetro" e opcaoCalculo != "perímetro")

		    se(opcaoCalculo == "Área" ou opcaoCalculo == "área"){
		    		escreva("Insira o valor da base: ")
				leia(base)
				escreva("A área do quadrado é de: ", calcularAreaQuadrado(base))
			} senao se(opcaoCalculo == "Perímetro" ou opcaoCalculo == "perímetro") {
				escreva("Insira o valor da base: ")
				leia(base)
				escreva("O perímetro do quadrado é de: ", calcularPerimetroQuadrado(base))
			} senao {
				escreva("Favor inserir uma opção correta")
				leia(opcaoCalculo)
			}
		
		} senao {
			faca{
			escreva("O que deseja calcular do triângulo?\n| Área | Perímetro |\nR: ")
		    	leia(opcaoCalculo)
		    } enquanto(opcaoCalculo != "Área" e opcaoCalculo != "área" e opcaoCalculo != "Perímetro" e opcaoCalculo != "perímetro")
		
			se(opcaoCalculo == "Área" ou opcaoCalculo == "área"){
				escreva("Insira o valor da base: ")
				leia(base)
				escreva("Insira o valor da altura: ")
				leia(altura)
				escreva("A área do triângulo é de: ", calcularAreaTriangulo(base, altura))
			} senao se(opcaoCalculo == "Perímetro" ou opcaoCalculo == "perímetro") {
				escreva("Insira o valor da base: ")
				leia(base)
				escreva("O perímetro do triângulo é de: ", calcularPerimetroTriangulo(base))
			} senao {
				escreva("Favor inserir uma opção correta")
			}	
		}

	}

	funcao real calcularAreaQuadrado(real base){
		retorne mat.potencia(base, 2)
	}
	funcao real calcularPerimetroQuadrado(real base){
		retorne base*4
	}
	funcao real calcularAreaTriangulo(real base, real altura){
		retorne (base*altura)/2
	}
	funcao real calcularPerimetroTriangulo(real base){
		retorne base*3
	}
}
