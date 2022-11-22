class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :validation_error_response
    private
    def not_found_response(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
      end
      def validation_error_response(exception)
        render json: {error: exception.record.errors.full_messages}, status: :unprocessable_entity
      end
end
