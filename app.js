const express = require("express");
const favicon = require("express-favicon");
const fs = require("fs");
const path = require("path");
const app = express("");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));

app.use(express.json());
app.use(express.urlencoded({ extendend: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.static(
    path.join(
      __dirname,
      "/CSS/bootstrap-5.3.2/dist/css/bootstrap.css"
    )
  )
);
app.use(
  express.static(
    path.join(
      __dirname,
      "/CSS/bootstrap-5.3.2/dist/js/bootstrap.js"
    )
  )
);

app.use(favicon(__dirname + "/public/favicon.png"));

const port = "3000";
app.get("/", (req, res) => {
  addLine("Pinging /");
  res.sendFileSync(__dirname + "/public/index.html");
});

app.get("/test", (req, res) => {
  console.log("Прошли по пути тест");
  res.end("Hello");
});

app.post("/test", (req, res) => {
  addLine("Pinging /test");
  console.log("Прошли по пути post test");
  res.end("Прошли по пути post test");
});

function addLine(line) {
  line = line + " timestamp: " + new Date().toLocaleString();

  fs.appendFile(
    path.join(__dirname + "/public/logger.txt"),
    line + "\n",
    (err) => {
      if (err) console.log(err);
    }
  );
}

app.use((req, res, next) => {
  const err = new Error("ERROR");
  err.status = 404;
  next(err);
});

console.log(app.get("env"));
if (app.get("env") != "development") {
  app.use(function (err, req, res, next) {
    // console.log(err.code, err.message);
    res.status = 404;
    let img = "http://localhost";
    res.render("error", { err });
  });
} else {
  app.use(function (err, req, res, next) {
    console.log(app.get("env"), err.status, err.message);
  });
}

app.listen(port, function () {
  console.log("Сервер запущен порт " + port);
});
