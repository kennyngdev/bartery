exports.up = function(knex) {
    return knex.schema.createTable('students', table => {
        table.increments() // this represents the primary key.
        table.string('name') // this is a column.
    }) 
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('students')
};

