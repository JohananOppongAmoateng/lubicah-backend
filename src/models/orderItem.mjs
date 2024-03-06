import mongoose, {Schema} from "mongoose";
import {MenuItemSchema} from "./menu-Item.mjs"

export const OrderItemSchema = {
    date: {
        type: Schema.Types.Date,
        required : true
    },
    price: {
        type: Schema.Types.Decimal128,
        required : true
    },
    quantity: {
        type: Schema.Types.Number,
        required : true
    },
    menu_item: MenuItemSchema,
    
   
}

export const OrderItem = mongoose.model("OrderItem",OrderItemSchema)