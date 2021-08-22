const productRoutes = require('./produtcs')
const userRoutes = require('./users')

const routes = (app, prefix) =>{
    app.use(`${prefix}/products`, productRoutes)
    app.use(`${prefix}/users`, userRoutes)
}

module.exports= routes