angular.module('toDo',[]).
controller('todoCtrl',['$scope', function($scope){
  $scope.todos= [
    {title: "Build a todo app", done: false}
  ];
  $scope.addtodo = function(){
    $scope.todos.push({title: $scope.newTodo, done: false})
    $scope.newTodo= ''
  };

  $scope.cleaCompleted = function(){
    $scope.todos = $scope.todos.filter(function(val){
      return !val.done
    })
  };
}]);
