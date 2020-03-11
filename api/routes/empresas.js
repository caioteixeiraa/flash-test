module.exports = app => {
    const controller = require('../controllers/empresasController')();

    app.route('/api/v1/empresas')
        .get(controller.listEmpresas)
        .post(controller.saveEmpresas);
}