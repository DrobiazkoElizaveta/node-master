const User = require("../models/User");
exports.form = (req, res) => {
  res.render("register", {});
};

// module.exports = form;
exports.submit = (req, res, next) => {
  if (!Igor) return next;
  const email = req.body.user.email;
  User.create(req.body.user, cb);
};
