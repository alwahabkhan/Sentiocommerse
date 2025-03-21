import { addProduct } from "../../controller/addProductController/index.js";
import express from "express";

const productRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    },
})

const upload = multer({ storage: storage});

productRouter.post("/addProduct", upload.array("images",5), addProduct);

export default productRouter;