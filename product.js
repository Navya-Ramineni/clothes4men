const Sequelize = require("sequelize");

const sequelize = require("../util/dataBase");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    // allowNull:false
  },
  imageUrl: {
    type: Sequelize.STRING,
    // allowNull:false
  },
  description: {
    type: Sequelize.STRING,
    // allowNull:false
  },
});

module.exports = Product;
