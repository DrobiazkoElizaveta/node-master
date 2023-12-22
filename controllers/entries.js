const Entry = require("../models/entry");
const moment = require('moment');


exports.list = (req, res, next) => {
  Entry.selectAll((err, entries) => {
    if (err) return next(err);
    res.render("entries", { title: "Главная", entries: entries });
  });
};

exports.form = (req, res, next) => {
  res.render("post", { title: "Post" });
};
exports.submit = (req, res, next) => {
  try {
    const username = req.user && req.user.name ? req.user.name : "Anonymous";
    const data = req.body.entry;

    const currentDate = moment.utc(); // Получаем текущую дату и время в формате UTC
    const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss");

    const entry = {
      username: username,
      title: data.title,
      content: data.content,
      timestamp: formattedDate,
    };

    Entry.create(entry);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};
