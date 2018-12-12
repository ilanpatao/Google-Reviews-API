// Add the click function for the go button
$('.go').click(function(){
	// Get the place ID value
	var placeid = $('#placeid').val();
	if (placeid == ''){
		// Alert if field is blank, else continue
		alert('You didn\'t enter a place ID!');
	} else {
		// Call my API
		$.getJSON("https://cors-anywhere.herokuapp.com/https://www.reviewsmaker.com/api/public/google?pid=" + placeid, function (data){
			// Iterate through the results for this demo and display them on the page
			$.each( data.reviews, function( key, value ) {
			  $('.results').append('<b>Review Author: </b>' + value.reviewAuthor + "<br>");
			  $('.results').append('<b>Review Author Plus Profile ID: </b>' + value.plusId + "<br>");
			  $('.results').append('<b>Review Author Image: </b>' + value.reviewAuthorImage + "<br>");
			  $('.results').append('<b>Review Date: </b>' + value.reviewDate + "<br>");
			  $('.results').append('<b>Review Raw Date: </b>' + value.rawDate + "<br>");
			  $('.results').append('<b>Review Rating: </b>' + value.reviewRating + "<br>");
			  $('.results').append('<b>Review Text: </b>' + value.reviewText + "<br>");
			  $('.results').append('<b>Review URL: </b>' + value.reviewUrl + "<br>");
			  $('.results').append('<b>Review Flag URL: </b>' + value.flagUrl + "<hr>");
			});
			// Display JSON feed in our input for the demo
			var json = JSON.stringify(data);
			$("#jsonresults").val(json);
		});
	}
});