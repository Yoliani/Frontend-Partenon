# frozen_string_literal: true

# == Schema Information
#
# Table name: temas
#
#  id          :integer          not null, primary key
#  nombre      :string
#  descripcion :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Tema < ApplicationRecord
end
