exports.up = function(knex) {
    return knex.schema.createTable('students', table => {
        table.increments('id') // this represents the primary key.
        table.string('name').notNullable() // this is a column.
    }) 
};
exports.down = function(knex,promise) {
};

