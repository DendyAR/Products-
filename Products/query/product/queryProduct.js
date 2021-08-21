const queryProduct = {

    getAll: (limit, page) =>{
        return `select id, name, stock, description, price, categories, images, weight, condition, brand, author, rating,seller FROM products LIMIT ${limit} OFFSET ${(page - 1) * limit}`
    },

    
}

module.exports=queryProduct