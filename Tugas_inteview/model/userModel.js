const pg = require("../connection/connection");
const isDataEmpty = require("../helper/checkData");
const { formError, fromSuccsess } = require("../helper/formResponse");
const { getalluser } = require("../query/user/queryUser");

const userModel = {
  getUsers: (req) => {
    return new Promise((resolve, reject) => {
      const {
        query: { limit = 20, page = 1 },
      } = req;
      pg.query(getalluser(limit, page), (err, result) => {
        console.log(err, "model user");
        const { isEmpty } = isDataEmpty(result);
        if (isEmpty) reject(formError("Data Not found", 400));
        if (err) reject(formError("Get All users failed", 500));
        resolve(fromSuccsess("Get all users succses", 200, result.rows));
      });
    });
  },

  addUsers: () => {
    return new Promise((resolve, reject) => {});
  },
};

module.exports = userModel;
