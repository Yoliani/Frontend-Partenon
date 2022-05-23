# frozen_string_literal: true

# == Schema Information
#
# Table name: archivos
#
#  id           :integer          not null, primary key
#  url          :string
#  tipo_archivo :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  articulos_id :integer
#
require 'test_helper'

class ArchivoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
