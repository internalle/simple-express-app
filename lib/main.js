const express = require('express');
const app = express();
const routes = require('./routes/web.js');

//set view engine
app.set('view engine', 'pug');

//set view direcotyr
app.set('views','./views');

app.use(express.static('public'));
app.use(express.static('images'));

//set routes
app.use('/', routes);

//listen on port
app.listen(3000);