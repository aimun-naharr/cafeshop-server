import ProductModel from "../models/product.js";

export const createNewProduct = async (req, res) => {
        const product = req.body;
        const newProduct = new ProductModel(product);
        try {
                const savedProduct = await newProduct.save();
                res.status(200).json({ savedProduct });
        } catch (error) {
                res.status(500).json({ error });
        }
};

export const getAllProducts = async (req, res) => {
        try {
                const products = await ProductModel.find();
                res.status(200).send(products);
        } catch (error) {
                res.status(500).json({ msg: "Something went wrong" });
        }
};

export const getOneProduct=async(req, res)=>{
        try{
                const product=await ProductModel.findById(req.params.id)
                res.status(200).send(product)
        }catch{
                res.status(500).json({ msg: "Something went wrong" });
        }
}