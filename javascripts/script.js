$(document).ready(function(){
	$('#window').hide();
	$('.button').mouseenter(function(){
		$('.button').fadeTo('fast', 0.7);
	});
	$('.button').mouseleave(function(){
		$('.button').fadeTo('fast', 1);
	});
	$('#close').click(function(){
		$('#window').fadeOut(300);
	});
	$('.button').click(function(){
		$('#window').fadeIn(300);
	});
});