import express from 'express';
import morgan from 'morgan';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import myConnection from 'express-myconnection';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routers/customer.mjs'; // Asegúrate de que la extensión del archivo es .mjs


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//app.set('port', process.env.PORT || 3000);
// Configurar el motor de plantillas EJS
const viewsPath = path.join(fileURLToPath(import.meta.url), '..', 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'mi_club'
    }, 'single'));

// Usar el enrutador de páginas
app.use('/', router);

// Rutas estáticas
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(express.urlencoded({ extended: false }));


// Routes
app.get('/', (req, res) => {
    res.render('login');
});


// Iniciar servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
