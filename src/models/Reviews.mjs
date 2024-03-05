import mongoose, { Schema } from "mongoose";

export const ReviewSchema = {
    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    rating: {
        type: Schema.Types.Number,
        required: true,
    },
    comment: {
        type: Schema.Types.String,
        required: true,
    },
    date: {
        type: Schema.Types.Date,
        required: true,
    },
    order_id: {
        type: Schema.Types.ObjectId,
        required:true
    }
}

export const Review = mongoose.model("Review",ReviewSchema);