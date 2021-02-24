/* eslint-disable @wordpress/no-global-event-listener */
'use strict'

function isInViewport(element) {
	let top = element.offsetTop
	let left = element.offsetLeft
	const width = element.offsetWidth
	const height = element.offsetHeight

	while (element.offsetParent) {
	  element = element.offsetParent
	  top += element.offsetTop
	  left += element.offsetLeft
	}

	return (
	  top >= window.pageYOffset &&
	  left >= window.pageXOffset &&
	  (top + height) <= (window.pageYOffset + window.innerHeight) &&
	  (left + width) <= (window.pageXOffset + window.innerWidth)
	)
}

function animateCSS(elements, exceptions, callback) {
	if (!elements || !elements.length) return

	const cb = callback && typeof callback === 'function'
		? callback
		: () => {}

	for (const element of elements)
		if ( !exceptions || !element.matches(exceptions) ) {
			const animation = element.getAttribute( 'data-animation' ) || null
			const duration = element.getAttribute( 'data-duration' ) || null
			const delay = element.getAttribute( 'data-delay' ) || null
			const repeat = element.getAttribute( 'data-repeat' ) || null

			if ( animation ) {
				if ( duration )
					element.style.setProperty(
						'--animate-duration',
						duration + 'ms'
					)
				if ( delay ) element.style.animationDelay = delay + 'ms'
				if ( repeat ) element.style.animationIterationCount = repeat
				element.classList.add( 'animate__animated', animation )

				element.addEventListener( 'animationend', () => {
					element.classList.remove( 'animate__animated', animation )
					element.style.animationIterationCount = ''
					element.style.animationDelay = ''
					element.style.removeProperty( '--animate-duration' )

					if ( cb ) cb( element )
				} )
			}
		}
}

window.addEventListener('load', () => {
	animateCSS(document.body.querySelectorAll('*[data-animated="true"]:not([data-onscroll="true"])'), null, (element) => {
		element.classList.add( 'animate__complete' )
	})
})

window.addEventListener('scroll', () => {
	if (window.scrollTimeout) clearTimeout(window.scrollTimeout)
	window.scrollTimeout = setTimeout(() => {
		const elements = document.body.querySelectorAll('*[data-onscroll="true"]')
		for (const element of elements) {
			const relative = element.getAttribute('data-relative') || null
			const shouldAnimate = relative
				? isInViewport(document.querySelectorAll(relative)[0])
				: isInViewport(element)
			if (shouldAnimate)
				animateCSS([element], null, (el) => void el.setAttribute('data-onscroll', 'false'))
		} // else { element.classList.remove('animate__animated') … }
		window.scrollTimeout = null
	}, 160)
})

