import { Schema } from "mongoose";

export const ChapterSchema = new Schema({
    img: String,
    name: String,
    description: String,
    status: String,
}, {
    timestamps: true,
})