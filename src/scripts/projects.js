function Projects($scope, $sce) {
	$scope.trust = function(code) {
		return $sce.trustAsHtml(code);
	};

	$scope.projects = [
		{
			name : 'Never Run Out of Contacts',
			date : 'March 2015',
			description : 'A simple endless runner made in <strong>Unity3D</strong> for a 24 hour hackathon at work.  I used <strong>C#</strong> for scripting.',
			github : 'https://github.com/EricFreeman/1800ContactsEndlessRunner',
			screenshots : [ 'never run out 1.png', 'never run out 2.png', 'never run out 3.png', ],
			link : 'http://giantshaft.com/NeverRunOut/'
		},
		{
			name : 'Wiggle',
			date : 'March 2015',
			description : 'Make your computer think the mouse is moving even when it isn&apos;t. Wiggle will stop your computer from going to sleep unless you actually want it to.',
			github : 'https://github.com/EricFreeman/Wiggle',
			screenshots : [ 'wiggle.png' ],
			link : 'https://github.com/EricFreeman/Wiggle/releases'
		},
		{	
			name : 'Unity Physics Sidescroller',
			date : 'October 2014 - December 2014',
			description : 'A physics based platformer made with <strong>Unity3D</strong> and <strong>C#</strong>.',
			github : 'https://github.com/EricFreeman/LightGame',
			youtube : 'HzvBcuaTKjU'
		},
		{	
			name : 'The Adventures of Mr. Poopy',
			date : 'October 2014',
			description : 'Ported an old <strong>BlitzPlus</strong> game I wrote in 2005 to <strong>Unity3D</strong> and published it for Windows Phone.',
			github : 'https://github.com/EricFreeman/MrPoopy',
			link : 'http://www.windowsphone.com/en-us/store/app/mr-poopy/263e861c-f9eb-45f2-b768-7a869508e481',
			screenshots : [ 'poopy 1.png', 'poopy 2.png', 'poopy 3.png', 'poopy 4.png' ]
		},
		{
			name : 'Doodle Jump Clone',
			date : 'September 2014 - October 2014',
			description : 'My clone of the popular game Doodle Jump, developed for Windows Phone to demonstrate my abilities with <strong>Unity3D</strong>, using <strong>C#</strong> for scripting.',
			github : 'https://github.com/EricFreeman/DoodleJump',
			screenshots : [ 'doodle jump 1.png', 'doodle jump 2.png' ]
		},
		{
			name : 'Giant Shaft Enterprises',
			link : 'http://giantshaft.com/game',
			date : 'May 2014 - August 2014',
			description : 'Developed an incremental game using the <strong>AngularJS JavaScript</strong> framework.  Start a business, earn money, and take over the galaxy!  The game has been played in 95 different countries over 34,000 times using only word-of-mouth advertising.',
			screenshots : [ 'gse 1.png', 'gse 2.png', 'gse 3.png', 'gse 4.png' ],
			github : 'https://github.com/EricFreeman/AngularIdleGame'
		},
		{
			name : 'Autoclicker',
			date : 'June 2014',
			description : 'Custom autoclicker application built using <strong>C#</strong> and <strong>Windows Presentation Foundation (WPF)</strong>.  Created to automate simulated mouse clicks, used for various gaming and testing applications.',
			github : 'https://github.com/EricFreeman/Autoclicker',
			screenshots : [ 'autoclicker 1.png' ]
		},
		{
			name : 'Peggle Clone',
			date : 'June 2014',
			description : 'My clone of the popular game Peggle, developed for Windows Phone using <strong>Unity3D</strong> and <strong>C#</strong>.',
			github : 'https://github.com/EricFreeman/Peggle',
			screenshots : [ 'peggle 1.png', 'peggle 2.png' ]
		},
		{
			name : "Top Down SHMUP (Shoot 'em Up)",
			date : 'April 2014 - June 2014',
			description : "My original top down shoot em up game, in the style of 1945 or Raptor: Call of the Shadows.  Created as a test of <strong>Unity3D</strong>'s then new 2D Framework.  Used <strong>C#</strong> for scripting.",
			github : 'https://github.com/EricFreeman/Unity2D-Test',
			screenshots : [ 'shmup 1.png', 'shmup 2.png', 'shmup 3.png' ]
		},
		{
			name : 'Shmup Level Editor',
			date : 'June 2014',
			description : 'Simple wave editor to control the number and progress of on-screen enemies for my <strong>Top Down SHMUP</strong> project.  Created using <strong>C#</strong> and <strong>WPF</strong>.',
			github : 'https://github.com/EricFreeman/ShmupLevelEditor',
			screenshots : [ 'shmup editor 1.png' ]
		},
		{
			name : 'Lawnmower Simulator 2014',
			date : 'March 2014 - June 2014',
			description : 'Beginnings of a top down shooter inspired by Hotline Miami.  I wrote this engine to load custom levels created in my <strong>Landscaper</strong> project.  Demo was created using <strong>Unity3D</strong>, and <strong>C#</strong> for scripting.',
			github : 'https://github.com/EricFreeman/Lawnmower-Simulator-2014',
			screenshots : [ 'lawn mower 1.png' ]
		},
		{
			name : 'Landscaper',
			date : 'March 2014 - April 2014',
			description : 'Level editor for my project <strong>Lawnmower Simulator 2014</strong>.  Allowed for placement of different tiles, walls, and items, and saving the scene to <strong>XML</strong>.  Created using <strong>C#</strong> and <strong>WPF</strong>.',
			github : 'https://github.com/EricFreeman/Landscaper',
			screenshots : [ 'landscaper 1.png' ]
		},
		{
			name : 'Crappy Bird',
			link : 'http://www.windowsphone.com/en-us/store/app/crappy-bird/51645d18-ed9a-4bc1-9b83-3392daeeb42f',
			date : 'March 2014',
			description : 'My improved version of the popular Flappy Bird game, developed using the <strong>Unity3D</strong> game engine and <strong>C#</strong> for scripting.  Currently at 4.5/5 stars in the Windows Phone Store.',
			github : 'https://github.com/EricFreeman/CrappyBird',
			screenshots : [ 'crappy bird 1.png' ]
		},
		{
			name : 'UDK Scaleform Arcade',
			link : 'https://www.youtube.com/watch?v=0jpqIwHlR3o',
			date : 'January 2012 - February 2012',
			description : "The project's motivation was to see how practical it would be to create <strong>Flash</strong> games and then utilize <strong>Scaleform</strong> to place them into the world as fully interactive content no longer dependent on Flash infrastructure to run.  Built using <strong>Unreal Development Kit</strong>.",
			youtube : '0jpqIwHlR3o'
		},
		{
			name : 'Ball Descent',
			date : 'April 2011 - June 2011',
			description : 'Top down platforming/puzzle game developed with the <strong>Unreal Development Kit</strong>. The puzzles are inventive and fairly challenging and offer some fun variation. Made use of level streaming, custom particle effects, custom 3D models and <strong>Scaleform</strong>.',
			screenshots : [ 'ball descent 1.png', 'ball descent 2.png', 'ball descent 3.png' ]
		},
		{
			name : 'Infinecraft',
			link : 'https://www.youtube.com/watch?v=5DKm846xjVs',
			date : 'January 2010 - April 2010',
			description : 'A 3D platforming game written in the <strong>XNA</strong> framework for <strong>C#</strong>. It features procedurally generated environments rendered in full 3D.',
			youtube : '5DKm846xjVs'
		},
		{
			name : 'Emo Game 2',
			date : 'August 2006',
			description : 'A 3D adventure game I made when I was 15.  Explore your house as an "emo" kid and perform different tasks commonly associated with someone from their clique like listening to depressing music or writing bad poetry.  The game was programmed using <strong>Blitz3D</strong>.',
			github : 'https://github.com/EricFreeman/Emo-Game-2',
			screenshots : [ 'emo game 2 1.png', 'emo game 2 2.png', 'emo game 2 3.png', 'emo game 2 4.png' ]
		},
		{
			name : 'Frogger3D',
			date : 'July 2006 - August 2006',
			description : 'Frogger clone I programmed in <strong>Blitz3D</strong>.',
			link : 'http://clownhunter.webs.com/Frogger3D.zip',
			screenshots : [ 'frogger3d 1.png' ]
		},
		{
			name : 'Fast Game',
			date : 'April 2006',
			description : 'A 3D driving game I made in a day when I was 14 for an online competition to make a "fast game".  Created using <strong>Blitz3D</strong>.',
			link : 'http://giantshaft.com/Fast%20Game.rar',
			screenshots : [ 'fast game 1.png', 'fast game 2.png', 'fast game 3.png', 'fast game 4.png' ]
		},
		{
			name : 'The Adventures of Mr. Stick and Friends',
			date : 'January 2006',
			description : 'A top down game where you play a stick floating in the water trying to make it to the finish without hitting obstacles.  Created using <strong>BlitzMax</strong>.',
			screenshots : [ 'stick 1.png', 'stick 2.png', 'stick 3.png', 'stick 4.png', 'stick 5.png', 'stick 6.png', 'stick 7.png' ],
			link : 'http://clownhunter.webs.com/The%20Adventures%20of%20Mr.%20Stick%20and%20Friends.zip'
		},
		{
			name : 'Frogger Clone',
			date : 'October 2004',
			description : 'Frogger clone I programmed in <strong>BlitzPlus</strong> when I was 13.',
			link : 'http://my.dmci.net/~jsfreeman/Frogger/Frogger.rar',
			screenshots : [ 'frogger 1.png', 'frogger 2.png', 'frogger 3.png', 'frogger 4.png', 'frogger 5.png', 'frogger 6.png', 'frogger 7.png' ]
		},
		{
			name : 'Mr. Stick Figure',
			link : 'http://my.dmci.net/~jsfreeman/clownhunter/Stick.zip',
			date : 'Circa August 2004 (Exact Date Unknown)',
			description : 'Two player fighting game in an office building.  Another early video game I programmed.  Created using <strong>BlitzPlus</strong>.',
			screenshots : [ 'mr stick figure 1.jpg' ]
		},
		{
			name : 'Clown Hunter',
			link : 'http://my.dmci.net/~jsfreeman/clownhunter/ClownHunter.rar',
			date : 'Circa February 2004 (Exact Date Unknown)',
			description : 'This is the first game I programmed by myself, written when I was about 12 years old.  Shoot clowns as they move back and forth across the screen.  Created using <strong>BlitzPlus</strong>.',
			screenshots :  [ 'clownhunter 1.jpg', 'clownhunter 2.jpg' ]
		}
	];

	$scope.selectedImage = '';

	$scope.selectImage = function(image) {
		$scope.selectedImage = image;
	}

	$scope.deselectImage = function() {
		$scope.selectedImage = null;
	}
}