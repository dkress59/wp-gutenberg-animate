(jQuery)(function($) {
	$('[data-animated=true]').each(function() {
		var dur = $(this).attr('data-duration')
			? $(this).attr('data-duration') 
			: null;
		var del = $(this).attr('data-delay') 
			? $(this).attr('data-delay') 
			: null;
		var ani = $(this).attr('data-animation')
			? $(this).attr('data-animation')
			: '';

		$(this)
			.css({
				'animation-delay': del && del !== '0' ? del + 'ms' : '',
				'animation-duration': dur && dur !== '0' ? dur + 'ms' : '',
			})
			.addClass('animated ' + ani);
	});
})
/* var elements = document.querySelectorAll('[data-animated=true]'), i;
console.log(elements[0]);
for (i = 0; i < elements.length; i++) {
	var el = elements[i];
	console.log(el);
	if (el.hasAttribute('data-duration'))
		el.style.animationDuration = el.getAttribute('data-duration');
	if (el.hasAttribute('data-delay'))
		el.style.animationDelay = el.getAttribute('data-delay');

	if (el.hasAttribute('data-animation'))
		el.classList.add('animated ' + el.getAttribute('data-animation'));
} */