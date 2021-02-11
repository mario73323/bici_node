const categoria = require("./categoriaController");

const producto = {};

producto.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM producto', (err, productos) => {
            if (err) {
                res.json(err);
            }
            res.render('panel/producto/productos', {
                data: productos
            });
        });
    });
};
producto.goregis = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM categoria', (err, categorias) => {
            if (err) {
                res.json(errr);
            }
            res.render('panel/producto/registro', {
                data: categorias
            });
        })
    })

}

producto.godash = (req, res) => {
    res.render('panel/dashboard')
}

producto.save = (req, res) => {
    const data = req.body;
    console.log(data)
    req.getConnection((err, conn) => {
        conn.query("Insert into producto (producto_nombre,producto_caracteristicas,producto_precio,producto_categoria_id) VALUES ('" + req.body.nombre + "','" + req.body.caracteristicas + "','" + req.body.precio + "','" + req.body.categoria_id + "')", (err, customer) => {
            console.log(customer)
            res.redirect('/panel/producto');
        })
    });
};

producto.delete = (req, res) => {
    console.log(req.params.id);
    req.getConnection((err, connection) => {
        connection.query("DELETE FROM producto where producto_id='" + req.params.id + "'", (err, rows) => {
            res.redirect('/panel/producto');
        });
    });
};

producto.buscar = (req, res) => {
    console.log(req.params.id);
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM `producto` ORDER BY producto_id DESC LIMIT 12', (err, producto) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM `categoria`', (err, categorias) => {
                if (err) {
                    res.json(err);
                }
                res.render('panel/producto/editar', {
                    data: producto,
                    cat: categorias
                });
            });
        });
    });
};

    producto.editar = (req, res) => {
        console.log(req.body);
        console.log(req.params.id);
        req.getConnection((err, conn) => {

            conn.query("UPDATE producto set producto_nombre='" + req.body.nombre + "', producto_precio='" + req.body.precio + "', producto_categoria_id='" + req.body.categoria_id + "'  WHERE producto_id ='" + req.params.id + "' ", (err, rows) => {
                res.redirect('/panel/producto');
            });
        });
    };
    module.exports = producto;