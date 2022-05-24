# frozen_string_literal: true

require 'test_helper'

class TemasControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get temas_index_url
    assert_response :success
  end

  test 'should get show' do
    get temas_show_url
    assert_response :success
  end

  test 'should get create' do
    get temas_create_url
    assert_response :success
  end

  test 'should get delete' do
    get temas_delete_url
    assert_response :success
  end

  test 'should get update' do
    get temas_update_url
    assert_response :success
  end
end
