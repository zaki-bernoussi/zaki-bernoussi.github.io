console.log("APP JS RUNNING!");

$(document).ready(function() {

	// 1
	$('#city-type').change(function () {

		// 4
		var city = $('#city-type').val();

		// 5
		$('body').removeClass();

		// 6
		$('body').addClass(city)
	});
});
