import BaseDatamapper from './base.datamapper.js';

class Post extends BaseDatamapper {
    tableName = 'post';

    async getByDateLatest() {
        await this.findAll({
            limit: 10,
            order: {
                column: 'updated_at',
                direction: 'desc',
            },
        })
    }

    async getByDateOldest() {
        await this.findAll({
            limit: 10,
            where:{},
            order: {
                column: 'updated_at',
                direction: 'asc',
            },
        })
    }

    async getByAuthor(authorName) {
        //Test in raw
        // const rows = await this.client.raw(`SELECT * FROM ${this.tableName} LEFT JOIN post_has_author ON post_has_author.post_id = post.id WHERE author_id = 4`)
        //Test with knex clauses
        // const rows = await this.client.from(this.tableName).select().leftJoin('post_has_author', 'post_has_author.post_id', 'post.id').where('author_id', 3);

        const rows = await this.client.select(
            'p.title',
            'p.sub_title',
            'p.updated_at',
            'p.content',
            'a.email',
            'a.name'
        )
            .from('post_has_author AS pa')
            .leftJoin('post AS p', 'p.id', 'pa.post_id')
            .leftJoin('author AS a', 'a.id', 'pa.author_id')
            .where('a.name', '=', authorName)

        return rows;
    }

}

export default Post;
