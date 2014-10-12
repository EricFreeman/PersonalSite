var personalSite = angular.module('personalSite', ['ngRoute']);

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
			when('/about', {
				templateUrl: 'about.html'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}
]);