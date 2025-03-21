import addProductModel from "../../model/addProductModel/index.js";

const addProduct = async (req,res) =>{
    let image_filename = `${req.file.filename}`;
    const {name, price, keyfeatures, category} = req.body;
    const product = new addProductModel({
        name: name,
        price: price,
        image: image_filename,
        keyfeatures : keyfeatures,
        category: category,
    })
    try{
        await product.save();
        res.json({ success: true, message: "product added successfully"})
    }catch(error){
        res.json({success: false, message: error})
    }
}

export {addProduct}