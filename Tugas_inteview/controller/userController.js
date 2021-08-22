const { getUsers , addUsers } = require('../model/userModel')

const usersController={
    getUsers: async (req, res) =>{
        try{
            const result = await getUsers(req)
            res.status(result.statusCode).send(result) 
        }catch(error){
            res.status(error.statusCode).send(error)
            // console.log(error,'contro')
        }
    },

    addUsers: async (req, res) =>{
        try{
            const result = await addUsers(req)
            res.status(result.statusCode).send(result)
        }catch(error){
            res.status(error.statusCode).send(error)
        }
    }
}

module.exports=usersController