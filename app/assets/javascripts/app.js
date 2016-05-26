var muscleMemoryApp = angular.module("Muscle-Memory", []);
// Angular Controller for Workouts
muscleMemoryApp.controller("MuscleMemoryController", ['$scope', '$http', function($scope, $http) {

  // Variables
  $scope.newWorkout = {
    name: '',
    workout: '',
    author: '',
    reps: '',
    sets: '',
    weight: ''
  };

  $scope.editing = false;

  $scope.getRandomWorkout = function() {
    return $scope.allWorkouts[Math.floor(Math.random() * $scope.allWorkouts.length)];
  };

  $scope.getAllWorkouts = function() {
    $http.get('/api/workouts/').then(function(response) {
      $scope.allWorkouts = response.data.workouts;
      $scope.randomWorkout = $scope.getRandomWorkout();
    });
  };

  $scope.saveNewWorkout = function() {
    if ($scope.newWorkout.name && $scope.newWorkout.workout) {
      var dbWorkout = {
        workout: {
          name: $scope.newWorkout.name,
          workout: $scope.newWorkout.workout,
          author: $scope.newWorkout.author,
          reps: parseInt($scope.newWorkout.reps),
          sets: parseInt($scope.newWorkout.sets),
          weight: parseInt($scope.newWorkout.weight)
        }
      };
      $http.post('/api/workouts/', dbWorkout).then(function(response) {
        $scope.allWorkouts.push(response.data.workout);
        console.log(response);
        // Clear ng-model/form
        $scope.newWorkout = {
          name: '',
          workout: '',
          author: '',
          reps: '',
          sets: '',
          weight: ''
        };
      });
    }
  };

  $scope.updateWorkout = function(newWorkout) {
    console.log("Trying to edit");
    var dbWorkout = {
      workout: newWorkout
    };
    $http.put('/api/workouts/' + newWorkout.id, dbWorkout).then(function(response) {
      console.log("Successful edit");
    });
  }

  $scope.deleteWorkout = function(workoutId) {
    $http.delete('/api/workouts/' + workoutId).then(function(response) {
      // Filter deleted workouts from allWorkouts without hitting the database again
      $scope.allWorkouts = $scope.allWorkouts.filter(function(f) {
              return f.id != workoutId;
      });
    });
  };
  // Grab all workouts on load
  $scope.getAllWorkouts();
}]);
