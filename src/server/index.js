const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
app.use(express.static('dist'));
app.use(express.static('public'));
app.get('*', (req, res, next) => {
    const template = `
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>EC1818</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/javascript" src="bundle.js"></script></body>
    </html>
`;

    return res.send(template);
})


app.listen(port, () => console.log('Server start at port ', port));
