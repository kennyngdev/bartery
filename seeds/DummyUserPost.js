
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userpost').del()
    .then(function () {
      // Inserts seed entries
      return knex('userpost').insert([
        {lat: 35.65535, lng: 139.736869, name: "Miya", email: "miya9173@gmail.com" },
      ]);
    });
};

