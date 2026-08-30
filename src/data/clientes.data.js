let clientes = [
    {
        id: 1,
        nome: "João da Silva",
        email: "joao@email.com",
        telefone: "21999990001"
    },
    {
        id: 2,
        nome: "Maria da Silva",
        email: "maria@email.com",
        telefone: "21999990002"
    }
];

let proximoId = 3;

function gerarId() {
    return proximoId++;
}

module.exports = {
    clientes,
    gerarId
};