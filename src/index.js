// Llamando las librerias necesarias
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// Llamando las librerias necesarias

// Configurando el servidor de ExpressJs
const app = express();
app.set('port', '4000');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.set('views'), 'layouts'),
    partialsDir: path.join(app.set('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
// Configurando el servidor de ExpressJs

// Servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public'))); //Ruta de nuestros archivos estáticos
// Servidor

// Rutas
app.use('/contacto', require('./routes/contacto'));
app.use('/app', require('./routes/app'));
// Rutas

//Listen
app.listen(app.get('port'), () => {
    console.log(`La url es http://127.0.0.1:${app.get('port')}`);
});
//Listen

