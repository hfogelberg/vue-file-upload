const express = require("express"),
  multer = require("multer"),
  cors = require("cors"),
  upload = multer({ dest: "uploads/" }),
  app = express();

app.use(cors());

app.post("/uploads", upload.single("photo"), (req, res, next) => {
  console.log("UPLOAD!!");
  console.log(req.file);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
