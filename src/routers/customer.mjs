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

router.post('/add', customerController.save);

export default router;
