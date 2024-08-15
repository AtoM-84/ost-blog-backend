import { Router } from "express";
import controllerHandler from '../middlewares/controller.handler.js';
import blogController from "../controllers/blogController.js";

const router = Router();


router.get('/', (req, res, next) => {
        res.send(`<h1>hello world!</h1>`)
})

router.get('/blog/', controllerHandler(blogController.blogList))
// router.get('/blog/:blogPage', controllerHandler(blogController.blogList))
// router.get('/blog/asc/:blogPage', controllerHandler(blogController.blogList)) 
// router.get('/blog/author/:author/:blogPage', controllerHandler()) // use getByAuthor in datamapper
// router.get('/blog/item/:postId', controllerHandler(blogController.blogItem)) // use findByKey in datamapper

router.use((req, res, next) => {
        res.status(404).json({ error: 'Page not found.' });
});

// router.use(errorHandler);

export default router;