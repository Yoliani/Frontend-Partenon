# frozen_string_literal: true

class CreateTemas < ActiveRecord::Migration[7.0]
  def change
    create_table :temas do |t|
      t.string :nombre
      t.string :descripcion
      t.timestamps
    end
  end
end
