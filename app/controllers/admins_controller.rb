class AdminsController < ApplicationController
    before_action :find_admin, only: [:show, :update, :destroy]
    def login #for /login
        #find by username from body
        @admin = Admin.find_by(name: params[:name])
        #check if user exists and password matches password digest
        if (@admin && @admin.authenticate(params[:password]))
            #create token for front end
            token = JWT.encode({user_id: @admin.id}, secret_key, 'HS256')
            #pass user instance and token to front end
            render json: {user: @admin, token: token}
        end 
    end

    def me
        render json: {user: @current_user}, status: :ok
    end

    def create
        admin = Admin.create!(admin_params)
        render json: admin
    end

    def show
        render json: @admin
    end

    def update 
        @admin.update!(admin_params)
    end

    def destroy
        @admin.destroy!
        head :no_content
    end

    private
    
    def find_admin
        @admin = Admin.find!(params[:id])
    end

    def admin_params
        params.permit(:name, :password)
    end

end
