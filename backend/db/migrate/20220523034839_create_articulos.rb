# frozen_string_literal: true

class CreateArticulos < ActiveRecord::Migration[7.0]
  def change
    create_table :articulos do |t|
      t.string :titulo
      t.string :resumen
      t.text :cuerpo

      t.timestamps
    end
    add_reference :articulos, :temas, foreign_key: true
  end
end
