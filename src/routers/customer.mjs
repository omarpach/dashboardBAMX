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
  const filters = {
    Survived: req.query.Survived || '',
    Pclass: req.query.Pclass || '',
    Name: req.query.Name || '',
    Sex: req.query.Sex || '',
    Age: req.query.Age || '',
    Ticket: req.query.Ticket || '',
    Fare: req.query.Fare || '',
    Cabin: req.query.Cabin || '',
    Embarked: req.query.Embarked || '',
  };

  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const offset = (page - 1) * pageSize;

  let query = 'SELECT * FROM titanic WHERE 1=1';
  const params = [];

  if (filters.Survived) {
    query += ' AND Survived = ?';
    params.push(filters.Survived);
  }
  if (filters.Pclass) {
    query += ' AND Pclass = ?';
    params.push(filters.Pclass);
  }
  if (filters.Name) {
    query += ' AND Name = ?';
    params.push(filters.Name);
  }
  if (filters.Sex) {
    query += ' AND Sex = ?';
    params.push(filters.Sex);
  }
  if (filters.Age) {
    query += ' AND Age = ?';
    params.push(filters.Age);
  }
  if (filters.Ticket) {
    query += ' AND Ticket = ?';
    params.push(filters.Ticket);
  }
  if (filters.Fare) {
    query += ' AND Fare = ?';
    params.push(filters.Fare);
  }
  if (filters.Cabin) {
    query += ' AND Cabin = ?';
    params.push(filters.Cabin);
  }
  if (filters.Embarked) {
    query += ' AND Embarked = ?';
    params.push(filters.Embarked);
  }

  query += ' LIMIT ? OFFSET ?';
  params.push(pageSize, offset);

  req.getConnection((err, connection) => {
    if (err) return res.status(500).send(err);

    connection.query(query, params, (err, rows) => {
      if (err) return res.status(501).send(err);

      // Obtener el total de registros
      let countQuery = 'SELECT COUNT(*) as count FROM titanic WHERE 1=1';
      const countParams = [];

      if (filters.Survived) {
        countQuery += ' AND Survived = ?';
        countParams.push(filters.Survived);
      }
      if (filters.Pclass) {
        countQuery += ' AND Pclass = ?';
        countParams.push(filters.Pclass);
      }
      if (filters.Name) {
        countQuery += ' AND Name = ?';
        countParams.push(filters.Name);
      }
      if (filters.Sex) {
        countQuery += ' AND Sex = ?';
        countParams.push(filters.Sex);
      }
      if (filters.Age) {
        countQuery += ' AND Age = ?';
        countParams.push(filters.Age);
      }
      if (filters.Ticket) {
        countQuery += ' AND Ticket = ?';
        countParams.push(filters.Ticket);
      }
      if (filters.Fare) {
        countQuery += ' AND Fare = ?';
        countParams.push(filters.Fare);
      }
      if (filters.Cabin) {
        countQuery += ' AND Cabin = ?';
        countParams.push(filters.Cabin);
      }
      if (filters.Embarked) {
        countQuery += ' AND Embarked = ?';
        countParams.push(filters.Embarked);
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
    Survived: req.query.Survived || '',
    Pclass: req.query.Pclass || '',
    Name: req.query.Name || '',
    Sex: req.query.Sex || '',
    Age: req.query.Age || '',
    Ticket: req.query.Ticket || '',
    Fare: req.query.Fare || '',
    Cabin: req.query.Cabin || '',
    Embarked: req.query.Embarked || '',
  };

  let query = 'SELECT * FROM titanic WHERE 1=1';
  const params = [];

  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const offset = (page - 1) * pageSize;

  if (filters.Survived) {
    query += ' AND Survived = ?';
    params.push(filters.Survived);
  }
  if (filters.Pclass) {
    query += ' AND Pclass = ?';
    params.push(filters.Pclass);
  }
  if (filters.Name) {
    query += ' AND Name = ?';
    params.push(filters.Name);
  }
  if (filters.Sex) {
    query += ' AND Sex = ?';
    params.push(filters.Sex);
  }
  if (filters.Age) {
    query += ' AND Age = ?';
    params.push(filters.Age);
  }
  if (filters.Ticket) {
    query += ' AND Ticket = ?';
    params.push(filters.Ticket);
  }
  if (filters.Fare) {
    query += ' AND Fare = ?';
    params.push(filters.Fare);
  }
  if (filters.Cabin) {
    query += ' AND Cabin = ?';
    params.push(filters.Cabin);
  }
  if (filters.Embarked) {
    query += ' AND Embarked = ?';
    params.push(filters.Embarked);
  }

  query += ' LIMIT ? OFFSET ?';
  params.push(pageSize, offset);
  req.getConnection((err, connection) => {
    if (err) return res.status(500).send(err);

    connection.query(query, params, (err, rows) => {
      if (err) return res.status(501).send(err);

      // Obtener el total de registros
      connection.query('SELECT COUNT(*) as count FROM titanic WHERE 1=1', [], (err, countResult) => {
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

