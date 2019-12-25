
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Harrison'},
        {id: 2, name: 'Engie'},
        {id: 3, name: 'Ming'}
      ]);
    });
};
