import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chapter } from 'src/interfaces';
import { ChaperDTO } from './dto/chapter.dto';

@Injectable()
export class ChapterService {
    constructor(@InjectModel('Chapter') private readonly _chapterModel: Model<Chapter>) { }

    async create(chapterDTO: ChaperDTO): Promise<Chapter> {
        const chapter = new this._chapterModel(chapterDTO);
        return chapter.save();
    }

}
