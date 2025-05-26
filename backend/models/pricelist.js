module.exports = (sequelize, DataTypes) => {
  return sequelize.define("pricelist", {
    product: DataTypes.STRING,
    inPrice: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    vat: DataTypes.FLOAT,
  });
};
