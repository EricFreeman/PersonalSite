function Projects($scope, $sce) {
	$scope.trust = function(code) {
		return $sce.trustAsHtml(code);
	};

	$scope.projects = [
		{
			name : 'Giant Shaft Enterprises',
			link : 'http://giantshaft.com/game',
			date : 'May 2014 - August 2014',
			description : 'Developed an incremental game using the <strong>AngularJS JavaScript</strong> framework.  The game has been played in 95 different countries over 28,000 times using only word-of-mouth advertising.'
		},
		{
			name : 'Crappy Bird',
			link : 'http://www.windowsphone.com/en-us/store/app/crappy-bird/51645d18-ed9a-4bc1-9b83-3392daeeb42f',
			date : 'March 2014',
			description : 'Created a Flappy Bird clone using the <strong>Unity3D</strong> game engine and <strong>C#</strong> for scripting.  Currently at 4.5/5 stars in the Windows Phone Store.'
		}
	];
}