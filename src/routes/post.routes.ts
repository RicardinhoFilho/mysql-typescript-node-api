import { Router } from 'express';
import{getPosts,createPost, getPost,deletePost, updatePost}from '../controllers/post.controller'

const router = Router();

router.route('/').get(getPosts);

router.route('/').post(createPost);

router.route('/:postId').get(getPost);
router.route('/:postId').delete(deletePost);
router.route('/:postId').put(updatePost);


export default router;