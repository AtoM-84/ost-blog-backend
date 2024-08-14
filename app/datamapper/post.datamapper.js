import BaseDatamapper from './base.datamapper.js';

class Post extends BaseDatamapper {
    tableName = 'post';

    async getPostsByDateLatest() {
        this.findAll({
            limit: 10,
            offset,
            where: {
            },
            order: {
                column: 'updated_at',
                direction: 'desc',
            },
        })
    }

    async getPostsByDateOldest() {
        this.findAll({
            limit: 10,
            offset,
            where: {
            },
            order: {
                column: 'updated_at',
                direction: 'asc',
            },
        })
    }

    async getPostsByAuthor(authorId) {
        await this.findAll({
            limit: 10,
            offset: 0,
            where: {
                author: authorId
            },
            order: {
                column: 'updated_at',
                direction: 'desc',
            },
        })
    }

    async getPostsRaw() {
        const rows = await this.client.raw(`SELECT * FROM ${this.tableName} LEFT JOIN post_has_author ON post_has_author.post_id = post.id WHERE author_id = 4`)
        return rows;
    }
    // async getPostsByPopularity() {

    // }

}

export default Post;