module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Term", {
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
};
