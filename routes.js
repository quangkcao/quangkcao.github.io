'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');
		// var mobileMaxWidth= '479';
		// console.log($rootScope.windowWidth);
		$routeProvider
			.when("/",{
				templateUrl: "about/index.html",
				controller: "AboutController",
				controllerAs: "AboutCtrl"
			})
			.when("/blog/:date/:title?",{
				templateUrl: function(params){
					var page = "blog/index.html";
					if (params.date && params.title){
						page = "blog/article/"+params.date+'-'+params.title+'.html';
					}
					return page;
				},
				controller: "BlogController",
				controllerAs: "BlogCtrl"
			})
			.when("/pebble/watchface/soso/",{
				templateUrl: "pebble/watchface/soso/index.html",
				controller: "PebbleWatchFaceController",
				controllerAs: "PebbleWatchFaceCtrl"
			})
		$routeProvider.otherwise({redirectTo: '/'});
	}]);

});
