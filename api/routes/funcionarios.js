module.exports = app => {
    const controller = require("../controllers/funcionariosController")();

    app.route('/api/v1/funcionarios')
        .get(controller.listFuncionarios)
        .post(controller.saveFuncionarios);
}