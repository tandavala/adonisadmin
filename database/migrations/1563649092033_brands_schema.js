'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BrandsSchema extends Schema {
  up () {
    this.create('brands', (table) => {
      table.increments()
      table.string('name').unique()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('brands')
  }
}

module.exports = BrandsSchema
