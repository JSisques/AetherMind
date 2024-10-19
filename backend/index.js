require('dotenv').config();

const app = require('./app');
const logger = require(`${__dirname}/src/util/logger`);

const port = process.env.PORT || 4224;

app.listen(port, () => {
  logger.info(`Server initialized, runnig at port ${port}`);
});
