
const productController = require('../controller/productController')
const { uploadImage } = require('../helper/formUpload')
const routes = require('express').Router()


    routes.get('/', productController.getProductsAllL)
    routes.post('/', uploadImage, productController.addNewProduct)
    routes.patch('/')
    routes.delete('/')
    routes.get('/')


module.exports=routes