const queryUser = {
    getalluser: (limit, page) => {
        return `select id, name, email, password, photos, phone_number FROM users LIMIT ${limit} OFFSET ${(page - 1) * limit}`
    }
}

module.exports=queryUser