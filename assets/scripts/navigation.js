function renderPage ( page )
{
	require(["jquery", "tweenmax", "content-aside", "intro"], function () {

		function fadeOut() {
			TweenMax.to( ".ajax-container" , 0.3 , {
				opacity: 0,
				onComplete: loadContent
			} );
		};

		function loadContent (){
			jQuery('.ajax-container').load(page + ".php .ajax");
			fadeIn();
		};

		function fadeIn () {
			TweenMax.to( ".ajax-container" , 0.3 , {
				opacity: 1,
				onComplete: contentAside
			} );

			var windowWidth = window.innerWidth;

			if ( windowWidth < 1100 ) {
				menuClose();
			}
		};

		fadeOut();

	});
}
