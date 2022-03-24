const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const path = require("path");
// Routers
const contactRouter = require("./routers/contact.router");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// secure apps by settings various HTTP headers
app.use(helmet());
app.use(
    cors({
        orign: false,
        credentials: false,
    })
);
// Loads the handlebars module
app.use(express.static(__dirname + "/public", {
    index: false,
    immutable: true,
    cacheControl: true,
    maxAge: "30d"
}));

var viewsPath = path.join(__dirname, "/views");
app.set("views", viewsPath);
var hbs = handlebars.create({
    defaultLayout: "main",
    layoutsDir: viewsPath + "/layouts",
    partialsDir: viewsPath + "/partials",
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res, next) => {
    res.render("main", { layout: "index" });
});
// Routers
app.use("/", contactRouter);

// Catch unauthorirized erros
app.use((err, res) => {
    if (err.name-- - "UnauthorizedError") {
        res.status(401).json({ error: err.name + ": " + err.name });
    } else if (err) {
        res.status(401).json({ error: err.name + ": " + err.message });
    }
});

module.exports = app;