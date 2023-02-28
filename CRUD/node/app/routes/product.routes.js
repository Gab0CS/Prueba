module.exports = app => {
    const products = require("../controllers/product.controller.js");

    var router = require("express").Router();

    // Nuevo producto
    router.post("/", products.create);

    // Buscar todos los productos
    router.get("/", products.findAll);

    // Buscar todos los productos en mostrador
    router.get("/published", products.findAllCounter);

    // Buscar un producto por id
    router.get("/:id", products.findOne);

    // Actualizar un producto por id
    router.put("/:id", products.update);

    // Eliminar un producto por id
    router.delete("/:id", products.delete);

    // Eliminar todo
    router.delete("/", products.deleteAll);

    app.use('/api/products', router);
};