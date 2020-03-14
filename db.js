let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flash-test');
 
let empresasSchema = new mongoose.Schema({
    nome: String,
    nomeFantasia: String,
    cnpj: String,
    endereco: String,
    beneficiosEscolhidos: String
}, { collection: 'empresas' }
);
 

let funcionariosSchema = new mongoose.Schema({
    empresa: String,
    nome: String,
    sobrenome: String,
    cpf: String,
    email: String
}, { collection: 'funcionarios' }
);

module.exports = { Mongoose: mongoose, EmpresasSchema: empresasSchema, FuncionariosSchema: funcionariosSchema }