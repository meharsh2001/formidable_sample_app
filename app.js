var express = require("express"),
  port = process.env.PORT || 8000,
  app = express(),
  methodOverride = require("method-override"),
  bodyParser = require("body-parser"),
  formidable = require("formidable").IncomingForm;

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");

app.use(
  require("express-session")({
    secret: "Session",
    resave: false,
    saveUninitialized: false,
  })
);

//HOME
app.get("/", function (req, res) {
  res.render("home");
});
app.post("/api/upload/:type", function (req, res) {
  const maxFileSize = 500 * 1024 * 1024;
  if (req.params.type !== "vaild") {
    var form = new formidable();
  } else {
    var form = new formidable({ maxFileSize: maxFileSize });
  }
  form.maxFileSize = maxFileSize;
  form.parse(req, function (error, fields, files) {
    console.log("error", error);
    console.log("fields", fields);
    console.log("files", files);
    res.send({ error: error, fields: fields, files: files });
  });
});
app.listen(port, function () {
  console.log("http://localhost:" + port + "/");
});
