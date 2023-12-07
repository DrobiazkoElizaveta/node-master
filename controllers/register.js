const User = require("../modules/user");
exports.form = (req, res) => {
  res.render("register", {});
};

// module.exports = form;
exports.submit = (req, res, next) => {
  User.findByEmail(req.body.dataForm.email, (err, user) => {
    if (!user) {
      User.create(req.body.user, (err) => {
        if (err) return next(err);
      });
    }
    res.error("такой пользователь в бд есть");
    res.redirect("/");
  });
};