import * as changeKeys from 'change-case/keys';

class BaseDatamapper {

  /* properties */
  
  tableName;
  client;

  /**
 * constructor
 * @summary Pass the connection to instantiate an object of class BaseDatamapper to map data to the database given by client and the table given tableName
 * @param client the connection from knex to a postgresql db
 */
  constructor(client) {
    this.client = client;
  }

  /* Methods */


  /**
   * count
   * @summary Count the number of items existing in a table
   * @returns the number of items in the table
   */
  async count() {
    const { count } = await this.client.from(this.tableName)
      .first()
      .count('* as count');
    return count;
  }

  /**
   * findByKey
   * @summary Get one and only one entry in a table based on a key-value pair
   * @param key given key
   * @param value given value
   * @returns the row of the table converted back in camelCase
   */
  async findByKey(key, value) {

    const snake_key = changeKeys.snakeCase(key);
    const row = await this.client.from(this.tableName)
      .where({ [snake_key]: value })
      .first();

    const CamelCasedRow = changeKeys.camelCase(row);

    return await CamelCasedRow;

  }

  /**
   * findAll
   * most generic find function to get a group of rows satisfying different statement given in params 
   * @param params an object of statement that might include WHERE / OR WHERE / AND WHERE / LIMIT / OFFSET / ORDER
   * @returns the rows converted back in camelCase
   */
  async findAll(params) {

    const where = changeKeys.snakeCase(params?.where);
    const orWhere = changeKeys.snakeCase(params?.orWhere);
    const andWhere = changeKeys.snakeCase(params?.andWhere);

    const query = this.client.select().from(this.tableName);

    if (where) query.where(where);
    if (orWhere) query.orWhere(orWhere);
    if (andWhere) query.andWhere(andWhere);

    if (params?.limit) query.limit(params.limit);
    if (params?.offset) query.offset(params.offset);
    if (params?.order) query.orderBy(
      params.order.column,
      params.order.direction,
    );

    const rows = await query;

    // const camelCasedRow = rows.map((row) => changeKeys.camelCase(row));
    // return await camelCasedRow;
    return rows;
  }

}

export default BaseDatamapper;