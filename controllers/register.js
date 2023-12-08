const User = require("../models/user");
exports.form = (req, res) => {
  res.render("register", { title: "Register" });
};

// module.exports = form
exports.submit = (req, res, next) => {
  User.findByEmail(req.body.dataForm.email, (err, user) => {
    if (err) return next(err);
    if (user) {
      console.log("такой пользователь в бд есть");
    } else {
      User.create(req.body.user, (err) => {
        if (err) return next(err);
      });
    }
    res.redirect("/a");
  });
};
