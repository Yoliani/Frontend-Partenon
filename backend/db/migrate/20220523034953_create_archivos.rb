# frozen_string_literal: true

class CreateArchivos < ActiveRecord::Migration[7.0]
  def change
    create_table :archivos do |t|
      t.string :url
      t.string :tipo_archivo
      t.timestamps
    end
    add_reference :archivos, :articulos, foreign_key: true
  end
end
