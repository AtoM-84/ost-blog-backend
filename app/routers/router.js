import { Router } from "express";

const router = Router(); 
router.get('/',(req, res, next) => {
        res.send(`<h1>hello world!</h1>`)
})

router.get('/blog/:postId',(req, res) => {

        if (req.params.postId <= 10 ) {
                res.send(`<h1>Tu veux l'article ${req.params.postId}</h1>`)
        }
        else res.status(404).send("Je n'ai pas trouvé cet article")
})

router.use((req, res, next) => {
        res.status(404).json({error: 'Page not found.'});
      });

export default router;  