// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000

const mongoose = require('mongoose');

const app = express();

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03');
const ta04Routes = require('./routes/ta04');
const ta05Routes = require('./routes/ta05');

const corsOptions = {
    origin: "https://cse341-patrick.herokuapp.com/",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    family: 4
}

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://patrick:6BcyuIob7wGWGPXh@cluster0.6oqmc.mongodb.net/shop?retryWrites=true&w=majority";

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // For view engine as Pug
    //.set('view engine', 'pug') // For view engine as PUG.
    // For view engine as hbs (Handlebars)
    //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
    //.set('view engine', 'hbs')
    .use(bodyParser({
        extended: false
    })) // For parsing the body of a POST
    .use('/ta01', ta01Routes)
    .use('/ta02', ta02Routes)
    .use('/ta03', ta03Routes)
    .use('/ta04', ta04Routes)
    .use('/ta05', ta05Routes)
    .get('/', (req, res, next) => {
        // This is the primary index, always handled last.
        res.render('pages/index', {
            title: 'Welcome to my CSE341 repo',
            path: '/',
        });
    })
    .use((req, res, next) => {
        // 404 page
        res.render('pages/404', {
            title: '404 - Page Not Found',
            path: req.url
        });
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

mongoose.connect(MONGODB_URL, options).then((result) => {
    app.listen(PORT);
}).catch(error => {
    console.log(error);
});