jQuery(document).ready(function () {
	/*
	
		OFF CANVAS - SIDEBAR TOGGLE
		
	*/
	
	jQuery('[data-toggle="offcanvas"]').click(function () {
    jQuery('.row-offcanvas').toggleClass('active');
  });
	
	/*
	
		MENU DROPDOWN - NEXT LEVEL HOVER
		
	*/
	
	jQuery(".dropdown").hover(function() { 
		jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeIn("fast");
  }, function() { 
		jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeOut("fast");
  });
	
	
	/* WINDOW RESIZE FUNCTION  */
	jQuery( window ).resize(function() {
		
		/*
			ABOVE 980px, Remove Off-Canvas Sidebar
		*/
		if(jQuery( window ).width() >= 980) {
			jQuery('body > div.nus-body-container').removeClass('active');
		}
		
	});
	
	
	/* CUSTOM JQUERY STARTS HERE */
	
	// MOBILE MENU
	
	var mmenu = $('.nus-megamenu').html();
		$('.mobilemenu').append(mmenu);
		
		$('.mobilemenu li').click(function(){
			$('.mobilemenu li').removeClass("current active");
			$(this).addClass("current active");
		});
	  
	
	// CHANGE ACTIVE
	var currtitle = $('title').text(); 
	var getclass = currtitle.trim().toLowerCase().replace(/ /g, '');
	var ahtml;
	//console.log(getclass);
	
	$(".nus-megamenu ul > li a").each(function(i,v){
		var getthis = $(this);
		ahtml = $(this).first().text().trim().toLowerCase().replace(/ /g, '');
		//console.log(ahtml);
	
		if(getclass == ahtml){
			$(".nus-megamenu ul > li").removeClass("current active");
			$(this).parent().addClass("current active");
			
			// FOR MOBILE SIDEBAR
			var mobileside = $(this).parent().find("ul.dropdown-menu").html();
			console.log(mobileside);
			
			
			$('title').html('NUS Temasek Hall - ' +currtitle);
			$(".nus-sidebar-nav").find("ul").append(mobileside).children().first().addClass("active");
		}
	});
	
	
	
	// SIDEBAR ACTIVE
	var matchhtml = $(".nus-department-header h2").text();
	//console.log(matchhtml);
	
	$(".nus-sidebar-nav").find("ul li").each(function(ind,val){
		if(matchhtml == $(this).text().trim()){
			$(".nus-sidebar-nav").find("ul").children().removeClass("active");
			$(this).addClass("active");
		}
		
	});
	
	function boxone() {
        var maxHeight = -1;
        var els = $('.event-details h4, .people-det');
        els.each(function () {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        els.each(function () {
            $(this).height(maxHeight);
        });
    }
	
	boxone();
	
});