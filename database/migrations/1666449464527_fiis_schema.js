'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FiisSchema extends Schema {
  up () {
    this.create('fiis', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table.string('code', 6).notNullable().unique()
      table.string('sector', 20).notNullable().unique()
      table.string('price', 10).notNullable()
      table.string('netWorth', 20).notNullable()
      table.string('yield', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fiis')
  }
}

module.exports = FiisSchema