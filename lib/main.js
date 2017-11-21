const express = require('express');
const app = express();
const routes = require('./routes/web.js');

//both index.js and things.js should be in same directory
app.use('/', routes);

app.listen(3000);