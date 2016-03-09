require.config( {
	baseUrl: "/innovation-showcase/assets/scripts" ,

	paths: {
		tweenmax: "/innovation-showcase/vendor/gsap/tweenmax",
		jquery: "/innovation-showcase/vendor/jquery/jquery-2.2.0.min"
	}
} );


require( [ "tweenmax" ] , function ()
{
	require( [ "content-aside" ] );
	require( [ "intro" ] );
	require( [ "menu" ] );
} );

require( [ "navigation" ] );

document.querySelector('.nav').onmouseover = function () {
	require(["get-directions"]);
}

require(["jquery"], function() {
	$('body').on('click', 'a', function (event) {
		if ( $(this).attr("href") == "mailto:sarahg@carfulan.com?BCC=chrisf@carfulan.com&Subject=Innovation%20Showcase%20Signup&Body=Name%3A%20%0A%0ACompany%3A%20%0A%0AJob%20Title%3A%20%0A%0AInterests%3A%20Metal%203D%20Printing%20/%20Plastic%203D%20Printing%20/%20Tool%20Presetting%20/%20Measurement%20Machines%20%28Delete%20Appropriate%29%0A%0ALunch%3A%20Yes%20/%20No%20%28Delete%20Appropriate%29%20%0A%0ADay%3A%2015th%20March%20/%2016th%20March%20%20%28Delete%20Appropriate%29%0A%0ATelephone%20Number%3A%20%20%0A%0AAny%20other%20attendees%3A%0A" ) {

            var w = window;            
            w.google_conversion_id = 993330739;
            w.google_conversion_label = "KDJnCMzStmQQs4zU2QM";
            w.google_remarketing_only = false;
            
		}
	});
});
