//ティッカースライド
$(function () {
	$('.ticker .ticker__text').infiniteslide({
		direction: 'left',
		speed: 20,
		clone: 5,
		pauseonhover: false
	});
});
