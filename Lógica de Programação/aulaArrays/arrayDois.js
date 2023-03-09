let array = [];
simboloMais(3);

function simboloMais(quantidadeDeSimbolos){
    for(let i = 0; i < quantidadeDeSimbolos; i++){
        array.push('+');
    }
    console.log(array)
}