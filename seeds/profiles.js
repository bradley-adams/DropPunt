
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 1, pic_url: 'https://cdn2.iconfinder.com/data/icons/kid-superheroes-cartoons/50/19-512.png'},
        {id: 2, user_id: 2, pic_url: 'https://p7.hiclipart.com/preview/922/308/929/diana-prince-superhero-cartoon-flash-superheroes.jpg'},
        {id: 3, user_id: 3, pic_url: 'https://www.pinclipart.com/picdir/middle/69-697950_minus-superhero-clipart-superfamily-character-cartoon-clipart-superheroes.png'}
      ]);
    });
};
