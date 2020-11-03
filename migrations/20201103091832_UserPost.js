
exports.up = function(knex) {
    return knex.schema.createTable("userpost", (table) => {
        table.increments().index();
        table.float("lat");
        table.float("lng");
        table.text("name").notNullable();
        table.text("email").notNullable();
        table.binary('photo');
      });
};

exports.down = function(knex) {
  
};
