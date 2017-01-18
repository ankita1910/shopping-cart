Stripe.setPublishableKey('pk_test_tI21OZRzpUp1gjP32cQ9uNFn');

var $form = $("#checkout-form");

/* Buy now action */

$("#buy-now").click(function() {
	console.log("hieee");
	$('#charge-error').addClass("hidden");
	$form.find('button').prop('disabled', true);
	console.log("form submit");
	Stripe.card.createToken({
		number: $('#card-number').val(),
		cvc: $('#card-cvc').val(),
		exp_month: $('#card-expiry-month').val(),
		exp_year: $('#card-expiry-year').val(),
		name: $('#card-name')
	}, stripeResponseHandler);
	return false;
});

// $form.submit(function(event) {
// 	// $('#charge-error').addClass("hidden");
// 	// $form.find('button').prop('disabled', true);
// 	// console.log("form submit");
// 	// Stripe.card.createToken({
// 	// 	number: $('#card-number').val(),
// 	// 	cvc: $('#card-cvc').val(),
// 	// 	exp_month: $('#card-expiry-month').val(),
// 	// 	exp_year: $('#card-expiry-year').val(),
// 	// 	name: $('#card-name')
// 	// }, stripeResponseHandler);
// 	// return false;
// });

function stripeResponseHandler(status, response) {
	if(response.error) {
		$('#charge-error').text(response.error.message);
		$('#charge-error').removeClass("hidden");
   		$form.find('button').prop('disabled', false);
	} else {
 		var token = response.id;
		$form.append($('<input type="hidden" name="stripeToken" />').val(token));
		$form.get(0).submit();
	}
}