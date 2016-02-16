require.config( {
	baseUrl: "/innovation-showcase/assets/scripts" ,

	paths: {
		tweenmax: "/innovation-showcase/vendor/gsap/tweenmax",
		jquery: "/innovation-showcase/vendor/jquery/jquery-2.2.0.min"
	}
} );

require( [ "tweenmax" ] , function ()
{
	require( [ "intro" ] );
	require( [ "menu" ] );
} );

require( [ "navigation" ] );
