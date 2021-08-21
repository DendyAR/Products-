const multer = require("multer");
const { path } = require("..");

let storagePhotoProfile = multer.diskStorage({
    destination: function( req, file, cb){
        cb(null, "./public/upload/photo")
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

let storageImage = multer.diskStorage({
    destination: function( req, file, cb){
        cb(null, './public/upload/images')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

let uploadP = multer({
    storage: storagePhotoProfile,
    fileFilter: function(req, file, cb){
        let ext = path.extname(file.originalname)
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif'){
            return cb(new Error('Only images are allowed'))
        }
        cb(null, true)
    },
    limits: {
        fileSize: 5000000
    }
})


let uploadI = multer({
    storage: storageImage,
    fileFilter: function(req, file, cb){
        let ext = path.extname(file.originalname)
        if(ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.mp4' && ext !== '.png'){
            return cb(new Error('Only image allowed'))
        }
        cb(null, true)
    },
    limits: {
        fileSize: 5000000,
    }
})


const formUpload = {
    uploadPhotoProfile: (req, res , next) =>{
        const uploadPhotoProfile = uploadP.single("photo")
        uploadPhotoProfile(req, res, (err)=>{
            if(err instanceof multer.MulterError){
                res.status(400).send({
                    message: err.message,
                    statusCode: 400
                })
            }else if(err){
                res.status(400).send({
                    message: err.message,
                    statusCode: 400
                })
            }else if(req.file == undefined || req.file === null){
                next()
            }else{
                next()
            }
        })
    },

    uploadImage: (req, res , next) =>{
        const uploadimage = uploadI.single("images")
        uploadimage(req, res, (err)=>{
            if(err instanceof multer.MulterError){
                res.status(400).send({
                    message: err.message,
                    statusCode: 400
                })
            }else if(err){
                res.status(400).send({
                    message: err.message,
                    statusCode: 400
                })
            }else if(req.file == undefined || req.file === null){
                next()
            }else{
                next()
            }
        })
    },
}

module.exports= formUpload