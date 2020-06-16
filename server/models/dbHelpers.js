//Write knex queries
const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    add,
    find,
    findById,
    remove,
    update
};
//INSERT
async function add(product) {
    const [id] = await db('products').insert(product);
}

//SELECT
function find() {
    return db('products')
}
//SELECT BY ID
function findById(id) {

    return db('products')
        .where({ id })
        .first();
}
//DELETE
function remove(id) {
    return db('products')
        .where({ id })
        .del();
}
//UPDATE
function update(id, changes) {
    return (
        db('products')
            .where({ id })
            .update(changes)
            .then(() => {
                return findById(id)
            }
            )
    )
}