
exports.up = function(knex, Promise) {
    return knex.schema.createTable('profiles', table => {
      table.increments('id')
      table.string('pic_url')
      table.integer('user_id')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('profiles')
  };
