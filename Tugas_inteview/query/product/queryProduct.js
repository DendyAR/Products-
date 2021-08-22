module.exports= queryProduct = {

    getAll: (limit, page) =>{
        return `select id, name, stock, description, price, categories, images, weight, condition, brand, author, rating,seller FROM products LIMIT ${limit} OFFSET ${(page - 1) * limit}`
    },

    addProduct: (req) =>{
        const { name , stock , description, price, categories, images , weight , condition , brand ,author ,rating ,seller} = req
        return `insert into produtcs(name, stock ,description, price, categories, images, weight, condition, brand, author, rating, seller) 
        VALUES 
        ('${name}', '${stock}', '${description}', '${price}', '${categories}', '${images}', ${weight}, '${condition}', '${brand}', '${author}', '${rating}', '${seller}')`
        `select id from produtcs`
    },
    
    
}
