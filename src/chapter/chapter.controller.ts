import { Controller, Post, Res, Req, HttpStatus, NotFoundException } from '@nestjs/common';
import { ChapterService } from './chapter.service';

@Controller('chapter')
export class ChapterController {
    constructor(private _chapterService: ChapterService) { }

    @Post('/')
    async chapter(@Req() req, @Res() res) {
        try {
            let { action } = req.body;
            switch (action) {
                case 'chapter': {
                    let { chapterId } = req.body;
                    const chapter = await this._chapterService.getChapter(chapterId);
                    if (!chapter) throw new NotFoundException("Chapter does not exist!")
                    return res.status(HttpStatus.OK).json({
                        chapter
                    })
                }
                case 'chapters': {
                    const chapters = await this._chapterService.getChapters();
                    return res.status(HttpStatus.OK).json({
                        chapters
                    })
                }
                case 'create': {
                    let { chapter } = req.body;
                    console.log(req.body);
                    const createChapter = await this._chapterService.create(chapter);
                    if (!createChapter) throw new NotFoundException("Create failed");
                    return res.status(HttpStatus.OK).json({
                        createChapter
                    })
                }
                case 'update': {
                    let { chapterId, chapter } = req.body;
                    const updateChapter = await this._chapterService.updateChapter(chapterId, chapter);
                    if (!updateChapter) throw new NotFoundException("Chapter does not exist!")
                    return res.status(HttpStatus.OK).json({
                        updateChapter
                    })
                }
                case 'delete': {
                    let { chapterId } = req.body;
                    const deleteChapter = await this._chapterService.deleteChapter(chapterId);
                    if (!deleteChapter) throw new NotFoundException("Chapter does not exist!")
                    return res.status(HttpStatus.OK).json({
                        deleteChapter
                    })
                }
                default :{
                    return;
                }
            }
        } catch (e) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'error/500'
            })
        }
    }

    /**
    {
        "action":"create",
        "chapter": {
            "name":"test",
            "img":"https://via.placeholder.com/200",
            "description":"123",
            "status":"ACTIVE"
        }
    }
    */
}
