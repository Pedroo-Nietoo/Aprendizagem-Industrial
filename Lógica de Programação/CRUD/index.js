const express = require('express'); //Pega o Framework Express

const server = express();

const cursos = ['HTML', 'CSS', 'JavaScript'];

server.use(express.json());

function checarCurso(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: "Nome do curso obrigatório" }); //Middleware - mediador entre requisição e resposta do front
    } return next();
}

function checarIndexCurso(req, res, next) {
    if (!cursos[req.params.index]) {
        return res.status(400).json({ error: "Index do curso obrigatório" });
    } return next();
}
//query params: ?nome=Pedro
// roite params: curso/1
//qquest body: {"nome": 'NodeJS', "tipo": "JS"}

server.get('/cursos', (req, res) => {
    return res.json(cursos)
})

//res.query = dentro do objeto
//res.params = referenciar algo
//res.body = corpo da requisição, tratada para JSON e enviada
server.get('/cursos/:index', (req, res) => {
    //const index = req.params.index
    const { index } = req.params
    return res.json(cursos[index])
})

server.post('/cursos', checarCurso, (req, res) => {
    const { name } = req.body
    cursos.push(name)
    return res.json(cursos)
})

server.put('/cursos/:index', checarIndexCurso, (req, res) => {
    const { index } = req.params
    const { name } = req.body
    cursos[index] = name
    return res.json(cursos)
})

server.delete('/cursos/:index', checarIndexCurso, (req, res) => {
    const { index } = req.params
    cursos.splice(index, 1)
    return res.json(cursos)
})

server.listen(3000)
