const fs = require('fs')

module.exports= fs.unlink = (url) =>{
    if(url && url != 'null') {
        fs.unlinkSync(`public${url}`)
    }
}