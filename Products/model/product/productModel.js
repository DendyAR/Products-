const pg = require("../../connection/connection")
const isDataEmpty = require("../../helper/checkData")
const { formError, fromSuccsess } = require("../../helper/formResponse")
const { getAll } = require("../../query/product/queryProduct")

const productModel = {
    getAllProduct: (req) =>{
        return new Promise((resolve, reject)=>{
            const { query: {limit=20 , page = 1}}= req
            pg.query(getAll(limit, page), (err, result)=>{
                const { isEmpty}= isDataEmpty(result)
                if(isEmpty) reject(formError("Data not found", 400))
                if(err) reject(formError("Get product failed", 500))
                resolve(fromSuccsess("Get all product succses", 200, result.rows))
            }) 
        })
    },

    addNewProduct: (req) =>{

    }

}

module.exports=productModel