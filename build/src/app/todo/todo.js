angular.module( 'angularBeginnerTodo.todo', ['ui.keypress'])

.controller( 'TodoCtrl', function TodoCtrl( $scope, $log ) {
	$scope.todos = [
		{
			title: "Get the milk.",
			completed: true
		},
		{
			title: "Call mom.",
			completed: false
		},
		{
			title: "Walk the dog.",
			completed: false
		}
	];

	$scope.onItemChange = function(item) {

	};

	$scope.newTodo = function() {
		$scope.todos.push({
			title: $scope.newTodoTitle,
			completed: false
		});
		$scope.newTodoTitle = "";
	};

})

;