(function() {
	

	$('.subscribeInput').each(function(index, element) {
		var $element = $(element);
		var defaultValue = $element.val();

		$element.focus(function() {
			var actualValue = $element.val();
			if (actualValue == defaultValue) {
				$element.val('');
				$element.css('color', '#66655b');
			}
		});
		$element.blur(function() {
			var actualValue = $element.val();
			if (!actualValue) {
				$element.val(defaultValue);
				$element.css('color', '#787878');
			}
		});
	});
}());