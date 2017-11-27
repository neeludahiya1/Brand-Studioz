$(document).ready(function(){
	$('.next').click(function(e){
e.preventDefault();
		var nextSlide=$(this).data('slide');	
		var currSlide=$(this).data('curr');	
		var postslide=$(this).data('postslide');	
		$('.slides').removeClass('slideActive');		
		$('.slide'+nextSlide).removeClass('backSlide');		
		$('.slide'+nextSlide).removeClass('nextSlide');		
		$('.slide'+nextSlide).addClass('slideActive');		
		$('.slide'+currSlide).addClass('backSlide');		
		$('.slide'+postslide).removeClass('backSlide');
		$('.slide'+postslide).addClass('nextSlide');
	});
	$('.previous').click(function(e){
e.preventDefault();
		var nextSlide=$(this).data('slide');	
		var currSlide=$(this).data('curr');	
		var postslide=$(this).data('postslide');	
		$('.slides').removeClass('slideActive');		
		$('.slide'+nextSlide).removeClass('nextSlide');		
		$('.slide'+nextSlide).removeClass('backSlide');		
		$('.slide'+nextSlide).addClass('slideActive');		
		$('.slide'+currSlide).addClass('nextSlide');		
		$('.slide'+postslide).removeClass('nextSlide');		
		$('.slide'+postslide).removeClass('backSlide');		
		setTimeout(function(){
		$('.slide'+postslide).addClass('backSlide');},1000);
	});
	
});