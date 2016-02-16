function renderPage ( page )
{
require(["jquery", "tweenmax"], function () {
	// TweenMax.to( ".content__container" , 1 , {
	// 	opacity: 0 ,
	// 	top: "-100vh",
	// 	ease: Elastic.easeInOut
	// } );

	jQuery('.content__container').load(page + ".php .content__container");

	// TweenMax.to( ".content__container" , 1 , {
	// 	opacity: 1 ,
	// 	top: 0,
	// 	ease: Elastic.easeInOut
	// } );
});
}
