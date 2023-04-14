const jwt = require("jsonwebtoken");
const Users = require("../models/user");

exports.authenticate = (req, res, next) => {
  try {
    const token = req.headers.authentization;
    console.log("token", token);
    const user = jwt.verify(token, "TOKEN_SECREATKEY");

    Users.findByPk(user.id)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(500).json(err);
  }
};
