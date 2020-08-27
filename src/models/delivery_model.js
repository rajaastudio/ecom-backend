import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const DeliverySchema = mongoose.Schema({
    deliveryprefix : { type: String, default: 'XXXX'},
    deliveryno : { type: Number},
}, { timestamps: true });

DeliverySchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

DeliverySchema.plugin(AutoIncrement, {inc_field: 'deliveryno'});

DeliverySchema.plugin(mongoosePaginate);
const Delivery = mongoose.model('delivery', DeliverySchema)

export default Delivery;