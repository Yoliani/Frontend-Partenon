# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 20_220_523_034_953) do
  create_table 'archivos', force: :cascade do |t|
    t.string 'url'
    t.string 'tipo_archivo'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.integer 'articulos_id'
    t.index ['articulos_id'], name: 'index_archivos_on_articulos_id'
  end

  create_table 'articulos', force: :cascade do |t|
    t.string 'titulo'
    t.string 'resumen'
    t.text 'cuerpo'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.integer 'temas_id'
    t.index ['temas_id'], name: 'index_articulos_on_temas_id'
  end

  create_table 'temas', force: :cascade do |t|
    t.string 'nombre'
    t.string 'descripcion'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  add_foreign_key 'archivos', 'articulos', column: 'articulos_id'
  add_foreign_key 'articulos', 'temas', column: 'temas_id'
end