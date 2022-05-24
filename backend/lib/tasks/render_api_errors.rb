# frozen_string_literal: true

module RenderApiErrors
  def render_json_error(status, error_code, errors = nil, extra = {})
    status = Rack::Utils::SYMBOL_TO_STATUS_CODE[status] if status.is_a? Symbol
    error = {
      code: I18n.t("error_messages.#{error_code}.code"),
      status: status,
      title: I18n.t("error_messages.#{error_code}.title"),
      fields: []
    }.merge(extra_attrs(errors, extra))

    detail = I18n.t("error_messages.#{error_code}.detail", default: '')
    error[:detail] = detail unless detail.empty?
    render json: { errors: [error] }, status: status
  end

  def extra_attrs(errors, extra)
    return extra unless errors.present?

    {
      full_messages: errors.full_messages,
      fields: errors
    }.merge(extra)
  end
end
