const uuidv4 = require('uuid/v4');

module.exports = () => {
    const controller = {};

    controller.listFuncionarios = (req, res) =>  {

        let db = require('../../db');
        let Funcionario = db.Mongoose.model('funcionarios', db.FuncionariosSchema, 'funcionarios');
        
        if (req.query.empresa) {
            Funcionario.find({empresa: req.query.empresa}).lean().exec( (e, docs) => {
                res.json(docs);
                res.end();
                return;
            });
        }

        else {
            Funcionario.find({}).lean().exec( (e, docs) => {
                res.json(docs);
                res.end();
            })
        }
    }

    controller.saveFuncionarios = (req, res) => {

        let db = require('../../db');
        let Funcionario = db.Mongoose.model('funcionarios', db.FuncionariosSchema, 'funcionarios');
        let newFuncionario = new Funcionario({
            empresa: req.body.empresa,
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            cpf: req.body.cpf,
            email: req.body.email,
        })
        newFuncionario.save((err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                res.end();
                return;
            }
            res.json(newFuncionario);
            res.end();
        })
    }

    return controller;
}