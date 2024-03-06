import mongoose, {Schema, mongo} from "mongoose";

const UserSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required : true,
        unique:true
    },
    password : {
        type: Schema.Types.String,
        required: true,
    },

    firstName: {
        type: Schema.Types.String,
        required: true,
    },
    lastName: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
    },
    role : {
        type: Schema.Types.String,
        required: true
    },
    address: {
        type: Schema.Types.String,
        required: true,
    },
    phoneNumber: {
        type: Schema.Types.String,
        required: true,
    },

})

export const User = mongoose.model("User",UserSchema)