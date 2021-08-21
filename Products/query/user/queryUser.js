const queryUser = {
    getalluser: (limit, page) => {
        return `select id , user_id, name, username, email, photos, phone_number FROM users LIMIT ${limit} OFFSET ${(page - 1) * limit}`
    }
}

module.exports=queryUser