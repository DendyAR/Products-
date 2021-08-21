const productModel = require("../../model/product/productModel")

const productController = {

    getProductsAllL: async (req, res) =>{
        try{
            const result = await productModel.getAllProduct(req)
            res.status(result.statusCode).send(result)
        }catch(error){
            res.status(error.statusCode).send(error)
        }
    },

    addNewProduct: async (req, res) =>{
        try{
            const result = await productModel.addNewProduct(req.body)
            res.status(result.statusCode).send(result)
        }catch(error){
            res.status(error.statusCode).send(error)
        }
    }

}

module.exports=productController