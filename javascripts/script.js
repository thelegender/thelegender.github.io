$(document).ready(function(){
	$('#window').hide();
	$('#welcome').mouseenter(function(){
		$('#welcome').fadeTo('fast', 0.5);
	});
	$('#welcome').mouseleave(function(){
		$('#welcome').fadeTo('fast', 1);
	});
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