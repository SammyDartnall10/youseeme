$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwv9QqbE6ZAtRtFQJdI2sNsNbnz_qoD05XGsx_HpYFeVdNbXVAg/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).done(
    // do something
    console.log("It worked")
  );
})