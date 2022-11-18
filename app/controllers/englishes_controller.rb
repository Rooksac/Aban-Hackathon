class EnglishesController < ApplicationController
    before_action :find_english, only(:show, :delete, :update)
    def index
        english = English.all
        render json: english
    end
    def show
        render json: @english
    end
    def update
        @english.update!(english_params)
    end
    def destroy
        @english.destroy!
        head :no_content
    end
    def create
        english = English.create(english_params)
        render json: english
    end
    private
    def find_english
        @english = English.find(params[:id])
    end
    def english_params
        params.permit(:name, :age, :date, :cause, :location, :small_image, :large_image)
    end
end
