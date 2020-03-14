# Case Flash - Software Engineer

## Desafio:
Criar uma API Node.js com três rotas:

1. Criação de funcionários
2. Criação de empresas
3. Pegar os dados dos funcionários de uma certa empresa

### Inicializando a aplicação
1. Primeiro é preciso clonar este repositório e entrar no seu diretório:
```
git clone https://github.com/caioteixeiraa/flash-test.git
cd flash-test
```

2. Instalar node_modules e iniciar a aplicação em um terminal:
```
npm i
mongod --dbpath ./api/data/
npm start
```

3. Abrir **outro terminal** e rodar o comando para iniciar o mongo:
```
mongo
use flash-test
```

4. Abrir o localhost:8080/ . Para fazer as requisições, recomenda-se utilizar o **Postman** As rotas são as seguintes:

I) Criação de funcionarios: http://localhost:8080/api/v1/funcionarios
II) Criação de empresas: http://localhost:8080/api/v1/empresas
III) Pegar funcionários de certa empresa: http://localhost:8080/api/v1/funcionarios?empresa=(nome da empresa*)  (sem os parênteses)

5. **Have Fun!**