const uuidv4 = require('uuid/v4');

module.exports = () => {
    const funcionariosDB = require('../data/funcionarios.json');
    const controller = {};

    const {
        funcionarios: funcionariosMock,
    } = funcionariosDB;

    controller.listFuncionarios = (req, res) => res.status(200).json(funcionariosDB);

    controller.saveFuncionarios = (req, res) => {
        funcionariosMock.data.push({
            id: uuidv4(),
            empresa: "Empresa X",
            nome: req.nome,
            sobrenome: req.sobrenome,
            cpf: req.cpf,
            email: req.email,
        });

        res.status(201).json(funcionariosMock);
    }

    return controller;
}