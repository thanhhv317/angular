import { Document } from "mongoose";

export interface Post extends Document{
    readonly img: String;
    readonly title: String;
    readonly sub_title: String;
    readonly chapter: String;
    readonly content: String;
    readonly view_count: Number;
    readonly status: String;
}