const Sequelize = require("sequelize");
const sequelize = new Sequelize("onlineshopping", "root", "VSsd@45337", {
  dialect: "hypersql",
  host: "localhost",
});

module.exports = sequelize;
