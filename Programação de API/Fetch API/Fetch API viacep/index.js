let cep, logradouro, bairro, cidade, estado, pais;

cep = document.getElementById("cep");
cep.addEventListener("keypress", (e) => {
    if (e.key === "Enter") document.getElementById("btao").click();
});

function obterDados() {
    cep = document.getElementById("cep");
    logradouro = document.getElementById("logradouro");
    bairro = document.getElementById("bairro");
    cidade = document.getElementById("cidade");
    estado = document.getElementById("estado");
    pais = document.getElementById("pais");
    if (cep.value.length == 8) {
        return true
    }
    return false;
}

function buscarEndereco() {
    if (obterDados()) {
        var cepValido = cep.value.substr(0, 5) + "-" + cep.value.substr(5);
        var url = `http://viacep.com.br/ws/${cepValido}/json`;
        //var url = `https://cdn.apicep.com/file/apicep/${cepValido}.json`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                logradouro.value = data.logradouro; //data.
                bairro.value = data.bairro;
                cidade.value = data.localidade;
                estado.value = data.uf;
                pais.value = "Brasil";
            })
    } else {
        alert("CEP inválido");
    }
}

function limpar() {
    cep.value = null;
    logradouro.value = null;
    bairro.value = null;
    cidade.value = null;
    estado.value = null;
    pais.value = null;
}