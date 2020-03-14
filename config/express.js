const express = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || 8080);

  app.use(bodyParser.json());

  require('../api/routes/empresas')(app);
  require('../api/routes/funcionarios')(app);
  
  return app;
};