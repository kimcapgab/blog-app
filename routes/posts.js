import { Router } from 'express'
import * as controllers from '../controllers/posts'

const router = Router()

router.get('/posts', controllers.getPosts)

export default router