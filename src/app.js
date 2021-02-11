const express = require('express'),
    path = require ('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();


//imporatando rutas
const productoRoutes = require('./routes/producto');
const categoriaRoutes = require('./routes/categoria');
const tiendaRoutes = require('./routes/tienda');

//setings
//puerto
app.set('port', process.env.PORT || 3000);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'moto_bici'
},'single'));
app.use(express.urlencoded({extended: false}));


//routes
app.use('/',productoRoutes);
app.use('/',categoriaRoutes);
app.use('/',tiendaRoutes);

//statics files
app.use(express.static(path.join(__dirname,'public')));

//empezando el servidor
app.listen(app.get('port'),()=>{
    console.log('servidor en linea')
});