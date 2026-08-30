const database = require("../data/clientes.data");

function cadastrar(req, res) {

    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({
            mensagem: "Nome, email e telefone são obrigatórios."
        });
    }

    const cliente = {
        id: database.gerarId(),
        nome,
        email,
        telefone
    };

    database.clientes.push(cliente);

    return res.status(201).json(cliente);
}


function consultarTodos(req, res) {

    return res.status(200).json(database.clientes);
}


function consultarPorId(req, res) {

    const id = parseInt(req.params.id);

    const cliente = database.clientes.find(
        cliente => cliente.id === id
    );

    if (!cliente) {
        return res.status(404).json({
            mensagem: "Cliente não encontrado."
        });
    }

    return res.status(200).json(cliente);
}


function atualizar(req, res) {

    const id = parseInt(req.params.id);

    const cliente = database.clientes.find(
        cliente => cliente.id === id
    );

    if (!cliente) {
        return res.status(404).json({
            mensagem: "Cliente não encontrado."
        });
    }

    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({
            mensagem: "Nome, email e telefone são obrigatórios."
        });
    }

    cliente.nome = nome;
    cliente.email = email;
    cliente.telefone = telefone;

    return res.status(200).json(cliente);
}


function excluir(req, res) {

    const id = parseInt(req.params.id);

    const indice = database.clientes.findIndex(
        cliente => cliente.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Cliente não encontrado."
        });
    }

    database.clientes.splice(indice, 1);

    return res.status(204).send();
}


module.exports = {
    cadastrar,
    consultarTodos,
    consultarPorId,
    atualizar,
    excluir
};