import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const ProductSchema = mongoose.Schema({
    name : { type: String},
    // reference : { type: String},
    images: { type: String},
    // category :  { type: mongoose.Schema.ObjectId, ref: 'category'},
    price : { type: String},
    // taxexcl : { type: String},
    // taxincl : { type: String},
    // taxrule : { type: String},
    quantity : { type: String},
    status : { type: String, default: 'Active'},
}, { timestamps: true });

ProductSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});
const Product = mongoose.model('product', ProductSchema)

export default Product;