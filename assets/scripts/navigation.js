function renderPage ( page )
{
	require(["jquery", "tweenmax", "content-aside"], function () {

		function fadeOut() {
			TweenMax.to( ".ajax" , 0.25 , {
				opacity: 0,
				onComplete: loadContent
			} );
		};

		function loadContent (){
			jQuery('.ajax-container').load(page + ".php .ajax");
			fadeIn();
		};

		function fadeIn () {
			TweenMax.to( ".ajax" , 0.25 , {
				opacity: 1,
				onComplete: contentAside
			} );
		};

		fadeOut();

	});
}
