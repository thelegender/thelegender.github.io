$(document).ready(function(){
	alert("Hi");
	$('#welcome').mouseenter(function(){
		$('#welcome').fadeTo('fast', 0.5);
	});
	$('#welcome').mouseleave(function(){
		$('#welcome').fadeTo('fast', 1);
	});
});