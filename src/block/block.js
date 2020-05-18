/***
	*
	* @version 0.2
	* @since 0.1
	* 
***/

const { assign } = lodash;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks;
const { TextControl, SelectControl, PanelBody } = wp.components;
const { createHigherOrderComponent, withState } = wp.compose;
const { InspectorControls } = wp.editor;


//import { SelectControl } from '@wordpress/components';
/**
 * Override the default edit UI to include a new block inspector control for
 * adding our custom control.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
export const addAnimateBlockControls = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {

		// If this block supports scheduling and is currently selected, add our UI
		if ( isValidBlockType( props.name ) && props.isSelected ) {
			return (
				<Fragment>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody
						title={ __( 'Animation Controls' ) }
						className="gb-animation-panel"
						initialOpen={ true }>
							<SelectControl
								label="Animation Type"
								value={ props.attributes.gbaType || '' } // e.g: value = [ 'a', 'c' ]
								onChange={ ( option ) => { 
									props.setAttributes( { gbaType: option } )
								} }
								options = { [
									//{ value: '', label: '' },
									//{ value: 'none', label: '----' },
									{ value: 'none', label: '' },
									{ value: 'bounce', label: 'bounce' },
									{ value: 'flash', label: 'flash' },
									{ value: 'pulse', label: 'pulse' },
									{ value: 'rubberBand', label: 'rubberBand' },
									{ value: 'shake', label: 'shake' },
									{ value: 'headShake', label: 'headShake' },
									{ value: 'swing', label: 'swing' },
									{ value: 'tada', label: 'tada' },
									{ value: 'wobble', label: 'wobble' },
									{ value: 'jello', label: 'jello' },
									{ value: 'bounceIn', label: 'bounceIn' },
									{ value: 'bounceInDown', label: 'bounceInDown' },
									{ value: 'bounceInLeft', label: 'bounceInLeft' },
									{ value: 'bounceInRight', label: 'bounceInRight' },
									{ value: 'bounceInUp', label: 'bounceInUp' },
									{ value: 'bounceOut', label: 'bounceOut' },
									{ value: 'bounceOutDown', label: 'bounceOutDown' },
									{ value: 'bounceOutLeft', label: 'bounceOutLeft' },
									{ value: 'bounceOutRight', label: 'bounceOutRight' },
									{ value: 'bounceOutUp', label: 'bounceOutUp' },
									{ value: 'fadeIn', label: 'fadeIn' },
									{ value: 'fadeInDown', label: 'fadeInDown' },
									{ value: 'fadeInDownBig', label: 'fadeInDownBig' },
									{ value: 'fadeInLeft', label: 'fadeInLeft' },
									{ value: 'fadeInLeftBig', label: 'fadeInLeftBig' },
									{ value: 'fadeInRight', label: 'fadeInRight' },
									{ value: 'fadeInRightBig', label: 'fadeInRightBig' },
									{ value: 'fadeInUp', label: 'fadeInUp' },
									{ value: 'fadeInUpBig', label: 'fadeInUpBig' },
									{ value: 'fadeOut', label: 'fadeOut' },
									{ value: 'fadeOutDown', label: 'fadeOutDown' },
									{ value: 'fadeOutDownBig', label: 'fadeOutDownBig' },
									{ value: 'fadeOutLeft', label: 'fadeOutLeft' },
									{ value: 'fadeOutLeftBig', label: 'fadeOutLeftBig' },
									{ value: 'fadeOutRight', label: 'fadeOutRight' },
									{ value: 'fadeOutRightBig', label: 'fadeOutRightBig' },
									{ value: 'fadeOutUp', label: 'fadeOutUp' },
									{ value: 'fadeOutUpBig', label: 'fadeOutUpBig' },
									{ value: 'flipInX', label: 'flipInX' },
									{ value: 'flipInY', label: 'flipInY' },
									{ value: 'flipOutX', label: 'flipOutX' },
									{ value: 'flipOutY', label: 'flipOutY' },
									{ value: 'lightSpeedIn', label: 'lightSpeedIn' },
									{ value: 'lightSpeedOut', label: 'lightSpeedOut' },
									{ value: 'rotateIn', label: 'rotateIn' },
									{ value: 'rotateInDownLeft', label: 'rotateInDownLeft' },
									{ value: 'rotateInDownRight', label: 'rotateInDownRight' },
									{ value: 'rotateInUpLeft', label: 'rotateInUpLeft' },
									{ value: 'rotateInUpRight', label: 'rotateInUpRight' },
									{ value: 'rotateOut', label: 'rotateOut' },
									{ value: 'rotateOutDownLeft', label: 'rotateOutDownLeft' },
									{ value: 'rotateOutDownRight', label: 'rotateOutDownRight' },
									{ value: 'rotateOutUpLeft', label: 'rotateOutUpLeft' },
									{ value: 'rotateOutUpRight', label: 'rotateOutUpRight' },
									{ value: 'hinge', label: 'hinge' },
									{ value: 'jackInTheBox', label: 'jackInTheBox' },
									{ value: 'rollIn', label: 'rollIn' },
									{ value: 'rollOut', label: 'rollOut' },
									{ value: 'zoomIn', label: 'zoomIn' },
									{ value: 'zoomInDown', label: 'zoomInDown' },
									{ value: 'zoomInLeft', label: 'zoomInLeft' },
									{ value: 'zoomInRight', label: 'zoomInRight' },
									{ value: 'zoomInUp', label: 'zoomInUp' },
									{ value: 'zoomOut', label: 'zoomOut' },
									{ value: 'zoomOutDown', label: 'zoomOutDown' },
									{ value: 'zoomOutLeft', label: 'zoomOutLeft' },
									{ value: 'zoomOutRight', label: 'zoomOutRight' },
									{ value: 'zoomOutUp', label: 'zoomOutUp' },
									{ value: 'slideInDown', label: 'slideInDown' },
									{ value: 'slideInLeft', label: 'slideInLeft' },
									{ value: 'slideInRight', label: 'slideInRight' },
									{ value: 'slideInUp', label: 'slideInUp' },
									{ value: 'slideOutDown', label: 'slideOutDown' },
									{ value: 'slideOutLeft', label: 'slideOutLeft' },
									{ value: 'slideOutRight', label: 'slideOutRight' },
									{ value: 'slideOutUp', label: 'slideOutUp' },
								] }
							/>
							<TextControl
								className="duration"
								label={ __( 'Animation Duration' ) }
								//help={ __( 'Some help text for my custom control.' ) }
								value={ props.attributes.gbaDuration || '' }
								onChange={ ( nextValue ) => {
									props.setAttributes( {
										gbaDuration: nextValue,
									} );
								} } />
							<TextControl
								className="delay"
								label={ __( 'Animation Delay' ) }
								//help={ __( 'Some help text for my custom control.' ) }
								value={ props.attributes.gbaDelay || '' }
								onChange={ ( nextValue ) => {
									props.setAttributes( {
										gbaDelay: nextValue,
									} );
								} } />
						</PanelBody>
					</InspectorControls>
				</Fragment>
			);
		}

		return <BlockEdit { ...props } />;
	};
}, 'addAnimateBlockControls' );

addFilter( 'editor.BlockEdit', 'dk-animate-gutenberg/block-control', addAnimateBlockControls );


/**
 * Is the passed block name one which supports our custom field?
 * ToDo: cross-reference with WP Documentation, update if neccessary
 *
 * @param {string} name The name of the block.
 */
function isValidBlockType( name ) {

		const validBlockTypes = [
			'core/paragraph',
			'core/image',
			'core/heading',
			'core/gallery',
			'core/list',
			'core/quote',
			'core/shortcode',
			'core/archives',
			'core/audio',
			'core/button',
			'core/categories',
			'core/code',
			'core/columns',
			'core/column',
			'core/cover-image',
			'core/embed',
			'core/file',
			'core/freeform',
			'core/html',
			'core/latest-comments',
			'core/latest-posts',
			'core/more',
			'core/nextpage',
			'core/preformatted',
			'core/pullquote',
			'core/separator',
			'core/block',
			'core/spacer',
			'core/subhead',
			'core/table',
			'core/template',
			'core/text-columns',
			'core/verse',
			'core/video',
			'core-embed/twitter',
			'core-embed/youtube',
			'core-embed/facebook',
			'core-embed/instagram',
			'core-embed/wordpress',
			'core-embed/soundcloud',
			'core-embed/spotify',
			'core-embed/flickr',
			'core-embed/vimeo',
			'core-embed/animoto',
			'core-embed/cloudup',
			'core-embed/collegehumor',
			'core-embed/dailymotion',
			'core-embed/funnyordie',
			'core-embed/hulu',
			'core-embed/imgur',
			'core-embed/issuu',
			'core-embed/kickstarter',
			'core-embed/meetup-com',
			'core-embed/mixcloud',
			'core-embed/photobucket',
			'core-embed/polldaddy',
			'core-embed/reddit',
			'core-embed/reverbnation',
			'core-embed/screencast',
			'core-embed/scribd',
			'core-embed/slideshare',
			'core-embed/smugmug',
			'core-embed/speaker',
			'core-embed/speaker-deck',
			'core-embed/ted',
			'core-embed/tumblr',
			'core-embed/videopress',
			'core-embed/wordpress-tv'
		];

	return validBlockTypes.includes( name );

}// end isValidBlockType()


/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addAttribute( settings ) {

	// If this is a valid block
	if ( isValidBlockType( settings.name ) ) {

		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, {
			gbaType: {
				type: 'string',
			},
			gbaDuration: {
				type: 'string',
			},
			gbaDelay: {
				type: 'string',
			},
		} );
	}

	return settings;

}// end addAttribute()


/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
export function addSaveProps( extraProps, blockType, attributes ) {

	// If the current block is valid, add our prop.
	// Comment out the next line to make the features accessible to ANY GB Block (experimental)
	if ( isValidBlockType( blockType.name ) ) {
		extraProps['data-animation'] = attributes.gbaType;
		if ( !attributes.gbaType || attributes.gbaType === 'none' ) {
			//extraProps['data-animated'] = false
		} else {
			extraProps['data-animated'] = true;
		}
		extraProps['data-duration'] = attributes.gbaDuration;
		extraProps['data-delay'] = attributes.gbaDelay;
	// Comment out the next line to make the features accessible to ANY GB Block (experimental)
	}

	return extraProps;

}// end addSaveProps()

addFilter( 'blocks.registerBlockType', 'dk-animate-gutenberg/add-attr', addAttribute );
addFilter( 'blocks.getSaveContent.extraProps', 'dk-animate-gutenberg/add-props', addSaveProps );