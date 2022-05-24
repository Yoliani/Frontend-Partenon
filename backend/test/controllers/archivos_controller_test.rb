# frozen_string_literal: true

require 'test_helper'

class ArchivosControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get archivos_index_url
    assert_response :success
  end

  test 'should get show' do
    get archivos_show_url
    assert_response :success
  end

  test 'should get create' do
    get archivos_create_url
    assert_response :success
  end

  test 'should get delete' do
    get archivos_delete_url
    assert_response :success
  end

  test 'should get update' do
    get archivos_update_url
    assert_response :success
  end
end
