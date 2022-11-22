class SupportforProtestorsController < ApplicationController
    before_action :find_support, only: [:show, :update, :destroy]
    def index
        support = SupportforProtestor.all
        render json: support
    end
    def show
        render json: @support
    end
    def update
        @support.update!(support_params)
    end
    def destroy
        @support.destroy!
        head :no_content
    end
    def create
        newsupport = SupportforProtestor.create(support_params)
        render json: newsupport
    end

    private
    def find_support
        @support = SupportforProtestor.find(params[:id])
    end
    def support_params
        params.permit(:support)
    end
end
