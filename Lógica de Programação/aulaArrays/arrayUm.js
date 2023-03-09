let itemRepete = prompt("Qual item deseja pôr na Array?");
let quantidadeRepete = prompt("Deseja que se repita quantas vezes?");

var array = [];

repetir(itemRepete, quantidadeRepete);


function repetir(itemRepete, quantidadeRepete){
    for (let i = 0; i < quantidadeRepete; i++) {
        array.push((itemRepete))
    }
    console.log(array)
}
