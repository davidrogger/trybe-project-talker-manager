const express = require('express');

// Documentation module
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const talkerRouter = require('./src/routers/talkerRouter');
const loginRouter = require('./src/routers/loginRouter');

const { HTTP_OK_STATUS, PORT } = require('./src/helpers/defaultVariables');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).json({ status: 'Online' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/login', loginRouter);
app.use('/talker', talkerRouter);

app.listen(PORT, () => {
  console.log('Online');
});
