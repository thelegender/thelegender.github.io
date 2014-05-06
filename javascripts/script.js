$(document).ready(function(){
	$('#window').hide();

	$('#close').click(function(){
		$('#window').slideUp(400);
	});
	$('.button').click(function(){
		var random = Math.floor((Math.random() * 5) + 1);
		if (random == 1){window.location.href = "http://www.youtube.com/";}
		else if (random == 2) {window.location.href = "http://www.roblox.com/";}
		else if (random == 3) {window.location.href = "http://www.codecademy.com/";}
		else if (random == 4) {window.location.href = "http://www.google.com/";}
		else if (random == 5) {window.location.href = "http://www.github.com/";}

	});



	$('.headButton').mouseenter(function(){
		$('.headMenu').show();
	});
	$('.headButton').mouseleave(function(){
		$('.headMenu').hide();
	});
});