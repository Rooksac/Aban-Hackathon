class FarsisController < ApplicationController
    before_action :find_farsi, only: [:show, :update, :destroy]
    def index
        farsi = Farsi.all
        render json: farsi
    end
    def show
        render json: @farsi
    end
    def update
        @farsi.update!(farsi_params)
    end
    def destroy
        @farsi.destroy!
        head :no_content
    end
    def create
        farsi = Farsi.create(farsi_params)
        render json: farsi
    end
    def preview
        farsi = Farsi.limit(6)
        render json: farsi
    end
    private
    def find_farsi
        @farsi = Farsi.find(params[:id])
    end
    def farsi_params
        params.permit(:name, :age, :date, :cause, :location, :small_image, :large_image)
    end
end
