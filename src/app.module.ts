import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterModule } from './chapter/chapter.module';
import { UploadModule } from './upload/upload.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://thanh:Thanh200698@cluster0-shard-00-00-hg2tr.mongodb.net:27017,cluster0-shard-00-01-hg2tr.mongodb.net:27017,cluster0-shard-00-02-hg2tr.mongodb.net:27017/js?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useFindAndModify: false
    }),
    ChapterModule,
    UploadModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
