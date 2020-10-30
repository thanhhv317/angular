import { Controller, Post, Res, Req, HttpStatus, NotFoundException } from '@nestjs/common';
import { ChapterService } from './chapter.service';

@Controller('chapter')
export class ChapterController {
    constructor(private _chapterService: ChapterService) { }

    @Post('/')
    async getChapters(@Req() req, @Res() res) {
        return res.status(HttpStatus.OK).json({
            a: "aa"
        })
    }

    @Post('/create')
    async create(@Req() req, @Res() res) {
        let {chapter} = req.body;
        const createChapter = await this._chapterService.create(chapter);
        if (!createChapter) throw new NotFoundException("Create failed");
                    return res.status(HttpStatus.OK).json({
                        createChapter
                    })
    }

}
