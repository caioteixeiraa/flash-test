const uuidv4 = require('uuid/v4');

module.exports = () => {
    const funcionariosDB = require('../data/funcionarios.json');
    const controller = {};

    const {
        funcionarios: funcionariosMock,
    } = funcionariosDB;

    controller.listFuncionarios = (req, res) =>  {
        if (req.query.empresa) {
            const funcionariosOfEmpresa = {"funcionarios": []};
            funcionariosDB.funcionarios.forEach(element => {
                if (element.empresa == req.query.empresa) {
                    funcionariosOfEmpresa.funcionarios.push({
                        empresa: element.empresa,
                        nome: element.nome,
                        sobrenome: element.sobrenome,
                        cpf: element.cpf,
                        email: element.email,
                    });
                }
            })

        res.status(200).json(funcionariosOfEmpresa);

        return;
        }

        res.status(200).json(funcionariosDB);
    }

    controller.saveFuncionarios = (req, res) => {
        funcionariosMock.push({
            empresa: req.empresa,
            nome: req.nome,
            sobrenome: req.sobrenome,
            cpf: req.cpf,
            email: req.email,
        });

        res.status(201).json(funcionariosMock);
    }

    return controller;
}