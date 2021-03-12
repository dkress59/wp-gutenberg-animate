/* eslint-disable @wordpress/no-global-event-listener */
'use strict'

//TODO: Instructions inside Plugin Settings

// If element is either partially or completely inside the viewport
function isInViewport(element) {
	let top = element.offsetTop

	while (element.offsetParent) {
	  element = element.offsetParent
	  top += element.offsetTop
	}

	return (
	  top >= window.pageYOffset &&
	  top <= window.pageYOffset + window.innerHeight
	)
}

// If element is above the viewport (or partially/entirely inside of it)
function isAboveViewport(element) {
	const el = element
	let top = element.offsetTop

	while (element.offsetParent) {
	  element = element.offsetParent
	  top += element.offsetTop
	}

	return (
      isInViewport(el) ||
	  top <= window.pageYOffset ? true : false
	)
}

// If element is completely (top, right, bottom, left) inside the viewport
function isCompletelyInViewport(element) {
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

function selectTrigger(mode) {
	if (mode === '1') return isInViewport
	if (mode === '2') return isCompletelyInViewport
	return isAboveViewport
}

function animateCSS(elements, exceptions = null, callback = () => {}) {
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
		// eslint-disable-next-line no-undef
		const globalOnScrollTrigger = selectTrigger(animateGlobal.scrollTrigger)
		const elements = document.body.querySelectorAll('*[data-onscroll="true"]')
		let i = 0
		for (const element of elements) {
			const relative = element.getAttribute('data-relative') || null
			const scrollCondition = !element.getAttribute('data-onscroll-trigger')
				? globalOnScrollTrigger
				: selectTrigger(element.getAttribute('data-onscroll-trigger')) // TODO: animation control
			const shouldAnimate = relative
				? scrollCondition(document.querySelector(relative))
				: scrollCondition(element)
			if (shouldAnimate) {
				setTimeout(() => { // TODO: animation control
					element.setAttribute('data-onscroll', 'false')
					animateCSS([element])
				}, i * 100)
				i++
			}
		}
		window.scrollTimeout = null
	}, 160)
})

