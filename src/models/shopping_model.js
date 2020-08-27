import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const ShoppingSchema = mongoose.Schema({
    order :  { type: mongoose.Schema.ObjectId, ref: 'order'},
    customer: { type: mongoose.Schema.ObjectId, ref: 'user'},
    total : { type: String},
    carrier : { type: String},
    status: { type: String, default: 'Active'},
}, { timestamps: true });

ShoppingSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

ShoppingSchema.plugin(mongoosePaginate);
const Shopping = mongoose.model('shopping', ShoppingSchema)

export default Shopping;