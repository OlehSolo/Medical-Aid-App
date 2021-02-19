require('./config/config');
require('./models/db');
require('./config/passportConfig');

const connectDB = require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

connectDB();
var app = express();
//"MONGODB_URI":"mongodb+srv://Tshepi1234:1234Tshepi@cluster0.be5ue.mongodb.net/medicalAid?retryWrites=true&w=majority",
       
// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));