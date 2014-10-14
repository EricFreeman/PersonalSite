function Projects($scope, $sce) {
	$scope.trust = function(code) {
		return $sce.trustAsHtml(code);
	};

	$scope.projects = [
		{
			name : 'Doodle Jump Clone',
			date : 'September 2014 - October 2014',
			description : 'Developed for Windows Phone using <strong>Unity3D</strong> and <strong>C#</strong> for scripting.',
			github : 'https://github.com/EricFreeman/DoodleJump'
		},
		{
			name : 'Giant Shaft Enterprises',
			link : 'http://giantshaft.com/game',
			date : 'May 2014 - August 2014',
			description : 'Developed an incremental game using the <strong>AngularJS JavaScript</strong> framework.  Start a business, earn money, and take over the galaxy!  The game has been played in 95 different countries over 34,000 times using only word-of-mouth advertising.',
			screenshots : [ 'gse 1.png', 'gse 2.png', 'gse 3.png', 'gse 4.png' ]
		},
		{
			name : 'Autoclicker',
			date : 'June 2014',
			description : 'Custom autoclicker created using <strong>C#</strong> and <strong>WPF</strong>.',
			github : 'https://github.com/EricFreeman/Autoclicker',
			screenshots : [ 'autoclicker 1.png' ]
		},
		{
			name : 'Peggle Clone',
			date : 'June 2014',
			description : 'Developed for Windows Phone using <strong>Unity3D</strong> and <strong>C#</strong>.',
			github : 'https://github.com/EricFreeman/Peggle'
		},
		{
			name : "Top Down SHMUP (Shoot 'em Up)",
			date : 'April 2014 - June 2014',
			description : "Top down shmup in the style of 1945 or Raptor: Call of the Shadow.  Was used to learn <strong>Unity3D</strong>'s 2D Framework.  Used <strong>C#</strong> for scripting.",
			github : 'https://github.com/EricFreeman/Unity2D-Test'
		},
		{
			name : 'Shmup Level Editor',
			date : 'June 2014',
			description : 'Simple wave editor for my <strong>Top Down SHMUP</strong> project.  Created using <strong>C#</strong> and <strong>WPF</strong>.',
			github : 'https://github.com/EricFreeman/ShmupLevelEditor'
		},
		{
			name : 'Lawnmower Simulator 2014',
			date : 'March 2014 - June 2014',
			description : 'Beginnings of a top down inspired by Hotline Miami.  Engine could load custom levels created in my <strong>Landscaper</strong> project.  Demo was created using <strong>Unity3D</strong> and <strong>C#</strong> for scripting.',
			github : 'https://github.com/EricFreeman/Lawnmower-Simulator-2014'
		},
		{
			name : 'Landscaper',
			date : 'March 2014 - April 2014',
			description : 'Level editor for my project <strong>Lawnmower Simulator 2014</strong>.  Allowed for placement of different tiles, walls, and items and saving the scene to XML.  Created using <strong>C#</strong> and <strong>WPF</strong>.',
			github : 'https://github.com/EricFreeman/Landscaper',
			screenshots : [ 'landscaper 1.png' ]
		},
		{
			name : 'Crappy Bird',
			link : 'http://www.windowsphone.com/en-us/store/app/crappy-bird/51645d18-ed9a-4bc1-9b83-3392daeeb42f',
			date : 'March 2014',
			description : 'Flappy Bird clone using the <strong>Unity3D</strong> game engine and <strong>C#</strong> for scripting.  Currently at 4.5/5 stars in the Windows Phone Store.',
			github : 'https://github.com/EricFreeman/CrappyBird'
		},
		{
			name : 'UDK Scaleform Arcade',
			link : 'https://www.youtube.com/watch?v=0jpqIwHlR3o',
			date : 'January 2012 - February 2012',
			description : "The project's motivation was to see how practical it would be to create <strong>Flash</strong> games and then utilize <strong>Scaleform</strong> to place them into the world as fully interactive content using <strong>Unreal Development Kit</strong>."
		},
		{
			name : 'Ball Descent',
			date : 'April 2011 - June 2011',
			description : 'Top down platforming/puzzle game developed with the <strong>Unreal Development Kit</strong>. The puzzles are inventive and fairly challenging and offer some fun variation. We made use of level streaming, custom particle effects, custom 3D models and <strong>Scaleform</strong>.',
			screenshots : [ 'ball descent 1.png', 'ball descent 2.png', 'ball descent 3.png' ]
		},
		{
			name : 'Infinecraft',
			link : 'https://www.youtube.com/watch?v=5DKm846xjVs',
			date : 'January 2010 - April 2010',
			description : 'A 3D voxel terrain platforming game written in the <strong>XNA</strong> framework for <strong>C#</strong>. It features procedurally generated environments rendered in full 3D.'
		},
		{
			name : 'Emo Game 2',
			date : 'August 2006',
			description : 'A 3D adventure game I made when I was 15.  Explore your house as an "emo" kid and perform different tasks commonly associated with someone from their clique like listening to emo music or writing emo poetry.  The game was programmed using <strong>Blitz3D</strong>',
			github : 'https://github.com/EricFreeman/Emo-Game-2'
		},
		{
			name : 'Mr. Stick Figure',
			link : 'http://my.dmci.net/~jsfreeman/clownhunter/Stick.zip',
			date : 'Circa August 2004 (Exact Date Unknown)',
			description : 'Two player fighting game in an office building.  I consider this my second video game I ever programmed.',
			screenshots : [ 'mr stick figure 1.jpg' ]
		},
		{
			name : 'Clown Hunter',
			link : 'http://my.dmci.net/~jsfreeman/clownhunter/ClownHunter.rar',
			date : 'Circa July 2004 (Exact Date Unknown)',
			description : 'Shoot clowns as they move back and forth across the screen.  This is the first game I programmed by myself.',
			screenshots :  [ 'clownhunter 1.jpg', 'clownhunter 2.jpg' ]
		}
	];
}