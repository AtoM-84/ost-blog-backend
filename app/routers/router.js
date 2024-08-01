import { Router } from "express";

const router = Router(); 
router.get('/',(req, res, next) => {
        res.send(`<h1>hello world!</h1>`)
})

router.get('/:postId',(req, res) => {
        res.send(`<h1>Tu veux l'article ${req.params.postId}</h1>`)
})

export default router;  