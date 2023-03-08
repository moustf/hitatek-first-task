import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Student', (table) => {
    table.increments('id')

    table.string('firstName').unique()
    table.string('surname').unique()
    table.string('midterm')
    table.string('final')
  })
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('Student')
}

