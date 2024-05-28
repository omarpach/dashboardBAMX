const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }
        conn.query('SELECT * FROM socios', (err, customers) => {
            if (err) {
                return res.json(err);
            }
            res.render('success', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    console.log(req.body);
    res.send(req.body); // Puedes ajustar esto según tu lógica
};

export default controller; // Exportar el objeto controller correctamente
