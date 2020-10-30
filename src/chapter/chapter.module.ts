import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';
import { ChapterSchema } from './schemas/chapter.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Chapter', schema: ChapterSchema }])
    ],
    providers: [ChapterService],
    controllers: [ChapterController]
})
export class ChapterModule { }
