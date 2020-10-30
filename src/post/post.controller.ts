import { Controller, HttpStatus, NotFoundException, Post, Req, Res } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private _postService: PostService) { }

    @Post('/')
    async post(@Req() req, @Res() res) {
        try {
            let { action } = req.body;
            switch (action) {
                case 'create': {
                    let { post } = req.body;
                    const createPost = await this._postService.create(post);
                    if (!createPost) throw new NotFoundException("Create failed")
                    return res.status(HttpStatus.OK).json({
                        createPost
                    })
                }
                case 'update': {
                    let { postId, post } = req.body;
                    const updatePost = await this._postService.update(postId, post);
                    if (!updatePost) throw new NotFoundException("Post does not exist")
                    return res.status(HttpStatus.OK).json({
                        updatePost
                    })
                }
                case 'delete': {
                    let { postId } = req.body;
                    const deletePost = await this._postService.delete(postId);
                    if (!deletePost) throw new NotFoundException("Post does not exist")
                    return res.status(HttpStatus.OK).json({
                        deletePost
                    })
                }
                case 'posts': {
                    const posts = await this._postService.getPosts();
                    return res.status(HttpStatus.OK).json({
                        posts
                    })
                }
                case 'post': {
                    let { postId } = req.body;
                    const post = await this._postService.getPost(postId);
                    return res.status(HttpStatus.OK).json({
                        post
                    })
                }
                default: {
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
     * "post":{
        "img":"https://via.placeholder.com/2000",
        "title":"aaaa22a",
        "sub_title":"bcd",
        "chapter":"5f9b81b6599a932dccd49e9d",
        "content":"hello",
        "view_count":123
    }
     */
}
