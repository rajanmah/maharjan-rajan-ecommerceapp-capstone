import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        // unique: true
    },
    slug: {
        type: String,
        required: true,
        // unique: true
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    vegetarian: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    inStock: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true
}
)

const Product = mongoose.model('Menu', productSchema)
export default Product