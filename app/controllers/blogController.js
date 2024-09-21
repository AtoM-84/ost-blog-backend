import Post from "../datamapper/post.datamapper.js";
import { connectionDB } from "../db/database.js";

const postDatamapper = new Post(connectionDB);

export default {
    // méthode pour la page d'accueil du blog qui affiche tous les posts
    async blogList(_, res) {
        const rows = await postDatamapper.getPosts({ limit: 10, offset: 0, order: "desc" });
        res.json(rows);
    },

    async blogPost(req, res, next) {
        try {
            const rows = await postDatamapper.getPost(req.params);
            if (rows) {
                setTimeout(() => res.json(rows), 10000);
            } else {
                next();
            }
        } catch (error) {}
    },
};
