import mongoose from "mongoose";

const productSchema = mongoose.Schema({
        name: {
                type: String,
                required: true,
                minLenght: 3,
        },
        category: {
                type: String,
                required: true,
        },
        image: {
                type: String,
                required: true,
        },
        description: {
                type: String,
                required: true,
        },
       
});

const ProductModel = mongoose.model("Products", productSchema);
export default ProductModel;
