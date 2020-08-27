import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const OrderSchema = mongoose.Schema({
    customer :  { type: mongoose.Schema.ObjectId, ref: 'user'},
    total : { type: String},
}, { timestamps: true });

OrderSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

OrderSchema.plugin(mongoosePaginate);
const Order = mongoose.model('order', OrderSchema)

export default Order;