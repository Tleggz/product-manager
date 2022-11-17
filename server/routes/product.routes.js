<<<<<<< HEAD
const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.getAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.getOneProductById);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
};
=======
const ProductController = require("../controllers/product.controller"); //We import the object exported from the controller

module.exports = (app)=>{
    app.post("/api/product", ProductController.createProduct);
}
>>>>>>> 0f6c36f6d0c398af33856cf659c1fbf17588c789
