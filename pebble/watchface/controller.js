define([], function() {
	return ['$scope', 'settings', 'utils', 'settings', '$window', '$location', '$cookies', '$http', '$routeParams', function($scope, settings, utils, settings, $window, $location, $cookies, $http, $routeParams) {
		$scope.settings = settings
		$scope.utils = utils
		$scope.params = $routeParams
		$scope.$apply();
	}]
})
