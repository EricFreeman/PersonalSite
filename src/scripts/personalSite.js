var personalSite = angular.module('personalSite', ['ngRoute', 'youtube-embed']);

personalSite.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'home.html'
			}).
			when('/projects', {
				templateUrl: 'projects.html',
				controller: 'Projects'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}
]);