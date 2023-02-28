const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Crea y guarda un producto
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "El contenido no puede estar vacío"
            });
            return;
        }
    const product = {
        //Validación
        title: req.body.title,
        description: req.body.description,
        stocked: req.body.stocked ? req.body.stocked : false
    };
        
        // Guardar producto en la base de datos
        Product.create(product)
            .then(data => {
            res.send(data);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error en crear un nuevo producto."
            });
            });
};

// Muestra todos los productos en la base de datos
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Product.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ha ocurrido un error en la búsqueda de productos."
            });
        });
};

// Encuentra producto específico por ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    Product.findByPk(id)
        .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
            message: `No se pudo encontrar un producto con el id=${id}.`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error en la búsqueda de un producto con el id=" + id
        });
        });
};

// Actualiza un producto por medio del ID 
exports.update = (req, res) => {
    const id = req.params.id;
    Product.update(req.body, {
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Producto actualizado exitosamente."
            });
        } else {
            res.send({
            message: `No se pudo actualizar el producto id=${id}. producto no encontrado o req.body vacío!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error en actualizar producto con id=" + id
        });
        });
};

// Elimina un producto especificado por medio de id
exports.delete = (req, res) => {
    const id = req.params.id;
    Product.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Producto eliminado exitosamente!"
            });
        } else {
            res.send({
            message: `No se pudo eliminar el producto id=${id}. Producto no encontrado!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "No fue posible eliminar el tutorial con el id=" + id
        });
        });
};

// Elimina todos los productos de la base de datos
exports.deleteAll = (req, res) => {
    Product.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Productos eliminados exitosamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocurrió un error a la hora de eliminar los productos."
            });
        });
};

// Busca todos los productos en mostrador
exports.findAllCounter = (req, res) => {
    Product.findAll({ where: { stocked: true } })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Hubo un error en la búsqueda de productos."
        });
    });
};