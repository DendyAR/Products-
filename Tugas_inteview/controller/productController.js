const productModel = require("../model/productModel");
const productController = {
  getProductsAllL: async (req, res) => {
    // console.log(req);
    try {
      const result = await productModel.getAllProduct(req);
      res.status(result.statusCode).send(result);
    } catch (error) {
      res.status(error.statusCode).send(error);
      // console.log(error, "co");
    }
  },

  addNewProduct: async (req, res) => {
      console.log(req)
    try {
      const result = await productModel.addNewproduct(req);
      res.status(result.statusCode).send(result);
    } catch (error) {
        console.log(error,'k')
      res.status(error.statusCode).send(error);
    }
  },
};

module.exports = productController;
