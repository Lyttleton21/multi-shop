const $productController = require('./controller');
const auth = require('../../middleware/auth.mid');

exports.productRoute = (app) => {
   app.post('/api/create/product', $productController.productController.saveProduct);
   //! I'm using this for the leatest
   app.get('/api/getProducts', $productController.productController.getAllProducts);
   app.get('/api/getProducts/random', $productController.productController.getAllProductsRandomly);
   app.get('/api/product/:id', $productController.productController.findProductById);
   app.get('/api/product_search/:name', $productController.productController.findProductByName);
   app.get('/api/product/most_fav', $productController.productController.getProductByMostFavorite)
   app.get('/api/product/limit', $productController.productController.getOnlyThree)
}
