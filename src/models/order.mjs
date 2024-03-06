import mongoose, {Schema} from "mongoose";
import {OrderItemSchema} from "./orderItem.mjs"


const OrderSchema = {
    user: {
        type: Schema.Types.ObjectId,
        required : true
    },
    date: {
        type: Schema.Types.Date,
        required : true
    },
    amount: {
        type: Schema.Types.Decimal128,
        required : true
    },
    items: [OrderItemSchema]
   
}

export const Order = mongoose.model("Order",OrderSchema)