# frozen_string_literal: true

require 'test_helper'

class ArticulosControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get articulos_index_url
    assert_response :success
  end

  test 'should get show' do
    get articulos_show_url
    assert_response :success
  end

  test 'should get create' do
    get articulos_create_url
    assert_response :success
  end

  test 'should get delete' do
    get articulos_delete_url
    assert_response :success
  end

  test 'should get update' do
    get articulos_update_url
    assert_response :success
  end
end
