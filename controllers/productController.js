import ProductModel from "../models/product.js"

export const createNewProduct=async(req, res)=>{
     const product=req.body
     const newProduct=new ProductModel(product)
    try {
     const savedProduct =await newProduct.save()
     res.status(200).json({savedProduct})
    } catch (error) {
     res.status(500).json({error})
    }
}