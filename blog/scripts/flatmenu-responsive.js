
$(function() {
		   
	// main menu toggler
	$('.nav').prepend('<div class="menu-icon"> <strong><img src="images/logo.png" alt="" style="height:25px"></strong><span>Menu</span></div>');
	$('.menu-icon').click(function(){						
		$('ul.dropdown').slideToggle(600);
		$(this).toggleClass("active");	
	});	
	// sub menu accordion-like toggler 
	var $menuToggler = $('.sub > a');
	$menuToggler.click(function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('current').next('ul').toggleClass('current');
	});	
	
});
