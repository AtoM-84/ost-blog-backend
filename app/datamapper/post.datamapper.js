import BaseDatamapper from './base.datamapper.js';

class Post extends BaseDatamapper {
    tableName = 'post';

    async getByDateLatest({ limit, offset }) {
        const rows = await this.client.select(
            'p.id',
            'p.title',
            'p.sub_title',
            'p.updated_at',
            'a.email',
            'a.name'
        )
            .from('post_has_author AS pa')
            .leftJoin('post AS p', 'p.id', 'pa.post_id')
            .leftJoin('author AS a', 'a.id', 'pa.author_id')
            .orderBy('p.updated_at', 'desc')
            .limit(limit)
            .offset(offset)

        return rows;
    }

    async getByDateOldest({ limit, offset }) {
        const rows = await this.client.select(
            'p.id',
            'p.title',
            'p.sub_title',
            'p.updated_at',
            'a.email',
            'a.name'
        )
            .from('post_has_author AS pa')
            .leftJoin('post AS p', 'p.id', 'pa.post_id')
            .leftJoin('author AS a', 'a.id', 'pa.author_id')
            .orderBy('p.updated_at', 'asc')
            .limit(limit)
            .offset(offset)

        return rows;
    }

    async getByAuthor(authorName) {

        //Test in raw "mode"
        // const rows = await this.client.raw(`SELECT * FROM ${this.tableName} LEFT JOIN post_has_author ON post_has_author.post_id = post.id WHERE author_id = 4`)

        //Test knex clauses "mod"
        // const rows = await this.client.from(this.tableName).select().leftJoin('post_has_author', 'post_has_author.post_id', 'post.id').where('author_id', 3);

        const rows = await this.client.select(
            'p.id',
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

    async getPosts(params) {

        const query = this.client.from('post_has_author AS pa')
            .leftJoin('author AS a', 'a.id', 'pa.author_id')
            .leftJoin('post AS p', 'p.id', 'pa.post_id')
            .select([
                'p.id',
                'p.title',
                'p.sub_title',
                'p.updated_at',
                this.client.raw('ARRAY_AGG(a.name) as author_name'),
                this.client.raw('ARRAY_AGG(a.email) as author_email')]
            ).groupBy('pa.post_id', 'p.id', 'p.title','p.sub_title', 'p.updated_at', 'p.content')

        if (params?.limit) query.limit(params.limit)
        if (params?.offset) query.offset(params.offset)
        // if (params?.author) query.where('a.name', '=', params.author)
        if (params?.order) query.orderBy('p.updated_at', params.order)

        return await query;
    }

}

export default Post;
