import 'dotenv/config';
import knex from 'knex';

export const connectionDB = knex({
  client: 'pg',
  connection: {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    user: process.env.PG_USER || 'aponi',
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE || 'ostblog',
  },
});
  