import mongoose, {Schema} from "mongoose";

export const MenuItemSchema = {
    name: {
        type: Schema.Types.String,
        required : true
    },
    description: {
        type: Schema.Types.String,
        required : true
    },
    available: {
        type: Schema.Types.Boolean,
        required : true
    },
   
}

export const MenuItem = mongoose.model("MenuItem ",MenuItemSchema)