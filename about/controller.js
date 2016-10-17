define([], function() {
	return ['$scope', 'settings', 'utils', 'settings', '$window', '$location', '$cookies', '$http', '$timeout', function($scope, settings, utils, settings, $window, $location, $cookies, $http, $timeout) {
		$scope.settings = settings
		$scope.utils = utils
		// $http.get('data/about.json').success(function(data) {
    //   $scope.expertises = data.expertises;
    // });

		$scope.expertises=[
			{
				'id': 'Front-end',
				'label': '<i class="fa fa-cubes"></i><br/>Front-end',
				'value': '<ul class="text-left vertical type-none space-none">\
										<li><i class="fa fa-html5"></i> HTML5, Marketing Email, Django Template</li>\
										<li><b class="size-large">js</b> Plain javascript, jQuery, custom jQuery plugins, Zepto</li>\
										<li><i class="fa fa-css3"></i> CSS, Sprite, Vector icons</li>\
										<li><i class="fa fa-gear"></i> Bower, Less, Angularjs, Django-pipeline</li>\
										<li><i class="fa fa-line-chart"></i> Search Engine Optimization (SEO)</li><li><i class="fa fa-rocket"></i> Web Performance Optimization (WPO)</li>\
									</ul>'
			},
			{
				'id': 'Back-end',
				'label': '<i class="fa fa-server"></i><br/>Back-end',
				'value': '<ul class="text-left vertical type-none space-none">\
										<li><b>Python</b><br/>Django framework</li>\
										<li class="pad-more-top"><b>Have worked with PHP</b><br/>Yii, <i class="fa fa-joomla"></i> Joomla,  <i class="fa fa-wordpress"></i> Wordpress</li>\
									</ul>'
			},
			{
				'id': 'APIs Integration',
				'label': ' <i class="fa fa-plug"></i><br/>APIs Integration',
				'value': '<ul class="text-left vertical type-none space-none">\
										<li><i class="fa fa-facebook"></i> Facebook API</li>\
										<li><i class="fa fa-google"></i> Google API</li>\
										<li><i class="fa fa-support"></i> Zendesk API</li>\
										<li><i class="fa fa-envelope-o"></i> Mailgun API</li>\
									</ul>'
			},
			{
				'id': 'Tools',
				'label': '<i class="fa fa-code-fork"></i><br/>Tools',
				'value': '<ul class="text-left vertical type-none space-none">\
										<li><b><i class="fa fa-code-fork"></i> Version Control System</b><br/>Git, Subversion</li>\
										<li><b><i class="fa fa-photo"></i> Graphic Editor</b><br/>Photoshop, Firework</li>\
										<li><b><i class="fa fa-terminal"></i> IDE</b><br/>Vi/Vim, Pycharm,  Eclipse, NetBeans, Atom</li>\
									</ul>'
			},
			{
				'id': 'UX',
				'label': '<i class="fa fa-smile-o"></i><br/>User Experience',
				'value': '<p>Web users have their own taste of UX. Although the web has been there for a long time, it needs to be careful when defining UX for web. The goal is to meet exact the need of customer.</p>'
			},
			{
				'id': 'UI',
				'label': '<i class="fa fa-sun-o"></i><br/>User Interface',
				'value': '<ul class="text-left vertical type-none space-none">\
										<li><b><i class="fa fa-globe"></i> Designs</b><br/>Responsive vs Adaptive/Optimized</li>\
										<li><b><i class="fa fa-desktop"></i> <i class="fa fa-laptop"></i> <i class="fa fa-tablet"></i> <i class="fa fa-mobile"></i> Platforms</b><br/> Desktop Web vs Mobile Web.</li>\
										<li><b><i class="fa fa-cube"></i> Capabilities</b><br/>Cross-browsers vs Cross-platforms.</li>\
									</ul>'
			}
		];
		$scope.$apply();

		var elementBoxes = document.getElementsByClassName("element-box");
		var detailSection = angular.element(document.getElementById("detail-more-section"));
		var nodeContainer = angular.element(document.getElementById("node-container"));
		var backBtnDetailSection = angular.element(document.getElementById("detail-more-section").getElementsByClassName('back-btn')[0]);
		var profileSection = angular.element(document.getElementById("profile-section"));
		var moreBtnProfileSection = angular.element(document.getElementById("profile-section").getElementsByClassName('more-btn')[0]);
		var backBtnNodeContainer = angular.element(document.getElementById("node-container").getElementsByClassName('back-btn')[0]);

		var portraitMobileWidth = 480;
		// if ($window.innerWidth < portraitMobileWidth){
		moreBtnProfileSection.bind('click', function(e){
			e.preventDefault();
			profileSection.css({'display': 'none'});
			nodeContainer.css({ 'display': 'block'});
		})
		backBtnNodeContainer.bind('click', function(e){
			e.preventDefault();
			profileSection.css({'display': 'block'});
			nodeContainer.css({ 'display': 'none'});
		})
		// }
		angular.forEach(elementBoxes, function(value, key){
			var box = angular.element(value);
			box.bind('click', function(e){
				e.preventDefault();
				$scope.detailBox= $scope.expertises[key].value;
				$scope.$apply();
				detailSection.css({'display': 'block'});
				nodeContainer.css({ 'display': 'none'});

				//log event
				ga('send', 'event', 'Expertise', 'Click', 'View ' + this.getAttribute('name'))
			})
		})
		backBtnDetailSection.bind('click', function(e){
			e.preventDefault();
			detailSection.css({'display': 'none'});
			nodeContainer.css({ 'display': 'block'});
		})

		//log event to social buttons
		var socialLinks = document.getElementsByClassName("event-social");
		angular.forEach(socialLinks, function(value, key){
			var node = angular.element(value);
			node.bind('click', function(e){
				ga('send', 'event', 'Social Contact', 'Click', 'View ' + this.getAttribute('name'))
			})
		})
	}]
})
