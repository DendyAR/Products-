const pg = require("../connection/connection");
const isDataEmpty = require("../helper/checkData");
const { formError, fromSuccsess } = require("../helper/formResponse");
const unlinkImages = require("../helper/unlinkImages");
const { getAll, addProduct } = require("../query/product/queryProduct");
const formResponse = require("../helper/formResponse");

const productModel = {
  getAllProduct: (req) => {
    return new Promise((resolve, reject) => {
      const {
        query: { limit = 100, page = 1 },
      } = req;
      pg.query(getAll(limit, page), (err, result) => {
        // console.log(err, "mode");
        const { isEmpty } = isDataEmpty(result);
        if (isEmpty) reject(formError("Data not found", 400));
        if (err) reject(formError("Get product failed", 500));
        resolve(fromSuccsess("Get all product succses", 200, result.rows));
      });
    });
  },

  addNewproduct: (request) => {
    return new Promise((resolve, reject) => {
      const { name, stock, description, price, categories, weight, condition, brand, rating } = request.body;
      const photos = request.file.filename;
      pg.query(
        `SELECT * FROM products WHERE LOWER(name)='${name.toLowerCase()}'`,
        (error, result) => {
            // console.log(error, 'model 1')
          if (!error) {
            if (result.rows.length < 1) {
              // let content = article_content
              pg.query(
                `INSERT INTO products(name, stock, description, price, categories, images, weight, condition, brand, author, rating, seller)
                                    VALUES('${name}', ${stock}, '${description}',${price}, '${categories}', '/upload/images/${photos}',${weight}, '${condition}', '${brand}',${rating}, '${seller}') RETURNING *`,
                (err) => {
                    console.log(err,'model 2')
                  if (!err) {
                    resolve(
                      fromSuccsess("Add article success", 200, result.rows[0])
                    );
                  } else {
                    console.log(err);
                    reject(formError("Add article Failed", 500));
                  }
                }
              );
            } else {
              reject(formError("Article exist", 400));
            }
          } else {
            reject(formError("Add article failed", 500));
          }
        }
      );
    });
  },
};

module.exports = productModel;
