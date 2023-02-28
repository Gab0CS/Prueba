module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("Producto", {
        Nombre: {
            type: Sequelize.STRING
        },
        Descripcion: {
            type: Sequelize.STRING
        },
        Existencias: {
            type: Sequelize.BOOLEAN
        }
        });
    
        return Products;
};