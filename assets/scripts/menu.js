var burger = document.querySelector( ".nav__burger" ) ,
	burgerLines = document.querySelectorAll( (".nav__burger__line") ) ,
	menu = document.querySelector( ".nav" ) ,
	isMenuOpen = 0;

function menuClose ()
{
	burger.classList.remove( "nav__burger--open" );

	isMenuOpen = 0;

	TweenMax.to( ".nav" , 0.5 , {
		left: - 400 ,
		ease: Power2.linear
	} );

}

function menuOpen ()
{
	burger.classList.add( "nav__burger--open" );

	isMenuOpen = 1;

	TweenMax.to( ".nav" , 0.5 , {
		left: 0 ,
		ease: Power2.linear
	} );
}

burger.onclick = function ()
{
	if ( isMenuOpen == 0 ) {
		menuOpen();
	}
	else {
		menuClose();
	}
};


// menu resize function in intro js
