const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./storage"); // cb(error, success)
  },
  filename: function (req, file, cb) {
    cb(null, "tej-" + file.originalname);
  },
});

module.exports = {
  multer,
  storage,
};
