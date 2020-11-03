
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('UserPost').del()
    .then(function () {
      // Inserts seed entries
      return knex('UserPost').insert([
        {lat: 'rowValue1' , lng: 1, name: "Miya", email: "miya9173@gmail.com" },
      ]);
    });
};

