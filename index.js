const express = require('express');

const app = express();

app.use(express.json());
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(require('./controllers'));

app.use(require('./middlewares/error'));

app.listen(3000, () => console.log('ouvindo porta 3000!'));