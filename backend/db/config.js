const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SOWdb', 'postgres', 'Agent@1914', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;