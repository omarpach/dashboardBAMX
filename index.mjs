import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Configurar el motor de plantillas EJS
const viewsPath = path.join(fileURLToPath(import.meta.url), '..', 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src'));

// Routes
app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Lógica de autenticación básica
    if (username === 'admin' && password === 'password') {
        res.render('dashboard', { username });
    } else {
        res.send('Invalid username or password');
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
