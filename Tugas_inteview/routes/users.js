const routes = require('express').Router()
const userController = require('../controller/userController')

    routes.get('/',  userController.getUsers)
    routes.post('/', )
    routes.patch('/', )
    routes.delete('/', )


module.exports=routes