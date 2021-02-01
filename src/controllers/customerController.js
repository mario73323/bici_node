const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM producto',(err,customers)=>{
            if(err){
                res.json(err);
            }
            console.log(customers);
            res.render('productos',{
                data:customers
            });
        });
    });
};
controller.goregis=(req,res)=>{
    res.render('registro');
}

controller.save = (req,res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query("Insert into producto (producto_nombre,producto_precio,producto_categoria_id) VALUES ('"+req.body.nombre+"','"+req.body.precio+"','"+req.body.categoria_id+"')", (err, customer) => {
            console.log(customer)
            res.redirect('/');
          })
    });
};

module.exports = controller;