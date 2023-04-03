let nome, cep, logradouro, bairro, cidade, estado, pais;

cep = document.getElementById("cep");
cep.addEventListener("keypress", (e) => {
    if (e.key === "Enter") document.getElementById("btao2").click();
});

function obterDados() {
    nome = document.getElementById("nome");
    cep = document.getElementById("cep");
    logradouro = document.getElementById("logradouro");
    bairro = document.getElementById("bairro");
    cidade = document.getElementById("cidade");
    estado = document.getElementById("estado");
    pais = document.getElementById("pais");
    if (cep.value.length == 8) {
        return true;
    }
    return false;
}

function buscarEndereco() {
    if (obterDados()) {
        var cepValido = cep.value.substr(0, 5) + "-" + cep.value.substr(5);
        var url = `https://my-json-server.typicode.com/pedroo-nietoo/aprendizagem-industrial/cep/?code=${cepValido}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                logradouro.value = data[0].address;
                bairro.value = data[0].district;
                cidade.value = data[0].city;
                estado.value = data[0].state;
                pais.value = "Brasil";
            })
    } else {
        alert("CEP inválido");
    }
}

function cadastrar() {
    obterDados();
    var pessoa = {
        nome: nome.value,
        cep: cep.value,
        logradouro: logradouro.value,
        cidade: cidade.value,
        estado: estado.value,
        pais: pais.value
    }
    var lista = JSON.parse(localStorage.getItem("Pessoas"))
    if (lista == null) {
        lista = []
    }
    lista.push(pessoa)
    localStorage.setItem("Pessoas", JSON.stringify(lista))
    alert(`Usuário ${pessoa.nome} cadastrado`)
}

function limpar() {
    // localStorage.clear();
    cep.value = null;
    logradouro.value = null;
    bairro.value = null;
    cidade.value = null;
    estado.value = null;
    pais.value = null;
}