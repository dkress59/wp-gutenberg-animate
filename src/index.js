import './editor.scss'
import './style.scss'
import { animationClassNames } from './assets/animations'

import { assign } from 'lodash'
import { __ } from '@wordpress/i18n'
import { Fragment, Component } from '@wordpress/element'
import { addFilter } from '@wordpress/hooks'
import { TextControl, SelectControl, PanelBody, ToggleControl } from '@wordpress/components'
import { createHigherOrderComponent } from '@wordpress/compose'
import { InspectorControls } from '@wordpress/block-editor'

/**
 * Override the default edit UI to include a new block inspector control for
 * adding our custom control.
 *
 * @param {Function | Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
export const addAnimateBlockControls = createHigherOrderComponent(BlockEdit => {
	return props => {
		const {
			name,
			isSelected,
			setAttributes,
			attributes: {
				gbaType, gbaDuration, gbaDelay, gbaRepeat, gbaScroll, gbaRelative
			}
		} = props

		const options = animationClassNames.map(a => ({
			label: a[0], value: a[1], disabled: a[2]
		}))
		options.unshift(
			{ label: 'none', value: '' },
			{ label: '————', value: '', disabled: true },
		)

		if (isValidBlockType(name) && isSelected)
			return <Fragment>

				<animateditor
					onAnimationEnd={ (e) => e.target.classList.remove('animate__animated') }
					className={ gbaType !== ''
							? 'animate__animated ' + gbaType
							: ''
						}
					style={ gbaDuration
							? { animationDuration: gbaDuration + 'ms' }
							: null
						}
					>
					<BlockEdit { ...props } />
				</animateditor>

				<InspectorControls>
					<PanelBody
						title={ __('Animation Controls', 'dk-gb/animate') }
						className="gb-animation-panel"
						initialOpen={ true }>

						<SelectControl
							label={ __('Type', 'dk-gb/animate') }
							value={ gbaType || '' }
							onChange={ option => {
									setAttributes({ gbaType: option })
								} }
							options={ options }
							/>

						<TextControl
							className="repeat"
							type="number"
							min={ 0 }
							label={ __('Repetitions', 'dk-gb/animate') }
							value={ gbaRepeat || '' }
							onChange={ value => setAttributes({ gbaRepeat: value }) }
							/>

						<TextControl
							className="duration"
							type="number"
							min={ 0 }
							help={ __('time in milliseconds', 'dk-gb/animate') }
							label={ __('Duration', 'dk-gb/animate') }
							value={ gbaDuration || '' }
							onChange={ value => setAttributes({ gbaDuration: value }) }
						/>

						<TextControl
							className="delay"
							type="number"
							min={ 0 }
							help={ __('time in milliseconds', 'dk-gb/animate') }
							label={ __('Delay', 'dk-gb/animate') }
							value={ gbaDelay || '' }
							onChange={ value => setAttributes({ gbaDelay: value }) }
						/>

						<ToggleControl
							className="scroll"
							help={__('only begin the animation after current element is scrolled into the viewport', 'dk-gb/animate')}
							label={ __('On scroll', 'dk-gb/animate') }
							checked={ gbaScroll }
							onChange={ value => setAttributes({ gbaScroll: value ? 'true' : 'false' }) }
						/>
						<TextControl
							className="relative"
							help={ __('begin animation if another element is scrolled into view', 'dk-gb/animate') }
							placeholder="CSS selector"
							value={ gbaRelative }
							onChange={ value => setAttributes({ gbaRelative: value }) }
						/>

					</PanelBody>
				</InspectorControls>
			</Fragment>

		return <BlockEdit { ...props } />
	}
}, 'addAnimateBlockControls')
addFilter('editor.BlockEdit', 'dkress/gb-animate', addAnimateBlockControls)

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addAttribute(settings) {
	if (isValidBlockType(settings.name))
		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign(settings.attributes, {
			gbaType: {
				type: 'string'
			},
			gbaDuration: {
				type: 'string'
			},
			gbaDelay: {
				type: 'string'
			},
			gbaRepeat: {
				type: 'string'
			},
			gbaScroll: {
				type: 'string'
			},
			gbaRelative: {
				type: 'string'
			}
		})


	return settings
}
addFilter('blocks.registerBlockType', 'dkress/gb-animate/add-attr', addAttribute)

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
export function addSaveProps(extraProps, blockType, attributes) {
	// If the current block is valid, add our prop.
	if (isValidBlockType(blockType.name)) {
		if (!attributes.gbaType || attributes.gbaType === '')
			return

		extraProps['data-animation'] = attributes.gbaType
		extraProps['data-animated'] = true

		extraProps['data-duration'] = attributes.gbaDuration
		extraProps['data-delay'] = attributes.gbaDelay
		extraProps['data-repeat'] = attributes.gbaRepeat

		extraProps['data-onscroll'] = attributes.gbaScroll
		extraProps['data-relative'] = attributes.gbaRelative
	}

	return extraProps
}
addFilter('blocks.getSaveContent.extraProps', 'dkress/gb-animate/add-props', addSaveProps)


function isValidBlockType(name) {
	/**
	 * You can use this function to only selectively
	 * enable animation options for certain blocks:
	 *
	 * 1) comment out the next line
	 * 2) comment out the corresponding strings in
	 *		validBlockTypes for the blocks which you
	 *		would like to disable
	 *
	 */
	return true

	// eslint-disable-next-line no-unreachable
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
	]

	return validBlockTypes.includes(name)
}
