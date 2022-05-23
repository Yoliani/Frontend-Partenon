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

ActiveRecord::Schema[7.0].define(version: 2022_05_23_040829) do
  create_table "archivos", force: :cascade do |t|
    t.string "url"
    t.string "tipo_archivo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "articulos_id"
    t.index ["articulos_id"], name: "index_archivos_on_articulos_id"
  end

  create_table "articulos", force: :cascade do |t|
    t.string "titulo"
    t.string "resumen"
    t.text "cuerpo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "temas_id"
    t.index ["temas_id"], name: "index_articulos_on_temas_id"
  end

  create_table "temas", force: :cascade do |t|
    t.string "nombre"
    t.string "descripcion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "nickname", default: "", null: false
    t.string "nombres"
    t.string "apellidos"
    t.integer "edad"
    t.text "biografia"
    t.integer "tipo_usuario"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "archivos", "articulos", column: "articulos_id"
  add_foreign_key "articulos", "temas", column: "temas_id"
end
