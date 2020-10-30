import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chapter } from 'src/interfaces';
import { ChapterDTO } from './dto/chapter.dto';

@Injectable()
export class ChapterService {
    constructor(@InjectModel('Chapter') private readonly _chapterModel: Model<Chapter>) { }

    async create(chapterDTO: ChapterDTO): Promise<Chapter> {
        const chapter = new this._chapterModel(chapterDTO);
        return chapter.save();
    }

    async updateChapter(chapterId: String, chapter: ChapterDTO): Promise<Chapter> {
        const updateChapter = await this._chapterModel.findByIdAndUpdate(chapterId, chapter , {new: true});
        return updateChapter;
    }

    async deleteChapter(chapterId: String): Promise<any>{
        const deleteChapter = await this._chapterModel.updateOne({ _id: chapterId }, {
            $set: {
                status: 'DELETE'
            }
        })
        return deleteChapter;
    }

    async getChapters(): Promise<Chapter[]> {
        const chapters = await this._chapterModel.find({status: {$ne: "DELETE"}});
        return chapters;
    }

    async getChapter(chapterId: String): Promise<Chapter> {
        const chapter = await this._chapterModel.findOne({_id: chapterId});
        return chapter;
    }

}
