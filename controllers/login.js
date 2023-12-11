const User = require("../models/user");

exports.form = (req, res) => {
  res.render("loginForm", { title: "Login" });
};

exports.submit = (req, res, next) => {
  User.findByEmail(req.body.email, (error, user) => {
    if (error) return next(error);
    if (user) {
      res.redirect("/"); 
    } else {
      console.log("Такого пользователя не существует");
    }
  });
};