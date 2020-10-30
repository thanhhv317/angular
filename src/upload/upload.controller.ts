import { Controller, HttpStatus, Post, Req, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express/multer/interceptors';
import { multerOptions } from 'src/utils';

@Controller('upload')
export class UploadController {

    @Post('/')
    @UseInterceptors(AnyFilesInterceptor(multerOptions))
    uploadFile(@UploadedFiles() files, @Req() req, @Res() res) {
        try {
            let { filename, destination } = files[0];
            let img = req.headers.host + destination.replace(/\.\/public/g, '') + '/' + filename;
            return res.status(HttpStatus.OK).json({
                img
            })
        } catch (e) {
            return res.status(HttpStatus.SERVICE_UNAVAILABLE).json({
                e
            })
        }
    }
}
