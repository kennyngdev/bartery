
exports.up = function(knex) {
    return knex.schema.table("userpost", (table) => {
        table.text("give").notNullable();
        table.text("want").notNullable();
      });
    };


exports.down = function(knex) {
  
};
