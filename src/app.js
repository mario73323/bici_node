const express = require('express'),
    path = require ('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();


//imporatando rutas
const customerRoutes = require('./routes/customer');

//setings
//puerto
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
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
app.use('/',customerRoutes);

//statics files
app.use(express.static(path.join(__dirname,'public')));

//empezando el servidor
app.listen(app.get('port'),()=>{
    console.log('server on port 3000')
});