import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const InvoiceSchema = mongoose.Schema({
    //enableInvoice: { type: String},
    invoiceprefix : { type: String, default: 'XXXX'},
    invoiceno : { type: Number },
    footerText : { type: String, default: 100},

}, { timestamps: true });

InvoiceSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

InvoiceSchema.plugin(mongoosePaginate);
InvoiceSchema.plugin(AutoIncrement, {inc_field: 'invoiceno'});

// InvoiceSchema.pre('save', async function save() {
//   // console.log("SSSS")
//   // const inssss = this.invoiceNo
//   // const invoiceNo = inssss+1
//   // this.invoiceNo = invoiceNo;
//   // console.log(invoiceNo)
//     let incr = await this.invoiceNo
//     console.log("incr", incr)
//     if (incr >= '0000'){
//         const str = "" + 1
//         console.log("str", str)
//         const pad = incr
//         const answer = pad.substring(0, pad.length - str.length) + str;
//         console.log(answer)
//         this.invoiceNo = answer
//         return this.invoiceNo
//     }
    
// });

const Invoice = mongoose.model('Invoice', InvoiceSchema)


export default Invoice ;