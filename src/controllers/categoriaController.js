const categoria = {};

categoria.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM categoria', (err, categorias) => {
            if (err) {
                res.json(err);
            }
            res.render('panel/categoria/categoria', {
                data: categorias
            });
        });
    });
};

categoria.save = (req, res) => {
    console.log(req.body.descripcion);
    req.getConnection((err, conn) => {
        conn.query("Insert into categoria (categoria_descripcion) VALUES ('" + req.body.descripcion + "')", (err, categorias) => {
            console.log(categorias)
            res.redirect('/panel/categoria');
        })
    });
};

categoria.delete = (req, res) => {
    console.log(req.params.id);
    req.getConnection((err, connection) => {
        connection.query("DELETE FROM categoria where categoria_id='" + req.params.id + "'", (err, rows) => {
            res.redirect('/panel/categoria');
        });
    });
};

module.exports = categoria;