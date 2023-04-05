const express = require("express") //Pega o Framework Express

const server = express(); //Define uma constante para ser utilizada como o Express

server.use(express.json()) //Usa o express.json - para enviar algo, através do JSON
//query params: ?nome=Pedro
//roite params = curso/1
//qquest Body = {nome: 'NodeJs', tipo: 'JavaScript' }

const cursos = ['NodeJs', 'PHP', 'Java']

//Listagem de todos os cursos - GET do CRUD
server.get('/cursos', (req, res) => {
    return res.json(cursos);
})

//Listagem de um curso - GET do CRUD
server.get('/cursos/:index', (req, res) => {
    const {index} = req.params; //query = dentro do objeto, params = referenciar algo
    return res.json(cursos[index]); //Retornando um JSON
    //console.log("Acessou a rota!")
})

//Criar um curso - POST do CRUD
server.post('/cursos', (req, res) => {
    const {name} = req.body; //body = corpo da requisição, tratada para JSON e enviada
    cursos.push(name);
    return res.json(cursos)
})

server.delete('/cursos/:index', (req, res) => {
    const {index} = req.params;
    cursos.split(cursos[index]);
    return res.json(cursos)
})

server.listen(3000); //Ouve a porta do servidor