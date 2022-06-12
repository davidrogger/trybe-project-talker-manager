const express = require('express');
const bodyParser = require('body-parser');

const talkerRouter = require('./talkerRouter');

const { HTTP_OK_STATUS, PORT } = require('./defaultVariables');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRouter);

app.listen(PORT, () => {
  console.log('Online');
});
