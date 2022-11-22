class MediaController < ApplicationController
    before_action :find_media, only: [:show, :update, :destroy]
    def index
        allmedia =Medium.all
        render json: allmedia
    end
    def show
        render json: @media
    end
    def update
        @media.update!(media_params)
    end
    def destroy
        @media.destroy!
        head :no_content
    end
    def create
        newmedia = Medium.create(media_params)
        render json: newmedia
    end

    private
    def find_media
        @media = Medium.find(params[:id])
    end
    def media_params
        params.permit(:media)
    end
end
