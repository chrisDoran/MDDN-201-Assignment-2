jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('body').videoBG({
		position:"fixed",
		zIndex:0,
		mp4:'img/vid.mp4',		
		webm:'img/vid.webm',		
		opacity:.9,
		fullscreen:true,
	});

    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });

	

});

