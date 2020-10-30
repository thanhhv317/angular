import { Schema } from "mongoose";

export const PostSchema = new Schema({
    img: String,
    title: String,
    sub_title: String,
    chapter: {
        type: Schema.Types.ObjectId,
        ref: 'Chapter'
    },
    content: String,
    view_count: Number,
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE', 'DELETE'],
        defaul: 'ACTIVE'
    }
}, {
    timestamps: true,
})