const express = require('express');

const talkerRouter = require('./routers/talkerRouter');
const loginRouter = require('./routers/loginRouter');

const { HTTP_OK_STATUS, PORT } = require('./helpers/defaultVariables');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).json({ status: 'Online' });
});

app.use('/talker', talkerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
