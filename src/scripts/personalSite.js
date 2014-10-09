var personalSite = angular.module('personalSite', ['ngRoute']);

personalSite.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'home.html',
				// controller: 'BusinessController'
			}).
			when('/projects', {
				templateUrl: 'projects.html',
				// controller: 'StatsController'
			}).
			when('/about', {
				templateUrl: 'about.html',
				// controller: 'SpaceController'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}
]);