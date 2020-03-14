var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flash-test');
 
var empresasSchema = new mongoose.Schema({
    nome: String,
    nomeFantasia: String,
    cnpj: String,
    endereco: String,
    beneficiosEscolhidos: String
}, { collection: 'empresas' }
);
 

var funcionariosSchema = new mongoose.Schema({
    empresa: String,
    nome: String,
    sobrenome: String,
    cpf: String,
    email: String
}, { collection: 'funcionarios' }
);

module.exports = { Mongoose: mongoose, EmpresasSchema: empresasSchema, FuncionariosSchema: funcionariosSchema }