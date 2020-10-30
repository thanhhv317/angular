import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapterController } from './chapter/chapter.controller';
import { PostController } from './post/post.controller';
import { CommentController } from './comment/comment.controller';
import { SettingController } from './setting/setting.controller';
import { ChapterService } from './chapter/chapter.service';
import { PostService } from './post/post.service';
import { SettingService } from './setting/setting.service';
import { CommentService } from './comment/comment.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/htblog')],
  controllers: [AppController, ChapterController, PostController, CommentController, SettingController],
  providers: [AppService, ChapterService, PostService, SettingService, CommentService],
})
export class AppModule {}
