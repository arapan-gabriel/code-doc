const swaggerUi = require('swagger-ui-express');
const pathsDoc = require('./paths.json');
const definitionsDoc = require('./definitions.json');
const { version } = require('../../../package.json');
const configSwagger = require('./swagger.json');

module.exports = (app) => {
  configSwagger.paths = pathsDoc;
  configSwagger.definitions = definitionsDoc;
  configSwagger.info.version = version;
  
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(configSwagger));
};
