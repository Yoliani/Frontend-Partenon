# frozen_string_literal: true

require 'singleton'

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
end
