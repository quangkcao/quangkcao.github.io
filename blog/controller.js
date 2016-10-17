define([], function() {
	return ['$scope', 'settings', 'utils', 'settings', '$window', '$location', '$cookies', '$http', '$routeParams', function($scope, settings, utils, settings, $window, $location, $cookies, $http, $routeParams) {
		$scope.settings = settings
		$scope.utils = utils
		$scope.params = $routeParams

		if (!$scope.params.date || !$scope.params.title){
			$http.get('blog/data/blog.json').success(function(data) {
					$scope.articles = data.articles;
			});
		}

		$scope.$apply();
	}]
})
