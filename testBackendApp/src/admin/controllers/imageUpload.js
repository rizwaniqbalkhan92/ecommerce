const multer=require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../../../public/');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
  },
});

 const upload = multer({ storage: storage });
module.exports=upload