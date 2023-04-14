const express = require("express");

const app = express();
//

const path = require("path");
const sequelize = require("./util/dataBase");

// import from Models
const User = require("./models/user");
const Product = require("./models/product");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-items");
const Order = require("./models/order");
const OrderItem = require("./models/order-items");

const cors = require("cors");
app.use(cors());

const bodyprase = require("body-parser");
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const errorController = require("./controller/error");

const adminRouter = require("./router/user");
const shopRouter = require("./router/shop");

//

app.use("/user", adminRouter);
app.use(shopRouter);
app.use(errorController.get404);
//
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, `public/${req.url}`));
});
// Sequelize relatio association
User.hasMany(Product);
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });

Cart.belongsTo(User);
User.hasOne(Cart);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    // https.createServer({key:privatekey,cert:certificate},app)
    app.listen(4050);
  })
  .catch((err) => console.log(err));
