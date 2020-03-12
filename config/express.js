const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(bodyParser.json());

  require('../api/routes/empresas')(app);
  require('../api/routes/funcionarios')(app);
  
  return app;
};