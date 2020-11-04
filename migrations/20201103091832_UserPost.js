exports.up = function (knex) {
  return knex.schema.createTable("userpost", (table) => {
    table.increments().index();
    table.float("lat");
    table.float("lng");
    table.text("name").notNullable();
    table.text("email").notNullable();
    table.text('photo');
    table.text("give").notNullable();
    table.text("want").notNullable();
  });
};

exports.down = function (knex,promise) {};