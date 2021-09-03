const express = require('express');
var morgan = require('morgan');
var handlebars = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// midleware req.body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// view engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
