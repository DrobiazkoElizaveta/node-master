const sqlite3 = require("sqlite3").verbose();
const moment = require('moment');

const db = new sqlite3.Database("test.sqlite");

const sql =
  "CREATE TABLE IF NOT EXISTS entries(id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT NOT NULL, title TEXT, content TEXT NOT NULL, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)";
db.run(sql);

class Entry {
  constructor() {}
  static create(data) {
    const currentDate = moment.utc(); // Получаем текущую дату и время в формате UTC
    const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss");

    const sql =
      "INSERT INTO entries (username, title, content, timestamp) VALUES (?, ?, ?, ?)";
    db.run(sql, data.username, data.title, data.content, formattedDate);
  }
  static selectAll(cb) {
    db.all("SELECT * FROM entries", cb);
  }
}

module.exports = Entry;
