'use strict';

require.config({
	baseUrl: '/',
	paths: {
		angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min',
		angularRoute: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.min',
		angularSanitize: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-sanitize.min',
		angularTouch: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-touch.min',
		angularCookies: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-cookies.min',
		angularMocks: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-mocks.min',
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularTouch': ['angular'],
		'angularCookies': ['angular'],
		'angularSanitize': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	priority: [
		"angular"
	]
});



//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
