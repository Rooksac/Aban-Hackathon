class ArtworksController < ApplicationController
    before_action :find_art, only: [:show, :update, :destroy]
    def index
        art = Artwork.all
        render json: art
    end
    def show
        render json: @artwork
    end
    def update
        @artwork.update!(artwork_params)
    end
    def destroy
        @artwork.destroy!
        head :no_content
    end
    def create
        newart = Artwork.create(artwork_params)
        render json: newart
    end

    private
    def find_art
        @artwork = Artwork.find(params[:id])
    end
    def artwork_params
        params.permit(:artwork)
    end
end
