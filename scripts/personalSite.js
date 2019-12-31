var personalSite = angular.module('personalSite', ['ngRoute', 'youtube-embed']);

personalSite.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'home.html'
			})
			.when('/projects', {
				templateUrl: 'projects.html',
				controller: 'Projects'
			})
			.when('/privacy-policy', {
				templateUrl: 'privacy-policy.html'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}
]);