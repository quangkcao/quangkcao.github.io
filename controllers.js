'use strict';

define(['angular', 'services'], function (angular) {

	/* Controllers */

	//return angular.module('myApp.controllers', ['myApp.services'])
	return angular.module('about.controllers', ['about.services'])
		.controller('HomepageController', ['$scope', '$injector', function($scope, $injector){
			require(['homepage/controller'], function(ctrl) {
				$injector.invoke(ctrl, this, {'$scope': $scope});
			});
		}])
		.controller('BlogController', ['$scope', '$injector', function($scope, $injector){
			require(['blog/controller'], function(ctrl) {
				$injector.invoke(ctrl, this, {'$scope': $scope});
			});
		}])
		.controller('AboutController', ['$scope', '$injector', function($scope, $injector){
			require(['about/controller'], function(ctrl) {
				$injector.invoke(ctrl, this, {'$scope': $scope});
			});
		}])
		.controller('PebbleWatchFaceController', ['$scope', '$injector', function($scope, $injector){
			require(['pebble/watchface/controller'], function(ctrl) {
				$injector.invoke(ctrl, this, {'$scope': $scope});
			});
		}])
});
