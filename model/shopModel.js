import mongoose from "mongoose";

const shopSccma = mongoose.Schema({
    shopName :{
        type: 'string',
        required: true
    }, 

    billNumber:{
        type: 'string',
        required: true
    },

    amount:{
        type: 'number',
        required: true
    },
    status:{
        type:'string',
        enum: ['Paid', 'Pending','Cancelled'],
    }

})

const Shop = mongoose.model('Shop', shopSccma);

export default Shop;