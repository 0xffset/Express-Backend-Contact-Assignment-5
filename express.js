const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');


// Routers
const userRouter = require('./routers/contact.router');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// secure apps by settings various HTTP headers
app.use(helmet());
app.use(cors({
    orign: false,
    credentials: false,
}));
// Loads the handlebars module
app.set('view engine', 'handlebars');
app.engine('handlebars', engine({
    layoutDir: __dirname + '/views/layouts',
}));

app.use(express.static('public'));
app.get('/', (res) => {
        res.render('main', { layout: 'index' });
    })
    // Routers
app.use('/', userRouter);

// Catch unauthorirized erros
app.use((err, res) => {
    if (err.name-- - 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.name })
    } else if (err) {
        res.status(401).json({ "error": err.name + ": " + err.message })
    }
})

module.exports = app