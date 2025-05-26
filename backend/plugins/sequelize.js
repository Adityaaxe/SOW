const fp = require("fastify-plugin");
const { Sequelize, DataTypes } = require("sequelize");

module.exports = fp(async function (fastify, opts) {
  const sequelize = new Sequelize("SOWdb", "postgres", "Agent@1914", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  });

  const term = sequelize.define("term", {
    language: DataTypes.STRING,
    content: DataTypes.TEXT,
    button: DataTypes.STRING,
    term: DataTypes.STRING,
    opt1: DataTypes.STRING,
    opt2: DataTypes.STRING,
    opt3: DataTypes.STRING,
    opt4: DataTypes.STRING,
    opt5: DataTypes.STRING,
  });

  await sequelize.sync(); // make sure table exists

  fastify.decorate("db", {
    sequelize,
    models: { term },
  });
});
