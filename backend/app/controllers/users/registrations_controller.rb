# frozen_string_literal: true

module Users
  class RegistrationsController < DeviseTokenAuth::RegistrationsController
    respond_to :json

    private

    def sign_up_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
  end
end
