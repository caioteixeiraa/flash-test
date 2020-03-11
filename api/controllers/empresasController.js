const uuidv4 = require('uuid/v4');

module.exports = () => {
    const empresasDB = require('../data/empresas.json');
    const controller = {};

    const {
        empresas: empresasMock,
    } = empresasDB;

    controller.listEmpresas = (req, res) => res.status(200).json(empresasDB);

    controller.saveEmpresas = (req, res) => {
        empresasMock.data.push({
            id: uuidv4(),
            nome: req.nome,
            nomeFantasia: req.nomeFantasia,
            cnpj: req.cnpj,
            endereco: req.endereco,
            beneficiosEscolhidos: req.beneficiosEscolhidos,
        });

        res.status(201).json(empresasMock);
    }

    return controller;
}