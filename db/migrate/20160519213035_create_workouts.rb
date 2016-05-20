class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :author
      t.string :workout
      t.integer :reps
      t.integer :sets
      t.float :weight

      t.timestamps null: false
    end
  end
end
