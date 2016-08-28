	
$(document).ready(function() {
 	
$("input[type='text']").val("");

$("input[class='fahrenheit']").on("keyup", getCel);

$("input[class='celsius']").on("keyup", getFah);


function getCel () {

var value = $("input[class='fahrenheit']").val();

if (isNaN(value)) {

	$(".error").text("Numers only please!");
	$(".container").addClass("animated headShake");
	$(".celsius").val('');

} else {

	$(".error").text("");
	$(".container").removeClass("animated headShake");
	var temperature =  Math.round((value - 32) * 5 / 9).toFixed(1);
	$(".celsius").val(temperature);

}
}


function getFah () {

var value = $("input[class='celsius']").val();

if (isNaN(value)) {

	$(".error").text("Numers only please!");
	$(".container").addClass("animated headShake");
	$(".fahrenheit").val('');

} else {

	$(".error").text("");
	$(".container").removeClass("animated headShake");
	var temperature =  Math.round(value * (9/5) + 32).toFixed(1);
	$(".fahrenheit").val(temperature);
}
}



});
