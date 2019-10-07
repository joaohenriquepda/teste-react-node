'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.text('body');
      table.string("title");
      table.string('image_url');
      table.increments();
      table.timestamps();
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema