let pedro = {
    nome: "Pedro Nieto",
    idade: 17,
    trabalhando: true
}

//Função com Object.assign
function copiarObjectAssign(nomeDoObjeto, propriedadeDoObjeto) {
    const copia = Object.assign({}, nomeDoObjeto);
    delete copia[propriedadeDoObjeto];
    return copia;
}
console.log(copiarObjectAssign(pedro, 'nome'))


//Função com Spread
function copiarLista(nomeDoObjeto, propriedadeDoObjeto) {
    const copia = { ...nomeDoObjeto }
    delete copia[propriedadeDoObjeto]
    return copia
}
console.log(copiarLista(pedro, 'idade'))