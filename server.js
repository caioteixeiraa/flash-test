const app = require('./config/express')();
const port = app.get('port');

app.get('/', (req, res) => {
    console.log(req.query)
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});