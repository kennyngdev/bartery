
exports.seed = function(knex) {
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Peter'},
        {name: 'John'},
        {name: 'Mary'}
      ]);
    });
};
