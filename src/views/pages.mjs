import express from 'express';
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login', { messages: {} });
});

router.get('/register', (req, res) => {
    res.render('register', { siteKey: '6Lc-FOopAAAAAO3fAv_3wyUbP2nmHwRpkOJtd2-A' });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Aquí iría la lógica de autenticación
    if (email === 'usuario@example.com' && password === 'contra') {
        req.session.userId = email;
        res.redirect('/dashboard');
    } else {
        res.render('login', { messages: { error: 'Usuario o contraseña incorrectos' } });
    }
});

router.get('/dashboard', (req, res) => {
    if (!req.session.userId) {
        return res.status(401).send('Necesitas iniciar sesión para ver el dashboard');
    }

    // Aquí iría la lógica para obtener los datos de la base de datos
    Data.find({}, (err, data) => {
        if (err) {
            return res.status(500).send('Error al obtener los datos');
        }
        res.render('dashboard', { user: req.session.userId, data });
    });
});

export default router;
