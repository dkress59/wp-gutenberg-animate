jQuery(document).ready(function ($) {
	if( $( 'select' ).length > 0 ) {
		$( 'select' ).select2();
		$( document.body ).on( "click", function() {
			 $( 'select' ).select2();
		  });
	}
});
