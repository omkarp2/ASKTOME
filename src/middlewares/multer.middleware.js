import multer from 'multer';

//configuration 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public1/temp")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ 
    storage: storage 
})
