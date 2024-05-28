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

// router.get('/dashboard', (req, res) => {
//     res.render('../views/dashboard', { messages: {} });
// });
router.get('/dashboard', (req, res) => {
    const filters = {
        Area: req.query.Area || '',
        Item: req.query.Item || '',
        Element: req.query.Element || '',
        Year: req.query.Year || '',
        Unit: req.query.Unit || ''
    };

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;

    let query = 'SELECT * FROM winners WHERE 1=1';
    const params = [];

    if (filters.Area) {
        query += ' AND Area = ?';
        params.push(filters.Area);
    }
    if (filters.Item) {
        query += ' AND Item = ?';
        params.push(filters.Item);
    }
    if (filters.Element) {
        query += ' AND Element = ?';
        params.push(filters.Element);
    }
    if (filters.Year) {
        query += ' AND Year = ?';
        params.push(filters.Year);
    }
    if (filters.Unit) {
        query += ' AND Unit = ?';
        params.push(filters.Unit);
    }

    query += ' LIMIT ? OFFSET ?';
    params.push(pageSize, offset);

  req.getConnection((err, connection) => {
        if (err) return res.status(500).send(err);

        connection.query(query, params, (err, rows) => {
            if (err) return res.status(501).send(err);

            // Obtener el total de registros
            let countQuery = 'SELECT COUNT(*) as count FROM winners WHERE 1=1';
            const countParams = [];

            if (filters.Area) {
                countQuery += ' AND Area = ?';
                countParams.push(filters.Area);
            }
            if (filters.Item) {
                countQuery += ' AND Item = ?';
                countParams.push(filters.Item);
            }
            if (filters.Element) {
                countQuery += ' AND Element = ?';
                countParams.push(filters.Element);
            }
            if (filters.Year) {
                countQuery += ' AND Year = ?';
                countParams.push(filters.Year);
            }
            if (filters.Unit) {
                countQuery += ' AND Unit = ?';
                countParams.push(filters.Unit);
            }

            connection.query(countQuery, countParams, (err, countResult) => {
                if (err) return res.status(501).send(err);

                const totalRecords = countResult[0].count;
                const totalPages = Math.ceil(totalRecords / pageSize);

                res.render('../views/dashboard', {
                    data: rows,
                    filters,
                    pagination: {
                        page,
                        pageSize,
                        totalPages
                    }
                });
            });
        });
    });
});

router.get('/data', (req, res) => {
    const filters = {
        Area: req.query.Area || '',
        Item: req.query.Item || '',
        Element: req.query.Element || '',
        Year: req.query.Year || '',
        Unit: req.query.Unit || ''
    };

    let query = 'SELECT * FROM winners WHERE 1=1';
    const params = [];

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;
    
    if (filters.Area) {
        query += ' AND Area = ?';
        params.push(filters.Area);
    }
    if (filters.Item) {
        query += ' AND Item = ?';
        params.push(filters.Item);
    }
    if (filters.Element) {
        query += ' AND Element = ?';
        params.push(filters.Element);
    }
    if (filters.Year) {
        query += ' AND Year = ?';
        params.push(filters.Year);
    }
    if (filters.Unit) {
        query += ' AND Unit = ?';
        params.push(filters.Unit);
    }

    console.log('Query:', query);
    console.log('Params:', params);

    // req.getConnection((err, connection) => {
    //     if (err) return res.status(500).send(err);

    //     connection.query(query, params, (err, rows) => {
    //         if (err) return res.status(501).send(err);
    //         //res.json(rows);
    //     });
    // });

    query += ' LIMIT ? OFFSET ?';
    params.push(pageSize, offset);
    req.getConnection((err, connection) => {
        if (err) return res.status(500).send(err);

        connection.query(query, params, (err, rows) => {
            if (err) return res.status(501).send(err);

            // Obtener el total de registros
            connection.query('SELECT COUNT(*) as count FROM winners WHERE 1=1', [], (err, countResult) => {
                if (err) return res.status(501).send(err);

                const totalRecords = countResult[0].count;
                const totalPages = Math.ceil(totalRecords / pageSize);

                res.render('../views/dashboard', {
                    data: rows,
                    filters,
                    pagination: {
                        page,
                        pageSize,
                        totalPages
                    }
                });
            });
        });
    });
});


router.post('/add', customerController.register);
router.post('/request', customerController.login);
export default router;
 
