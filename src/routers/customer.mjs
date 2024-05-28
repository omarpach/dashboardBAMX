import express from 'express';
const router = express.Router();

import customerController from '../controllers/customerConstroller.mjs';

router.get('/', (req, res) => {
    res.render('../views/login', { messages: {} });
});
router.get('/login', (req, res) => {
    res.render('../views/login', { messages: {} });
});

router.get('/register', (req, res) => {
    res.render('../views/register', { siteKey: '6Lc-FOopAAAAAO3fAv_3wyUbP2nmHwRpkOJtd2-A' });
});

router.get('/dashboard', (req, res) => {
    res.render('../views/dashboard', { messages: {} });
});

// API endpoint to fetch data
router.get('/api/data', (req, res) => {
    req.getConnection((err, connection) => {
        if (err) return res.status(500).send(err);

        connection.query('SELECT * FROM winners', [], (err, rows) => {
            if (err) return res.status(501).send(err);
            res.json(rows);
        });
    });
});

router.post('/add', customerController.register);
router.post('/request', customerController.login);
export default router;
 
