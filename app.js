const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/index');

//configuraciones
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//rutas
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'))
});