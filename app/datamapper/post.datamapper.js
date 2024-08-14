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

    // async getPostsByPopularity() {

    // }

}

export default Post;