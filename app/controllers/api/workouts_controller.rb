class Api::WorkoutsController < ApplicationController

  # api_workouts  GET    /api/workouts(.:format)          api/workouts#index
  def index
    render json: { workouts: Workout.all }
  end

  # api_workouts  POST   /api/workouts(.:format)          api/workouts#create
  def create
    new_workout = Workout.create workout_params
    render json: { workout: new_workout }
  end

  # new_api_workout GET    /api/workouts/new(.:format)      api/workouts#new
  def new

  end

  # edit_api_workout GET    /api/workouts/:id/edit(.:format) api/workouts#edit
  def edit
  end

  # api_workout GET    /api/workouts/:id(.:format)      api/workouts#show
  def show
    render json: { workout: Workout.find(params[:id]) }
  end

#                  PATCH  /api/workouts/:id(.:format)      api/workouts#update
#                  PUT    /api/workouts/:id(.:format)      api/workouts#update
  def update
    this_workout = Workout.find params[:id]
    this_workout.update workout_params
    render json: { workout: this_workout }
  end

#                  DELETE /api/workouts/:id(.:format)      api/workouts#destroy
  def delete
    this_workout = Workout.find params[:id]
    this_workout.destroy
    render json: { success: "Deleted successfully" }
  end


  private

  def workout_params
    params.require(:workout).permit(:name, :author, :workout, :reps, :sets, :weight)
  end
end
