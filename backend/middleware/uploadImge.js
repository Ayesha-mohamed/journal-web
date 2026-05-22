// import multer from "multer"

// // Set up storage engine

// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         cb(null, "images")
//     },
//     filename: (req, file, cb) =>{
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({
//     storage: storage
// })

// // module.exports = upload
// export default upload

import multer from "multer"

// Set up storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage
})

export default upload