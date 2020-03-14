const uuidv4 = require('uuid/v4');

module.exports = () => {
    const controller = {};

    controller.listEmpresas = (req, res) => {
        let db = require('../../db');
        let Empresas = db.Mongoose.model('empresas', db.EmpresasSchema, 'empresas');
        Empresas.find({}).lean().exec( (e, docs) => {
            res.json(docs);
            res.end();
        })
    }

    controller.saveEmpresas = (req, res) => {

        let db = require('../../db');
        let Empresa = db.Mongoose.model('empresas', db.EmpresasSchema, 'empresas');
        let newEmpresa = new Empresa({
            nome: req.body.nome,
            nomeFantasia: req.body.nomeFantasia,
            cnpj: req.body.cnpj,
            endereco: req.body.endereco,
            beneficiosEscolhidos: req.body.beneficiosEscolhidos
        })
        newEmpresa.save((err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                res.end();
                return;
            }
            res.json(newEmpresa);
            res.end();
        })
    }

    return controller;
}