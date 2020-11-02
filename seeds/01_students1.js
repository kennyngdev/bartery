
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Peter'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Mary'}
      ]);
    });
};
