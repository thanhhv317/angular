import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/interfaces';
import { PostDTO } from './dto/post.dto';

@Injectable()
export class PostService {
    constructor(@InjectModel('Post') private readonly _postModel: Model<Post>) { }

    async create(postDTO: PostDTO): Promise<Post> {
        const post = new this._postModel(postDTO);
        return post.save();
    }
    
    async update(postId: String, postDTO: PostDTO): Promise<Post> {
        const post = await this._postModel.findByIdAndUpdate(postId, postDTO, {new: true})
        return post;
    }

    async delete(postId: String): Promise<any> {
        const post = await this._postModel.updateOne({ _id: postId }, {
            $set: {
                status: 'DELETE'
            }
        })
        return post;
    }

    async getPosts(): Promise<Post[]> {
        const posts = await this._postModel.find({status: {$ne: "DELETE"}});
        return posts;
    }

    async getPost(postId: String): Promise<Post> {
        const post = await this._postModel.findOne({_id: postId});
        return post;
    }
}
