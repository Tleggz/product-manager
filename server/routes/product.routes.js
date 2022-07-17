const ProductController = require("../controllers/product.controller"); //We import the object exported from the controller

module.exports = (app)=>{
    app.post("/api/product", ProductController.createProduct);
}