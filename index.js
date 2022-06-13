const express = require('express');
const bodyParser = require('body-parser');

const talkerRouter = require('./src/talkerRouter');
const loginRouter = require('./src/loginRouter');

const { HTTP_OK_STATUS, PORT } = require('./src/defaultVariables');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
