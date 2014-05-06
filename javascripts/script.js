$(document).ready(function(){
	$('#window').hide();
	$('.button').mouseenter(function(){
		$('.button').fadeTo('fast', 0.7);
	});
	$('.button').mouseleave(function(){
		$('.button').fadeTo('fast', 1);
	});
	$('#close').click(function(){
		$('#window').slideUp(400);
	});
	$('.button').click(function(){
		$('#window').show(400);
	});



	$('.headButton').mouseenter(function(){
		$('.headMenu').show();
	});
	$('.headButton').mouseleave(function(){
		$('.headMenu').slideUp(400);
	});
});