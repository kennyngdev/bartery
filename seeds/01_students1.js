
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Peter'},
        {name: 'John'},
        {name: 'Mary'}
      ]);
    });
};
