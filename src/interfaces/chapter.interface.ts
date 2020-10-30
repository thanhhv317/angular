import { Document } from "mongoose";

export interface Chapter extends Document{
    readonly img: String;
    readonly name: String;
    readonly description: String;
    readonly status: String;
}