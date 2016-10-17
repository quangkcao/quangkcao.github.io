'use strict';

define(['angular'], function (angular) {
	
	/* Services */

	// Demonstrate how to register services
	// In this case it is a simple value service.
	angular.module('about.services', [])
		.value('version', '0.1')
		.value('baseUrl', '0.1')
		//Settings
		.factory('settings',function(){
			return {
				APP: {
					PATH: '/',
					NAME: 'About',
					SHORT_DESC: '',
					LONG_DESC: '',
					DOMAIN: 'runbusi.com/about'
				},
				FACEBOOK:{
					API:{
						ID:'666673493349225',
						VERSION: 'v2.1'
					}

				}
			}
		})
		//Utilities
		.factory('utils', ['$location', '$window', function($location, $window){
			return{
				redirectTo: function(uri){
					uri = typeof uri !== 'undefined' ? uri : '';
					if ((uri.indexOf('http://') > -1) || (uri.indexOf('https://') > -1)){
						$window.location.href = uri
					}else{	
						$location.path(uri);
					}
				}
			}
		}])
		//Authentication interceptor 
		.factory('authInterceptor', function ($rootScope, $q, $window) {
			return {
			   'request': function(config) {
			   		config.headers = config.headers || {};
					if ($window.sessionStorage.authToken) {

						//set authToken in the header 
						config.headers['Auth-Token'] = $window.sessionStorage.authToken;
					}
		       		return config;
			    },

			    'response': function(response) {
			    	if (response.status === 401) {
				        // handle the case where the user is not authenticated
				    }
			       	return response || $q.when(response);
			    }
			  };
		})
		//adding interceptors
		.config(function ($httpProvider) {
			$httpProvider.interceptors.push('authInterceptor');
		});	
});