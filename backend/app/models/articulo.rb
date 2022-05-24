# frozen_string_literal: true

# == Schema Information
#
# Table name: articulos
#
#  id         :integer          not null, primary key
#  titulo     :string
#  resumen    :string
#  cuerpo     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  temas_id   :integer
#
class Articulo < ApplicationRecord
  has_one :tema
end
