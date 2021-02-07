(() => {
	'use strict'

	const animateCSS = ( selector, exceptions, callback ) => {
		if ( ! selector ) return

		const cb =
			callback && typeof callback === 'function' ? callback : () => {}

		for ( const node of document.body.querySelectorAll( selector ) )
			if ( ! exceptions || ! node.matches( exceptions ) ) {
				const animation = node.getAttribute( 'data-animation' ) || null
				const duration = node.getAttribute( 'data-duration' ) || null
				const delay = node.getAttribute( 'data-delay' ) || null
				const repeat = node.getAttribute( 'data-repeat' ) || null

				if ( animation ) {
					if ( duration )
						node.style.setProperty(
							'--animate-duration',
							duration + 'ms'
						)
					if ( delay ) node.style.animationDelay = delay + 'ms'
					if ( repeat ) node.style.animationIterationCount = repeat
					node.classList.add( 'animate__animated', animation )

					node.addEventListener( 'animationend', () => {
						node.classList.remove( 'animate__animated', animation )
						node.style.animationIterationCount = ''
						node.style.animationDelay = ''
						node.style.removeProperty( '--animate-duration' )

						if ( cb ) cb( node )
					} )
				}
			}
	}

	animateCSS( '*[data-animated="true"]', false, ( node ) =>
		node.classList.add( 'animate__complete' )
	)
})()
