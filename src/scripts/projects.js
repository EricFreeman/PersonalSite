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
		},
		{
			name : 'UDK Scaleform Arcade',
			link : 'https://www.youtube.com/watch?v=0jpqIwHlR3o',
			date : 'January 2012 - February 2012',
			description : "The UDK Scaleform Arcade project's motivation was to see how practical it would be to create <strong>Flash</strong> games and then utilize <strong>Scaleform</strong> to place them into the world as fully interactive content. We succeeded."
		},
		{
			name : 'Ball Descent',
			date : 'April 2011 - June 2011',
			description : 'Ball Descent is a top down platforming/puzzle game developed with the <strong>Unreal Development Kit</strong>. The puzzles are inventive and fairly challenging and offer some fun variation. We made use of level streaming, custom particle effects, custom 3d models and <strong>Scaleform</strong>.'
		},
		{
			name : 'Infinecraft',
			link : 'https://www.youtube.com/watch?v=5DKm846xjVs',
			date : 'January 2010 - April 2010',
			description : 'Infinecraft is a 3D voxel terrain platforming game written in the <strong>XNA</strong> framework for <strong>C#</strong>. It features procedurally generated environments rendered in full 3D.'
		}
	];
}