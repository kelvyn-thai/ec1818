const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 3000;
const routers = require('./modules/Root/composeRouter');
const preloader = require('./modules/Preloader');

app.use(express.static('dist'));

// Use morgan to log request in dev mode
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(routers);
preloader.initApp();



app.listen(port, () => console.log('Server start at port ', port));