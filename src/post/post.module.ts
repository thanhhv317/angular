import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostSchema } from './schemas/post.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])
    ],
    providers: [PostService],
    controllers: [PostController]
})
export class PostModule {}
