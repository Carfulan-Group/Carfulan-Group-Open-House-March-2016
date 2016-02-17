require( [ "tweenmax" , "menu" ] , function ()
{

	function setMenu ()
	{
		var windowWidth = window.innerWidth;

		if ( windowWidth > 1100 ) {
			menuOpen();

			var menuWidth = document.querySelector( ".nav" ).clientWidth ,
				newPadding = menuWidth;

			document.body.style.paddingLeft = newPadding + "px";
		}
		else {
			menuClose();

			document.body.style.paddingLeft = 0;
		}
	}

	var introImage = document.querySelector( ".intro__image" );

	function titleStops ()
	{
		TweenMax.to( ".intro__title .intro__title--stop" , 2 , {
			opacity: 1 ,
			ease: Elastic.easeInOut ,
			onComplete: introAway
		} );
	}

	function titleText ()
	{
		TweenMax.staggerTo( ".intro__title .intro__title--text" , 0.5 , {
			opacity: 1
		} , 1 , titleStops );
	}

	function introAway ()
	{
		TweenMax.to( ".intro" , 0.5 , {
			top: - 999 ,
			ease: Power2.easeIn ,
			delay: 0.5 ,
			onComplete: contentIn
		} );
	}

	function contentIn ()
	{
		require(["content-aside"], function () {
			TweenMax.to( ".content" , 0.5 , {
				top: 0 ,
				ease: Elastic.linear,
				onComplete: contentAside
			} );
			document.body.classList.add("background");
		});

		document.querySelector( "html" ).style.overflowY = "scroll";

		setMenu();
	}

	TweenMax.to( introImage , 2 , {
		top: 0 ,
		ease: Elastic.easeInOut ,
		onComplete: titleText
	} );

	window.onresize = function () {
		setMenu();
	}
} );
