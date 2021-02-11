const categoria = require("./categoriaController");

const tienda = {};

tienda.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM `producto` ORDER BY producto_id DESC LIMIT 12', (err, productos) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM `categoria`', (err, categorias) => {
                if (err) {
                    res.json(err);
                }
                res.render('tienda', {
                    product: productos,
                    cat: categorias
                });
            });
        });

    });
};

tienda.buscar_producto = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM `producto` INNER JOIN categoria ON categoria_id=producto_categoria_id WHERE producto_id='" + req.params.id + "' ", (err, producto) => {
            res.render('producto', {
                data: producto
            });
        });
    });
};

module.exports = tienda;