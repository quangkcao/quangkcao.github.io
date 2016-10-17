'use strict';

define([
	'angular',
	// 'filters',
	'services',
	'directives',
	'controllers',
	'angularRoute',
	'angularSanitize',
	'angularTouch',
	'angularCookies',
	//], function (angular, filters, services, directives, controllers) {
	], function (angular, services, controllers) {

		// Declare app level module which depends on filters, and services
		
		return angular.module('about', [
			'ngRoute',
			'ngSanitize',
			'ngTouch',
			'ngCookies',
			
			'about.services',
			'about.directives',
			'about.controllers'
		]);
});